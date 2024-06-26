import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProblemEntity } from './entity/problem.entity';
import { ProblemDto } from './dto/create.dto';

@Injectable()
export class ProblemService {
  constructor(
    @InjectRepository(ProblemEntity)
    private readonly problemrepository: Repository<ProblemEntity>,
  ) {}
  async getAndUpdateProblem(): Promise<number> {
    const result = await this.problemrepository.query(
      `WITH problemCount AS (
        UPDATE problem_entity 
        SET problem = FALSE
        WHERE problem = TRUE
        RETURNING 1
      )
      SELECT COUNT(*) FROM problemCount;`,
    );

    // Предполагая, что result будет массивом объектов
    console.log(result[0].count);
    return parseInt(result[0].count, 10); // преобразование строки в число
  }

  createProblem(ProblemDto: ProblemDto): Promise<ProblemEntity> {
    const problem: ProblemEntity = new ProblemEntity();
    problem.name = ProblemDto.name;
    problem.age = +ProblemDto.age;
    problem.gender = ProblemDto.gender;
    problem.problem = ProblemDto.problem as boolean;
    return this.problemrepository.save(problem);
  }
}
