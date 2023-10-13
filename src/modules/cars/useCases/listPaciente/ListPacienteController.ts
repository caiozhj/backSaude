/* eslint-disable space-in-parens */
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
import { ListPaciente } from "./ListPaciente";

class ListPacienteController {

    constructor(private listPaciente: ListPaciente){

    }

    handle( request: Request, response: Response): Response{
        const all = this.listPaciente.execute();

        return response.json(all);
    }
}

export { ListPacienteController };