import { Request, Response } from "express";
import { container } from "tsyringe";
import GetValdationUseCase from "./GetSingleValidationUseCase";

export default class GetSingleValidationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params;

    console.log(cpf)

    const getValidationUseCase = container.resolve(GetValdationUseCase);  

    const vali = await getValidationUseCase.execute({cpf});

    return response.json(vali);
  }
}