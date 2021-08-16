import { getRepository, Repository } from "typeorm";
import ICreateValidationDTO from "../../dtos/ICreateValidationDto";
import { Validator } from "../../entities/validator";
import { IValidatorRepository } from "../IValidatorRepository";

export default class ValidatorRepository implements IValidatorRepository {
  private repository: Repository<Validator>;

  constructor(){
    this.repository = getRepository(Validator);
  }

  async findByCpfs({ cpf }: ICreateValidationDTO): Promise<Validator[]> {
    const vali = await this.repository.find({ cpf });

    return vali;
  }

  async deleteByCpf({ cpf }: ICreateValidationDTO): Promise<void> {
    await this.repository.query(`delete from validator where cpf = '${cpf}'`);
  }

  async findAll(): Promise<Validator[]> {
    const valis = await this.repository.find();

    return valis;
  }

  async findByCpf({ cpf }: ICreateValidationDTO): Promise<Validator> {    
    const vali = await this.repository.findOne({ cpf });


    return vali;
  }

  async create({id, cpf, description}: ICreateValidationDTO): Promise<Validator> {    

    const vali = this.repository.create({
      id,
      cpf,
      description
    });

    await this.repository.save(vali);

    return vali;
  }
}