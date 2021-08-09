import { Request, Response } from "express";
import { container } from "tsyringe";
import GetValidationsUseCase from "./GetValidationsUseCase";

export default class GetValidationsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getValidationsUseCase = container.resolve(GetValidationsUseCase);

    const valis = await getValidationsUseCase.execute();

    return response.json(valis);
  }
}