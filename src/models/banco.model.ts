import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Banco'}}})
export class Banco extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    id: 1,
    mssql: {columnName: 'BancoID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false},
  })
  bancoId: number;

  @property({
    type: 'string',
    required: true,
    length: 20,
    generated: false,
    mssql: {columnName: 'Codigo', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  codigo: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    generated: false,
    mssql: {columnName: 'Nombre', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  nombre: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Banco>) {
    super(data);
  }
}

export interface BancoRelations {
  // describe navigational properties here
}

export type BancoWithRelations = Banco & BancoRelations;
