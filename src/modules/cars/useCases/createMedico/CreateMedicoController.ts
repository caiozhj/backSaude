/* eslint-disable import-helpers/order-imports */
/* eslint-disable quotes */
/* eslint-disable padded-blocks */
/* eslint-disable space-before-blocks */
/* eslint-disable object-curly-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable eol-last */

import { Response, Request } from "express";

import { CreateMedico } from "./CreateMedico";

class CreateMedicoController {

    constructor(private createMedicoUseCase: CreateMedico){

    }

    handle(request: Request, response: Response): Response{
        const {
 name, endereco, telefone, especialidade, localAtendimento, observacao, 
} = request.body; 
   
       this.createMedicoUseCase.execute({
 name, endereco, telefone, especialidade, localAtendimento, observacao,
});
    
        return response.status(201).send();
    }
}

export { CreateMedicoController };