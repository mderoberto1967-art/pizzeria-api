import { IsString, IsOptional, Length } from 'class-validator';

export class AttivaCodiceDto {
  @IsString()
  @Length(1, 100)
  codice!: string;

  @IsString()
  @IsOptional()
  nomePizzeria?: string;
}
