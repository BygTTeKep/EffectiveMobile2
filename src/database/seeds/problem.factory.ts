import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProblemEntity } from 'src/problem/entity/problem.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProblemFactory {
  constructor(
    @InjectRepository(ProblemEntity)
    private repository: Repository<ProblemEntity>,
  ) {}

  createRandomProblem() {
    const problem = new ProblemEntity();
    problem.name = faker.person.firstName('female');
    problem.age = faker.datatype.number({ min: 18, max: 65 });
    problem.gender = faker.person.gender();
    problem.problem = faker.datatype.boolean();
    return problem;
  }

  async saveRandomProblem() {
    const problem = this.createRandomProblem();
    return await this.repository.save(problem);
  }
}
