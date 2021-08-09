import { inject, injectable } from "tsyringe";
import { Validator } from "../../entities/validator";
import { IValidatorRepository } from "../../repositories/IValidatorRepository";

@injectable()
export default class GetValidationsUseCase {
  constructor(
    @inject('ValidatorRepository')
    private validatorRepository: IValidatorRepository
  ){}

  async execute(): Promise<Validator[]> {
    return await this.validatorRepository.findAll();
  }
}