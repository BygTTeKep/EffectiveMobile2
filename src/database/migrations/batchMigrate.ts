import { faker } from '@faker-js/faker';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertDatasetMln implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const batchSize = 1000;
    const totalRecord = 1000000;
    const record = [];
    for (let i = 1; i < totalRecord; i++) {
      const name = faker.name.firstName('female'); // Генерация женских имен
      const age = faker.datatype.number({ min: 18, max: 65 });
      const gender = faker.name.gender();
      const problem = faker.datatype.boolean();
      record.push(`('${name}','${age}','${gender}','${problem}')`);
      if (i % batchSize === 0 || i === totalRecord) {
        const query = `INSERT INTO "" (name, age, gender, problem) VALUES ${record.join(', ')}`;
        await queryRunner.query(query);
        record.length = 0;
      }
    }
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM ""');
  }
}
