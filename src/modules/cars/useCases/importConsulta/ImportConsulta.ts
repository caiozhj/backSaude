/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable space-before-function-paren */
/* eslint-disable global-require */
/* eslint-disable import-helpers/order-imports */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable max-len */
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

import fs from "fs"; // file system leitura e escrita de arquivos, nativo do node
import { IConsultaRepository } from "../../repositories/IConsultaRepository";

const { parse } = require("csv-parse");


interface IImportConsulta {
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

class ImportConsulta {
  constructor(private consultaRepository: IConsultaRepository) {}

  loadConsulta(file: Express.Multer.File): Promise<IImportConsulta[]> {   // definindo que o retorno vai ser uma promise
    return new Promise((resolve, reject)  => {      // sucesso ou rejeição
        const stream = fs.createReadStream(file.path); // função permite ler o arquivo em partes, para não sobrecarregar a memória
        // e precisa receber o caminho do arquivo
        const consulta: IImportConsulta[] = []; // tipo e recebe um array de IImportCategory
    
        const parseFile = parse();
        // função que ira ler o arquivo csv
        // função pipe pega o que esta sendo passado para stream e passa para um destino qualquer, arquivo recortado sera armazenado em parseFile
        stream.pipe(parseFile); // passa o arquivo csv para a função que ira ler o arquivo csv)
        
        parseFile.on("data", async (line) => {
          // data recebe line
          console.log(line); // line é um array, cada posição é uma coluna do arquivo csv e cada linha sera salva no banco de dados
          const [name, cpf, idade, genero, telefone, especialidade, dataConsulta, horario, observacao] = line; // desestruturação
          consulta.push({
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
        });
        parseFile.on("end", () => {
            resolve(consulta);
        }); 
        parseFile.on("error", (err) => {
            reject(err);
        });
    });
}

  
  

  // type do arquivo é Express.Multer.File
  async execute(file: Express.Multer.File): Promise <void> {  // como é uma função assincrona, ela precisa retornar uma promise
    const consulta =  await this.loadConsulta(file);   // vai eesperar a finalização da função
    console.log(consulta);
  }
}
export { ImportConsulta};
