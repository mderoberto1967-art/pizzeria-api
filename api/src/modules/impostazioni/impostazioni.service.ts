import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class ImpostazioniService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Record<string, unknown>> {
    const rows = await this.prisma.impostazione.findMany();
    const result: Record<string, unknown> = {};
    for (const row of rows) {
      try { result[row.chiave] = JSON.parse(row.valore); }
      catch { result[row.chiave] = row.valore; }
    }
    return result;
  }

  async upsert(data: Record<string, unknown>) {
    const ops = Object.entries(data).map(([chiave, valore]) =>
      this.prisma.impostazione.upsert({
        where: { chiave },
        update: { valore: JSON.stringify(valore) },
        create: { chiave, valore: JSON.stringify(valore) },
      })
    );
    await Promise.all(ops);
    return this.findAll();
  }
}
