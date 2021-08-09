import { Column, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuidv4} from 'uuid';

@Entity('validator')
class Validator{
  @PrimaryColumn()
  id: string;

  @Column()
  cpf: string;

  @Column()
  description: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
} export { Validator };