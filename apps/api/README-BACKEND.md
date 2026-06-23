# Backend Pizzeria — Guida Avvio e Deploy

## 1. Setup locale (prima volta)

### Crea il file `.env` nella cartella `apps/api/`

Crea manualmente il file `apps/api/.env` con questo contenuto:

```
DATABASE_URL="file:./prisma/pizzeria.db"
PIZZERIA_TOKEN="pizza-secret-2024"
PORT=4000
NODE_ENV=development
```

> Cambia `PIZZERIA_TOKEN` con un valore segreto a tua scelta prima del deploy su cloud.

### Installa le dipendenze

Dalla root del monorepo:

```bash
pnpm install
```

### Genera il client Prisma e crea il database

```bash
pnpm --filter @pizzeria/api prisma:generate
pnpm --filter @pizzeria/api prisma:migrate
```

Quando chiede il nome della migrazione, digita: `init`

Questo crea il file `apps/api/prisma/pizzeria.db` con tutte le 19 tabelle.

### Avvia il backend in sviluppo

```bash
pnpm --filter @pizzeria/api start:dev
```

Il backend sarà disponibile su `http://localhost:4000`.

### Verifica che funzioni

```bash
# Senza token → deve rispondere 401
curl http://localhost:4000/api/categorie

# Con token → deve rispondere 200 con array vuoto []
curl -H "X-Pizzeria-Token: pizza-secret-2024" http://localhost:4000/api/categorie
```

---

## 2. Migra i dati da localStorage (una volta sola)

Apri la console del browser su web-admin (http://localhost:3000), copia il contenuto dello store Zustand e chiama:

```bash
curl -X POST http://localhost:4000/api/sync/seed \
  -H "X-Pizzeria-Token: pizza-secret-2024" \
  -H "Content-Type: application/json" \
  -d '{"storeData": { "categorieMenu": [...], "articoliMenu": [...], ... }}'
```

---

## 3. Deploy su Railway

### Prerequisiti
- Account su [railway.app](https://railway.app) (gratuito)
- Repository GitHub con il codice pushato

### Passi

1. Vai su [railway.app](https://railway.app) → **New Project** → **Deploy from GitHub repo**
2. Seleziona il repository `pizzeria-app`
3. Railway rileva il `Dockerfile` in `apps/api/` automaticamente
   - Se non lo rileva: imposta **Root Directory** = `apps/api`
4. Vai su **Variables** e aggiungi:
   ```
   DATABASE_URL=file:./prisma/pizzeria.db
   PIZZERIA_TOKEN=<token segreto tuo>
   PORT=4000
   NODE_ENV=production
   ```
5. Vai su **Settings** → **Networking** → **Generate Domain** per ottenere l'URL pubblico
6. Vai su **Volumes** → **New Volume** → mount path `/app/apps/api/prisma` per persistere il DB SQLite

L'URL sarà tipo: `https://pizzeria-api-xxxx.up.railway.app`

### Verifica deploy

```bash
curl -H "X-Pizzeria-Token: <tuo-token>" https://pizzeria-api-xxxx.up.railway.app/api/impostazioni
```

---

## 4. Configurare le app per puntare al backend

### web-admin e console-regia
Nella pagina `/impostazioni` di ciascuna app, inserisci l'URL del backend:
- Locale: `http://localhost:4000`
- Cloud: `https://pizzeria-api-xxxx.up.railway.app`

### App mobile (Expo)
Alla prima apertura, la schermata di onboarding chiede l'IP del server.
Inserisci l'URL senza `https://` (solo IP:porta) per la rete locale,
oppure l'URL Railway completo per il cloud.

---

## 5. Endpoint disponibili

Tutti gli endpoint richiedono l'header `X-Pizzeria-Token: <token>`.

| Metodo | Endpoint | Descrizione |
|--------|----------|-------------|
| GET | /api/categorie | Lista categorie menu |
| GET | /api/sottocategorie?categoriaId= | Lista sottocategorie |
| GET | /api/articoli?categoriaId=&disponibile= | Lista articoli |
| GET | /api/ingredienti | Lista ingredienti |
| GET | /api/listini | Lista listini |
| GET | /api/categorie-stampanti | Categorie stampanti |
| GET | /api/stampanti | Lista stampanti |
| GET | /api/sale | Sale con tavoli |
| GET | /api/tavoli?salaId= | Lista tavoli |
| GET | /api/clienti?q= | Lista clienti (con ricerca) |
| GET | /api/operatori | Lista operatori |
| GET | /api/ordini?stato=&data= | Lista ordini |
| GET | /api/storico | Storico vendite |
| GET | /api/storico/riepilogo?periodo= | Riepilogo vendite |
| GET | /api/comunicazioni?letta= | Comunicazioni |
| GET | /api/royalty?periodo= | Royalty |
| GET | /api/impostazioni | Impostazioni |
| GET | /api/backup/export | Esporta tutto il DB |
| POST | /api/sync/seed | Migra dati da localStorage |
| POST | /api/backup/import | Importa backup |
| PATCH | /api/ordini/:id/stato | Aggiorna stato ordine |
| PATCH | /api/tavoli/:id/stato | Aggiorna stato tavolo |
| POST | /api/listini/:id/attiva | Attiva listino |
| POST | /api/comunicazioni | Invia comunicazione |

## 6. WebSocket

Connessione al gateway Socket.IO:

```javascript
import { io } from 'socket.io-client';

const socket = io('https://pizzeria-api-xxxx.up.railway.app/realtime', {
  auth: {
    token: 'pizza-secret-2024',
    ruolo: 'pizzeria'  // oppure 'regia' o 'mobile'
  },
  transports: ['websocket']
});

socket.on('ordine.creato', (data) => console.log('Nuovo ordine:', data));
socket.on('comunicazione.nuova', (data) => console.log('Comunicazione:', data));
socket.on('vendite.update', (data) => console.log('Vendite:', data));
```

## 7. Build APK per test cloud

```bash
# Imposta URL backend nell'app mobile prima della build EAS
cd apps/mobile
eas build --platform android --profile preview
```

L'APK scaricabile include la schermata di onboarding per inserire l'URL del backend.
