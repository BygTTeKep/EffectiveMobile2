import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProblemFactory } from './database/seeds/problem.factory';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const problemFactory = app.get(ProblemFactory);
  for (let i = 0; i < 1000; i++) await problemFactory.saveRandomProblem();

  await app.listen(3001);
}
bootstrap();
