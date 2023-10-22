/* eslint-disable space-before-blocks */
/* eslint-disable keyword-spacing */
/* eslint-disable indent */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
import { v4 as uuidv4 } from 'uuid';
 
class Paciente {

    id ?: string;
    name: string;
    cpf:string; 
    email:string; 
    telefone:string; 
    endereco: string;
    genero:string; 
    idade:string;
    rg: string;
    tipo: string;
    created_at: Date;

    // metodo construtor que ao instanciar a class aplica um uuid ou devolve o uuid requerido
    
    constructor(){
       
        if(!this.id){       
            this.id = uuidv4();
      }
    }
}

export { Paciente }
