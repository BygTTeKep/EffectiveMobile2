import { DataSource } from 'typeorm';
import { ProblemEntity } from './problem/entity/problem.entity';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'postgres-problem-service',
  port: 5432,
  password: 'o5hapLMEM1',
  username: 'postgres',
  entities: ['*/**/*.entity.ts'],
  database: 'Testovoe',
  synchronize: true,
  logging: true,
  migrations: ['./src/migrations/*.ts'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export default AppDataSource;
