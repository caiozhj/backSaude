/* eslint-disable import-helpers/order-imports */
/* eslint-disable quotes */
/* eslint-disable padded-blocks */
/* eslint-disable space-before-blocks */
/* eslint-disable object-curly-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable eol-last */

import { Response, Request } from "express";
import { CreatePaciente } from "./CreatePaciente";

class CreatePacienteController {

    constructor(private createPacienteUseCase: CreatePaciente){

    }

    handle(request: Request, response: Response): Response{
        const {
 name, cpf, email, telefone, endereco, genero, idade, rg, tipo, 
} = request.body; 
   
       this.createPacienteUseCase.execute({
name, cpf, email, telefone, endereco, genero, idade, rg, tipo,
});
    
        return response.status(201).send();
    }
}

export { CreatePacienteController };