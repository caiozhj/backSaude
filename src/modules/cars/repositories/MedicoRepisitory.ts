/* eslint-disable max-len */
/* eslint-disable padded-blocks */
/* eslint-disable keyword-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multi-spaces */
/* eslint-disable eol-last */
/* eslint-disable space-before-blocks */
/* eslint-disable indent */
/* eslint-disable quotes */

import { Medico } from "../entities/Medico";
import { IMedicoRepository, ICreatedMedicoDTO } from "./IMedicoRepository";

class MedicoRepository implements IMedicoRepository {

    private medico: Medico[] ;

    private static INSTANCE: MedicoRepository;

    private constructor(){     // para nao que nao seja possivel o new CategoriesRepository
        this.medico = [];
    }

    public static getInstance(): MedicoRepository{

        if(!MedicoRepository.INSTANCE){    // verificação, se for nulo ou undefined criamos um valor pra ele
            MedicoRepository.INSTANCE = new MedicoRepository();
        }
        // mas se ja tiver uma instancia criada retornamos a instancia ja criada
        return MedicoRepository.INSTANCE;
    }

    create({
 name, endereco, telefone, especialidade, localAtendimento, observacao,
    }: ICreatedMedicoDTO): void{
        const medico: Medico = new Medico();    // chamo metodo construtor
    
        Object.assign(medico, {     // passando parametro por parametro para o objeto category
             
            name,
endereco,
telefone,
especialidade,
localAtendimento,
observacao,
       
            created_at: new Date(),
        });
    
        this.medico.push(medico);
    }

    list(): Medico[] {        // retorno da lista de categorias
        return this.medico;
    }

    findByName(name:string): Medico {
        // find() => função javascript para perrcorrer array com uma condição dentro de parenteses
        // objetivo é nao ter varias categorias com mesmo nome
        const medico =  this.medico.find((medico) => medico.name === name);         
        return medico;     
    }
}

export { MedicoRepository };