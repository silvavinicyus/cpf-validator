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

  async execute({cpf, description}: ICreateValidationDTO): Promise<Validator> {
    const cpfExists = await this.validatorRepository.findByCpf({cpf});

    if (!cpfExists) {
      throw new AppError("There is no validation with the given id");
    }

    Object.assign(cpfExists, {
      description,
    })

    const vali = await this.validatorRepository.create(cpfExists);

    return vali;
  }
}