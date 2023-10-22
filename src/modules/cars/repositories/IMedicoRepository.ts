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

import { Category } from "../entities/Category";
import { Medico } from "../entities/Medico";

// responsavel pela manipulação dos dados no lugar do  que seria das rotas
// DTO => Data Transfer Object    dados recebidos por classes vindos da url
interface ICreatedMedicoDTO {
     name: string;
     endereco: string; 
     telefone: string;
     especialidade: string;
     localAtendimento: string;
     observacao: string;

}


interface IMedicoRepository {
    findByName(name: string): Medico;     // recebe name e retorna Category
    list(): Medico[];
    create({
 name, endereco, telefone, especialidade, localAtendimento, observacao,
}: ICreatedMedicoDTO): void;
}

export { IMedicoRepository, ICreatedMedicoDTO };