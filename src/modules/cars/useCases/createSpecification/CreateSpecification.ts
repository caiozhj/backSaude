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

import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";



interface IRequest {
    name: string;
    description: string;
}

class CreateSpecification {

    constructor(private specificationsRepository: ISpecificationsRepository){    // pra poder acessar o this

    }

    execute({name, description}: IRequest){

        const specificationExists = this.specificationsRepository.findByName(name);

        if (specificationExists) {
            //   return response.status(400).json({ error: "erro ja tem esse nome" });
              throw new Error('especificação  ja existe');    // função do javascript
            }

        this.specificationsRepository.create({
            name, 
            description,
        });
    }
}

export { CreateSpecification };