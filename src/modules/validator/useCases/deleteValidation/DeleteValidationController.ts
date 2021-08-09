import { Request, Response } from "express";
import { container } from "tsyringe";
import DeleteValidationUseCase from "./DeleteValidationUseCase";

export default class DeleteValidationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params;

    const deleteValidationUseCase = container.resolve(DeleteValidationUseCase);

    await deleteValidationUseCase.execute({cpf});

    return response.status(204).send();
  }
}