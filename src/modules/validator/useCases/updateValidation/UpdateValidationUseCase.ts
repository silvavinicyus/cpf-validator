import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import ICreateValidationDTO from "../../dtos/ICreateValidationDto";
import { Validator } from "../../entities/validator";
import { IValidatorRepository } from "../../repositories/IValidatorRepository";

@injectable()
export default class UpdateValidationUseCase {
  constructor(
    @inject('ValidatorRepository')
    private validatorRepository: IValidatorRepository
  ){}

  async execute({cpf, description}: ICreateValidationDTO): Promise<Validator[]> {
    const cpfExists = await this.validatorRepository.findByCpfs({cpf});

    if (cpfExists.length <= 0) {
      throw new AppError("There is no validation with the given id");
    }    

    cpfExists.forEach(async (value) => {
      Object.assign(value, {
        description
      });

      await this.validatorRepository.create(value)
    })
    

    return cpfExists;
  }
}