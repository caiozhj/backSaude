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


import { ConsultaRepository } from "../../repositories/ConsultaRepository";
import { IConsultaRepository } from "../../repositories/IConsultaRepository";

interface IRequest {
    name: string;
    cpf: string; 
    idade: number; 
    genero: string;
    telefone: string;
    especialidade: string; 
    dataConsulta: string; 
    horario: string; 
    observacao: string;   
}

class CreateConsulta {

  constructor(private consultaRepository: IConsultaRepository){}

  execute({
    name, 
    cpf, 
    idade, 
    genero,
    telefone, 
    especialidade, 
    dataConsulta, 
    horario, 
    observacao, 
}: IRequest): void {

   
    const consultaAlreadyExists = this.consultaRepository.findByName(name);

    if (consultaAlreadyExists) {
    //   return response.status(400).json({ error: "erro ja tem esse nome" });
      throw new Error('consulta ja existe');    // função do javascript
    }

    this.consultaRepository.create({
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
  }
}

export { CreateConsulta };
