import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ProblemDto } from './dto/create.dto';
import { ProblemService } from './problem.service';

@Controller('problem')
export class ProblemController {
  constructor(@Inject() private readonly problemService: ProblemService) {}
  @Post()
  flagToFalse() {
    return this.problemService.getAndUpdateProblem();
  }
  @Post('/create')
  createUserWithProblem(@Body() body: ProblemDto) {
    return this.problemService.createProblem(body);
  }
}
