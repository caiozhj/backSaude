/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import-helpers/order-imports */
/* eslint-disable quotes */
/* eslint-disable padded-blocks */
/* eslint-disable space-before-blocks */
/* eslint-disable object-curly-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable eol-last */

import { CreateSpecification } from "./CreateSpecification";
import { Response, Request } from "express";

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecification) {}

  handle(request: Request, response: Response) {
    const { name, description } = request.body;
    
    this.createSpecificationUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
