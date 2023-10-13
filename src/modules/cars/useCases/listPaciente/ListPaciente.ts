/* eslint-disable space-before-blocks */
/* eslint-disable padded-blocks */
/* eslint-disable new-parens */
/* eslint-disable quotes */
/* eslint-disable no-multi-spaces */
/* eslint-disable indent */
/* eslint-disable no-restricted-globals */
/* eslint-disable keyword-spacing */
/* eslint-disable object-curly-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable consistent-return */
/* eslint-disable eol-last */


import { Paciente } from "../../model/Paciente";
import { IPacienteRepository } from "../../repositories/IPacienteRepository";


class ListPaciente {

    constructor(private pacienteRepository: IPacienteRepository){}

  execute(): Paciente[] {
    const paciente = this.pacienteRepository.list();
    
    return paciente;
  }
}

export { ListPaciente };

