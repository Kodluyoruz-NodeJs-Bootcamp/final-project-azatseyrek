import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Actor {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  actor_name: string;
  @Column()
  ownerId: number
}