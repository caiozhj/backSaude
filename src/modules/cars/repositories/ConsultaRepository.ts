/* eslint-disable max-len */
/* eslint-disable padded-blocks */
/* eslint-disable keyword-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multi-spaces */
/* eslint-disable eol-last */
/* eslint-disable space-before-blocks */
/* eslint-disable indent */
/* eslint-disable quotes */

import { Consulta } from "../model/Consulta";
import { IConsultaRepository, ICreatedConsultaDTO } from "./IConsultaRepository";

class ConsultaRepository implements IConsultaRepository {

    private consulta: Consulta[] ;

    private static INSTANCE: ConsultaRepository;

    private constructor(){     // para nao que nao seja possivel o new CategoriesRepository
        this.consulta = [];
    }

    public static getInstance(): ConsultaRepository{

        if(!ConsultaRepository.INSTANCE){    // verificação, se for nulo ou undefined criamos um valor pra ele
            ConsultaRepository.INSTANCE = new ConsultaRepository();
        }
        // mas se ja tiver uma instancia criada retornamos a instancia ja criada
        return ConsultaRepository.INSTANCE;
    }

    create({
 name, cpf, idade, genero, telefone, especialidade, dataConsulta, horario, observacao, 
}: ICreatedConsultaDTO): void{
        const consulta: Consulta = new Consulta();    // chamo metodo construtor
    
        Object.assign(consulta, {     // passando parametro por parametro para o objeto category
            name, 
            cpf, 
            idade, 
            genero,
            telefone, 
            especialidade, 
            dataConsulta, 
            horario, 
            observacao,       
            created_at: new Date(),
        });
    
        this.consulta.push(consulta);
    }

    list(): Consulta[] {        // retorno da lista de categorias
        return this.consulta;
    }

    findByName(name:string): Consulta {
        // find() => função javascript para perrcorrer array com uma condição dentro de parenteses
        // objetivo é nao ter varias categorias com mesmo nome
        const consulta =  this.consulta.find((consulta) => consulta.name === name);         
        return consulta;     
    }
}

export { ConsultaRepository };