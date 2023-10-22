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


import { Paciente } from "../entities/Paciente";

// responsavel pela manipulação dos dados no lugar do  que seria das rotas
// DTO => Data Transfer Object    dados recebidos por classes vindos da url
interface ICreatedPacienteDTO {
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


interface IPacienteRepository {
    findByName(name: string): Paciente;     // recebe name e retorna Category
    list(): Paciente[];
    create({
 name, cpf, email, telefone, endereco, genero, idade, rg, tipo,
}: ICreatedPacienteDTO): void;
}

export { IPacienteRepository, ICreatedPacienteDTO };