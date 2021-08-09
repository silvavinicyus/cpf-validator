import ICreateValidationDTO from "../dtos/ICreateValidationDto";
import { Validator } from "../entities/validator";

interface IValidatorRepository{
  create({id, cpf}: ICreateValidationDTO): Promise<Validator>;
  findByCpf({cpf}: ICreateValidationDTO): Promise<Validator>;
  findAll(): Promise<Validator[]>;
  deleteByCpf({cpf}: ICreateValidationDTO): Promise<void>;  
} export { IValidatorRepository };