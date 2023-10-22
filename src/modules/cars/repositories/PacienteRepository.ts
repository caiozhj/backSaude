/* eslint-disable max-len */
/* eslint-disable padded-blocks */
/* eslint-disable keyword-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multi-spaces */
/* eslint-disable eol-last */
/* eslint-disable space-before-blocks */
/* eslint-disable indent */
/* eslint-disable quotes */

import { Paciente } from "../entities/Paciente";
import { IPacienteRepository, ICreatedPacienteDTO } from "./IPacienteRepository";

class PacienteRepository implements IPacienteRepository {

    private paciente: Paciente[] ;

    private static INSTANCE: PacienteRepository;

    private constructor(){     // para nao que nao seja possivel o new CategoriesRepository
        this.paciente = [];
    }

    public static getInstance(): PacienteRepository{

        if(!PacienteRepository.INSTANCE){    // verificação, se for nulo ou undefined criamos um valor pra ele
            PacienteRepository.INSTANCE = new PacienteRepository();
        }
        // mas se ja tiver uma instancia criada retornamos a instancia ja criada
        return PacienteRepository.INSTANCE;
    }

    create({
  name, cpf, email, telefone, endereco, genero, idade, rg, tipo, 
}: ICreatedPacienteDTO): void{
        const paciente: Paciente = new Paciente();    // chamo metodo construtor
    
        Object.assign(paciente, {     // passando parametro por parametro para o objeto category
            name,
cpf,
email,
telefone,
endereco,
genero,
idade,
rg,
tipo,     
            created_at: new Date(),
        });
    
        this.paciente.push(paciente);
    }

    list(): Paciente[] {        // retorno da lista de categorias
        return this.paciente;
    }

    findByName(name:string): Paciente {
        // find() => função javascript para perrcorrer array com uma condição dentro de parenteses
        // objetivo é nao ter varias categorias com mesmo nome
        const paciente =  this.paciente.find((paciente) => paciente.name === name);         
        return paciente;     
    }
}

export { PacienteRepository };