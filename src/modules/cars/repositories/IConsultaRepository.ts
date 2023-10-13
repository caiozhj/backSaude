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

import { Consulta } from "../model/Consulta";

// responsavel pela manipulação dos dados no lugar do  que seria das rotas
// DTO => Data Transfer Object    dados recebidos por classes vindos da url
interface ICreatedConsultaDTO {
   
    name: string;
    cpf:string; 
    idade: number;
    genero: string;
    telefone: string;
    especialidade: string;
    dataConsulta: string;
    horario: string;
    observacao: string;
   
}


interface IConsultaRepository {
    findByName(name: string): Consulta;     // recebe name e retorna Category
    list(): Consulta[];
    create({
 name, idade, cpf,  telefone, genero, especialidade, dataConsulta, horario, observacao,
}: ICreatedConsultaDTO): void;
}

export { IConsultaRepository, ICreatedConsultaDTO };