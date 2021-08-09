import {Request, Response} from 'express';
import { container } from 'tsyringe';
import CreateValidationUseCase from './CreateValidationUseCase';

export default class CreateValidationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.body;

    const createValidationUseCase = container.resolve(CreateValidationUseCase);    

    const vali = await createValidationUseCase.execute({cpf});    

    return response.status(201).json(vali);
  }
}