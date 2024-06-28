// src/db/seeds/user.seeder.ts
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Problem } from 'src/problem/entity/problem.entity';
import { faker } from '@faker-js/faker';

export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    await dataSource.query('TRUNCATE "user" RESTART IDENTITY;');

    const repository = dataSource.getRepository(Problem);
    const fakeData = Array.from({ length: 100 }, () => ({
      name: faker.name.firstName('female'), // Генерация женских имен
      age: faker.datatype.number({ min: 18, max: 65 }),
      gender: faker.name.gender(),
      problem: faker.datatype.boolean(),
    }));
    await repository.insert(fakeData);
  }
}
