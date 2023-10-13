/* eslint-disable import-helpers/order-imports */
/* eslint-disable quotes */
/* eslint-disable padded-blocks */
/* eslint-disable space-before-blocks */
/* eslint-disable object-curly-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable eol-last */

import { Response, Request } from "express";
import { CreateConsulta } from "./CreateConsulta";

class CreateConsultaController {

    constructor(private createConsultaUseCase: CreateConsulta){

    }

    handle(request: Request, response: Response): Response{
        const {
            name, 
            cpf, 
            idade, 
            genero,
            telefone, 
            especialidade, 
            dataConsulta, 
            horario, 
            observacao,
} = request.body; 
   
       this.createConsultaUseCase.execute({
        name, 
        cpf, 
        idade, 
        genero,
        telefone, 
        especialidade, 
        dataConsulta, 
        horario, 
        observacao, 
});
    
        return response.status(201).send();
    }
}

export { CreateConsultaController };