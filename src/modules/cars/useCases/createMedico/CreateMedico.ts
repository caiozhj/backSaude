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



import { IMedicoRepository } from "../../repositories/IMedicoRepository";

interface IRequest {
    name: string;
    endereco: string; 
     telefone: string;
     especialidade: string;
     localAtendimento: string;
     observacao: string;

}

class CreateMedico {

  constructor(private medicoRepository: IMedicoRepository){}

  execute({
 name, endereco, telefone, especialidade, localAtendimento, observacao, 
}: IRequest): void {

   
    const medicoAlreadyExists = this.medicoRepository.findByName(name);

    if (medicoAlreadyExists) {
    //   return response.status(400).json({ error: "erro ja tem esse nome" });
      throw new Error('medico  ja existe');    // função do javascript
    }

    this.medicoRepository.create({
 name, endereco, telefone, especialidade, localAtendimento, observacao, 
});
  }
}

export { CreateMedico};
