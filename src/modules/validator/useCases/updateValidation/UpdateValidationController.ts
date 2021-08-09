import { Request, Response } from "express";
import { container } from "tsyringe";
import UpdateValidationUseCase from "./UpdateValidationUseCase";

export default class UpdateValidationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params;
    const { description } = request.body;
    
    const updateValidationUseCase = container.resolve(UpdateValidationUseCase);

    const vali = await updateValidationUseCase.execute({cpf, description});

    return response.json(vali);
  }
}