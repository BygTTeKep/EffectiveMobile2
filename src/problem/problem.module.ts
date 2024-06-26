import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProblemEntity } from './entity/problem.entity';
import { ProblemController } from './problem.controller';
import { ProblemService } from './problem.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProblemEntity])],
  controllers: [ProblemController],
  providers: [ProblemService],
})
export class PromlemModule {}
