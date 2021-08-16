import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import ICreateValidationDTO from "../../dtos/ICreateValidationDto";
import { Validator } from "../../entities/validator";
import { IValidatorRepository } from "../../repositories/IValidatorRepository";

@injectable()
export default class GetValdationUseCase {
  constructor(
    @inject('ValidatorRepository')
    private validatorRepository: IValidatorRepository
  ){}

  async execute({cpf}: ICreateValidationDTO): Promise <Validator[]> {
    const validators = await this.validatorRepository.findByCpfs({cpf});    

    if (validators.length == 0) {     
      throw new AppError("There is no validation with the given cpf");      
    }

    return validators;
  }
}