import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import ICreateValidationDTO from "../../dtos/ICreateValidationDto";
import { IValidatorRepository } from "../../repositories/IValidatorRepository";

@injectable()
export default class DeleteValidationUseCase {
  constructor(
    @inject('ValidatorRepository')
    private validatorRepository: IValidatorRepository
  ){}

  async execute({cpf}: ICreateValidationDTO): Promise<void>{
    const cpfExists = await this.validatorRepository.findByCpf({cpf});

    if(!cpfExists) {
      throw new AppError("There is no validation with de given cpf");
    }

    await this.validatorRepository.deleteByCpf({cpf});
  }
}