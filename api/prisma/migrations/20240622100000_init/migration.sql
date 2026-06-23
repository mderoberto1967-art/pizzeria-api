-- CreateTable
CREATE TABLE "Impostazione" (
    "id" TEXT NOT NULL,
    "chiave" TEXT NOT NULL,
    "valore" TEXT NOT NULL,
    "aggiornatoA" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Impostazione_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pizzeria" (
    "id" TEXT NOT NULL,
    "codice" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "indirizzo" TEXT,
    "telefono" TEXT,
    "email" TEXT,
    "attiva" BOOLEAN NOT NULL DEFAULT true,
    "bloccata" BOOLEAN NOT NULL DEFAULT false,
    "ipPubblico" TEXT,
    "ultimoAccesso" TIMESTAMP(3),
    "creatoA" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pizzeria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CodiceAttivazione" (
    "id" TEXT NOT NULL,
    "codice" TEXT NOT NULL,
    "tipo" TEXT NOT NULL DEFAULT 'standard',
    "giorniValidita" INTEGER NOT NULL DEFAULT 365,
    "usato" BOOLEAN NOT NULL DEFAULT false,
    "dataScadenza" TIMESTAMP(3),
    "pizzeriaId" TEXT,
    "creatoA" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CodiceAttivazione_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Operatore" (
    "id" TEXT NOT NULL,
    "pizzeriaId" TEXT,
    "nome" TEXT NOT NULL,
    "ruolo" TEXT NOT NULL DEFAULT 'cassa',
    "pinHash" TEXT,
    "attivo" BOOLEAN NOT NULL DEFAULT true,
    "creatoA" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Operatore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" TEXT NOT NULL,
    "pizzeriaId" TEXT,
    "nome" TEXT NOT NULL,
    "ordine" INTEGER NOT NULL DEFAULT 0,
    "attiva" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SottoCategoria" (
    "id" TEXT NOT NULL,
    "categoriaId" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "ordine" INTEGER NOT NULL DEFAULT 0,
    "attiva" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "SottoCategoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingrediente" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "disponibile" BOOLEAN NOT NULL DEFAULT true,
    "costoUnitario" DOUBLE PRECISION,
    "allergeni" TEXT,
    "creatoA" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ingrediente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Articolo" (
    "id" TEXT NOT NULL,
    "pizzeriaId" TEXT,
    "categoriaId" TEXT NOT NULL,
    "sottoCategoriaId" TEXT,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL DEFAULT 'altro',
    "disponibile" BOOLEAN NOT NULL DEFAULT true,
    "prezzi" TEXT NOT NULL DEFAULT '{}',
    "prezziMaxy" TEXT NOT NULL DEFAULT '{}',
    "ingredientiBaseIds" TEXT NOT NULL DEFAULT '[]',
    "categorieStampantiIds" TEXT NOT NULL DEFAULT '[]',
    "ordine" INTEGER NOT NULL DEFAULT 0,
    "creatoA" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "aggiornatoA" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Articolo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Listino" (
    "id" TEXT NOT NULL,
    "pizzeriaId" TEXT,
    "nome" TEXT NOT NULL,
    "attivo" BOOLEAN NOT NULL DEFAULT false,
    "regole" TEXT NOT NULL DEFAULT '[]',
    "creatoA" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Listino_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoriaStampante" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "colore" TEXT,

    CONSTRAINT "CategoriaStampante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stampante" (
    "id" TEXT NOT NULL,
    "categoriaStampanteId" TEXT,
    "nome" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "porta" INTEGER NOT NULL DEFAULT 9100,
    "modello" TEXT,
    "protocollo" TEXT,
    "attiva" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Stampante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sala" (
    "id" TEXT NOT NULL,
    "pizzeriaId" TEXT,
    "nome" TEXT NOT NULL,
    "ordine" INTEGER NOT NULL DEFAULT 0,
    "attiva" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Sala_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tavolo" (
    "id" TEXT NOT NULL,
    "salaId" TEXT,
    "numero" INTEGER NOT NULL,
    "nome" TEXT,
    "posti" INTEGER NOT NULL DEFAULT 4,
    "stato" TEXT NOT NULL DEFAULT 'libero',
    "precontoRichiesto" BOOLEAN NOT NULL DEFAULT false,
    "precontoTotale" DOUBLE PRECISION,
    "attivo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Tavolo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" TEXT NOT NULL,
    "pizzeriaId" TEXT,
    "nome" TEXT NOT NULL,
    "cognome" TEXT,
    "telefono" TEXT,
    "email" TEXT,
    "indirizzo" TEXT,
    "note" TEXT,
    "creatoA" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ordine" (
    "id" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "pizzeriaId" TEXT NOT NULL,
    "tavoloId" TEXT,
    "clienteId" TEXT,
    "canale" TEXT NOT NULL DEFAULT 'web_admin',
    "stato" TEXT NOT NULL DEFAULT 'ricevuto',
    "totale" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "numeroPizze" INTEGER NOT NULL DEFAULT 0,
    "metodoPagamento" TEXT,
    "note" TEXT,
    "creatoA" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "aggiornatoA" TIMESTAMP(3) NOT NULL,
    "completatoA" TIMESTAMP(3),

    CONSTRAINT "Ordine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RigaOrdine" (
    "id" TEXT NOT NULL,
    "ordineId" TEXT NOT NULL,
    "articoloId" TEXT,
    "nomeSnapshot" TEXT NOT NULL,
    "formatoSnapshot" TEXT,
    "prezzoUnitario" DOUBLE PRECISION NOT NULL,
    "quantita" INTEGER NOT NULL DEFAULT 1,
    "totaleRiga" DOUBLE PRECISION NOT NULL,
    "ingredientiAggiunti" TEXT NOT NULL DEFAULT '[]',
    "ingredientiRimossi" TEXT NOT NULL DEFAULT '[]',
    "note" TEXT,

    CONSTRAINT "RigaOrdine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VenditaStorico" (
    "id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pizzeriaId" TEXT NOT NULL,
    "articoloId" TEXT,
    "nomeSnapshot" TEXT NOT NULL,
    "tipo" TEXT NOT NULL DEFAULT 'altro',
    "quantita" INTEGER NOT NULL,
    "totale" DOUBLE PRECISION NOT NULL,
    "ordineId" TEXT,
    "metodoPagamento" TEXT NOT NULL DEFAULT 'contanti',
    "royaltyCalcolata" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "VenditaStorico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comunicazione" (
    "id" TEXT NOT NULL,
    "pizzeriaId" TEXT,
    "mittente" TEXT NOT NULL,
    "tipo" TEXT NOT NULL DEFAULT 'info',
    "testo" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "letta" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Comunicazione_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Backup" (
    "id" TEXT NOT NULL,
    "pizzeriaId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "datiJson" TEXT NOT NULL,
    "dimensioneBytes" INTEGER NOT NULL DEFAULT 0,
    "note" TEXT,

    CONSTRAINT "Backup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoyaltyPeriodo" (
    "id" TEXT NOT NULL,
    "pizzeriaId" TEXT NOT NULL,
    "periodo" TEXT NOT NULL,
    "pizzeVendute" INTEGER NOT NULL DEFAULT 0,
    "importoPerPizza" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totale" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "pagato" BOOLEAN NOT NULL DEFAULT false,
    "note" TEXT,
    "creatoA" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RoyaltyPeriodo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConfigurazionePagamenti" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "metodiJson" TEXT NOT NULL DEFAULT '{}',
    "epsonJson" TEXT NOT NULL DEFAULT '{}',

    CONSTRAINT "ConfigurazionePagamenti_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Impostazione_chiave_key" ON "Impostazione"("chiave");

-- CreateIndex
CREATE UNIQUE INDEX "Pizzeria_codice_key" ON "Pizzeria"("codice");

-- CreateIndex
CREATE UNIQUE INDEX "CodiceAttivazione_codice_key" ON "CodiceAttivazione"("codice");

-- CreateIndex
CREATE UNIQUE INDEX "RoyaltyPeriodo_pizzeriaId_periodo_key" ON "RoyaltyPeriodo"("pizzeriaId", "periodo");

-- AddForeignKey
ALTER TABLE "Categoria" ADD CONSTRAINT "Categoria_pizzeriaId_fkey" FOREIGN KEY ("pizzeriaId") REFERENCES "Pizzeria"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SottoCategoria" ADD CONSTRAINT "SottoCategoria_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Articolo" ADD CONSTRAINT "Articolo_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Articolo" ADD CONSTRAINT "Articolo_sottoCategoriaId_fkey" FOREIGN KEY ("sottoCategoriaId") REFERENCES "SottoCategoria"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Articolo" ADD CONSTRAINT "Articolo_pizzeriaId_fkey" FOREIGN KEY ("pizzeriaId") REFERENCES "Pizzeria"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stampante" ADD CONSTRAINT "Stampante_categoriaStampanteId_fkey" FOREIGN KEY ("categoriaStampanteId") REFERENCES "CategoriaStampante"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tavolo" ADD CONSTRAINT "Tavolo_salaId_fkey" FOREIGN KEY ("salaId") REFERENCES "Sala"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ordine" ADD CONSTRAINT "Ordine_pizzeriaId_fkey" FOREIGN KEY ("pizzeriaId") REFERENCES "Pizzeria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ordine" ADD CONSTRAINT "Ordine_tavoloId_fkey" FOREIGN KEY ("tavoloId") REFERENCES "Tavolo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ordine" ADD CONSTRAINT "Ordine_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RigaOrdine" ADD CONSTRAINT "RigaOrdine_ordineId_fkey" FOREIGN KEY ("ordineId") REFERENCES "Ordine"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RigaOrdine" ADD CONSTRAINT "RigaOrdine_articoloId_fkey" FOREIGN KEY ("articoloId") REFERENCES "Articolo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenditaStorico" ADD CONSTRAINT "VenditaStorico_pizzeriaId_fkey" FOREIGN KEY ("pizzeriaId") REFERENCES "Pizzeria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenditaStorico" ADD CONSTRAINT "VenditaStorico_articoloId_fkey" FOREIGN KEY ("articoloId") REFERENCES "Articolo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenditaStorico" ADD CONSTRAINT "VenditaStorico_ordineId_fkey" FOREIGN KEY ("ordineId") REFERENCES "Ordine"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comunicazione" ADD CONSTRAINT "Comunicazione_pizzeriaId_fkey" FOREIGN KEY ("pizzeriaId") REFERENCES "Pizzeria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Backup" ADD CONSTRAINT "Backup_pizzeriaId_fkey" FOREIGN KEY ("pizzeriaId") REFERENCES "Pizzeria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoyaltyPeriodo" ADD CONSTRAINT "RoyaltyPeriodo_pizzeriaId_fkey" FOREIGN KEY ("pizzeriaId") REFERENCES "Pizzeria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

