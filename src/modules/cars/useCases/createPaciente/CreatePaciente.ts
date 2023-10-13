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


import { IPacienteRepository } from "../../repositories/IPacienteRepository";
import { PacienteRepository } from "../../repositories/PacienteRepository";

interface IRequest {
    name: string;
    cpf:string; 
    email:string; 
    telefone:string; 
    endereco: string;
    genero:string; 
    idade:string;
    rg: string;
    tipo: string;

}

class CreatePaciente {

  constructor(private pacienteRepository: IPacienteRepository){}

  execute({
  name, cpf, email, telefone, endereco, genero, idade, rg, tipo,
}: IRequest): void {

   
    const pacienteAlreadyExists = this.pacienteRepository.findByName(name);

    if (pacienteAlreadyExists) {
    //   return response.status(400).json({ error: "erro ja tem esse nome" });
      throw new Error('paciente ja existe');    // função do javascript
    }

    this.pacienteRepository.create({
  name, cpf, email, telefone, endereco, genero, idade, rg, tipo, 
});
  }
}

export { CreatePaciente};
