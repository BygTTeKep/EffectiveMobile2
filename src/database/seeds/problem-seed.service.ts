// src/db/seeds/user.seeder.ts
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { ProblemEntity } from 'src/problem/entity/problem.entity';
import { faker } from '@faker-js/faker';

export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    await dataSource.query('TRUNCATE "user" RESTART IDENTITY;');

    const repository = dataSource.getRepository(ProblemEntity);
    for (let i = 0; i < 10; i++) {
      const problem = new ProblemEntity();
      problem.name = faker.name.firstName('female'); // Генерация женских имен
      problem.age = faker.datatype.number({ min: 18, max: 65 });
      problem.gender = faker.name.gender();
      problem.problem = faker.datatype.boolean();
      await repository.insert(problem);
    }
  }
}
