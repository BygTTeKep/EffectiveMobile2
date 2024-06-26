import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ProblemService } from './problem.service';
import { ProblemDto } from './dto/create.dto';

@Controller('problem')
export class ProblemController {
  constructor(private readonly problemService: ProblemService) {}
  @Post()
  flagToFalse() {
    return this.problemService.getAndUpdateProblem();
  }
  @Post('/create')
  createUserWithProblem(@Body() body: ProblemDto) {
    return this.problemService.createProblem(body);
  }
}
