import { container } from "tsyringe";
import ValidatorRepository from "../../modules/validator/repositories/implementations/ValidatorRepository";
import { IValidatorRepository } from "../../modules/validator/repositories/IValidatorRepository";

container.registerSingleton<IValidatorRepository> (
  'ValidatorRepository',
  ValidatorRepository
);