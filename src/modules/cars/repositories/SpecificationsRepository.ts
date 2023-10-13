/* eslint-disable keyword-spacing */
/* eslint-disable max-len */
/* eslint-disable func-call-spacing */
/* eslint-disable no-spaced-func */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multi-spaces */
/* eslint-disable eol-last */
/* eslint-disable space-before-blocks */
/* eslint-disable indent */
/* eslint-disable quotes */

import { Specification } from "../model/Specification";
import { ISpecificationsRepository, ICreateSpecificationDTO } from "./ISpecificationsRepository";

class SpecificationsRepository implements  ISpecificationsRepository{

    private specifications: Specification[] ;

    private static INSTANCE: SpecificationsRepository;

    private constructor() {
        this.specifications = [];
    }

    public static getInstance(): SpecificationsRepository{

        if(!SpecificationsRepository.INSTANCE){
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }
        // mas se ja tiver uma instancia criada retornamos a instancia ja criada
        return SpecificationsRepository.INSTANCE;
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();     // cria um novo id da class Specification

        Object.assign(specification, {
            name, 
            description, 
            created_at: new Date(),
        });

        this.specifications.push(specification);    // inserindo specification na tabela
    }

    findByName(name:string): Specification {
        // find() => função javascript para perrcorrer array com uma condição dentro de parenteses
        // objetivo é nao ter varias categorias com mesmo nome
        const specification =  this.specifications.find((specification) => specification.name === name);       // verificar se existe dentro do array mesmo nome  
        return specification;     
    }
}

export { SpecificationsRepository };