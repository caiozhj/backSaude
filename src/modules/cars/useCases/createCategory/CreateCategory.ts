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

import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategory {

  constructor(private categoriesRepository: ICategoriesRepository){}

  execute({ name, description}: IRequest): void {

   
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
    //   return response.status(400).json({ error: "erro ja tem esse nome" });
      throw new Error('categoria ja existe');    // função do javascript
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategory };
