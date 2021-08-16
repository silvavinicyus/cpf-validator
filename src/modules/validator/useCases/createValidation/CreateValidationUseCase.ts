import { inject, injectable } from "tsyringe";
import ICreateValidationDTO from "../../dtos/ICreateValidationDto";
import { IValidatorRepository } from "../../repositories/IValidatorRepository";
import { cpf as cpfValidator} from 'cpf-cnpj-validator';
import { Validator } from "../../entities/validator";

@injectable()
export default class CreateValidationUseCase {
  constructor(
    @inject('ValidatorRepository')
    private validatorRepository: IValidatorRepository
  ){}

  async execute({cpf}: ICreateValidationDTO): Promise<Validator>{  
    const valid = cpfValidator.isValid(cpf);    

    const validation = await this.validatorRepository.create({
      cpf,
      description: valid ? 'Valido' : 'Invalido'
    });    

    return validation;
  }
}