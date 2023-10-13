/* eslint-disable import-helpers/order-imports */
/* eslint-disable quotes */
/* eslint-disable padded-blocks */
/* eslint-disable space-before-blocks */
/* eslint-disable object-curly-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable eol-last */

import { Response, Request } from "express";
import { CreateCategory } from "./CreateCategory";

class CreateCategoryController {

    constructor(private createCategoryUseCase: CreateCategory){

    }

    handle(request: Request, response: Response): Response{
        const { name, description } = request.body; 
   
       this.createCategoryUseCase.execute({name, description});
    
        return response.status(201).send();
    }
}

export { CreateCategoryController };