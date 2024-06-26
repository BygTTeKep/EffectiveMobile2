// src/db/data-source.ts
import { DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: 'postgres-problem-service',
  port: 5432,
  password: 'o5hapLMEM1',
  username: 'postgres',
  entities: ['*/**/*.entity.ts'],
  database: 'Testovoe',
  synchronize: true,
  logging: true,
  seeds: ['dist/db/seeds/**/*.js'],
};
