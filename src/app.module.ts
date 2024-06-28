import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Problem } from './problem/entity/problem.entity';
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
      entities: [Problem],
      database: 'Testovoe',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([Problem]),
    PromlemModule,
  ],
  controllers: [],
  providers: [],
  // providers: [ProblemFactory],
})
export class AppModule {}
