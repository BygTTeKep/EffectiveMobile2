import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Problem {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: '255' })
  name: string;
  @Column({ type: 'integer' })
  age: number;
  @Column({ type: 'varchar', length: '255' })
  gender: string;
  @Column({ type: 'boolean' })
  problem: boolean;
}
