import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProblemEntity } from './problem/entity/problem.entity';
import { PromlemModule } from './problem/problem.module';
import { ProblemFactory } from './database/seeds/problem.factory';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres-problem-service',
      port: 5432,
      password: 'o5hapLMEM1',
      username: 'postgres',
      entities: [ProblemEntity],
      database: 'Testovoe',
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([ProblemEntity]),
  ],
  controllers: [],
  providers: [ProblemFactory],
})
export class AppModule {}
