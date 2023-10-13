/* eslint-disable space-in-parens */
/* eslint-disable no-multi-spaces */
/* eslint-disable @typescript-eslint/no-empty-function */
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
import { Response, Request } from "express";

import { ImportMedico } from "./ImportMedico";

class ImportMedicoController {

    constructor(private importMedico: ImportMedico ) {}

    handle( request: Request, response: Response ): Response {       // retorno de tipo response
        const {file} = request; 
        
        this.importMedico.execute(file);
        return response.send();
    }
}

export { ImportMedicoController };