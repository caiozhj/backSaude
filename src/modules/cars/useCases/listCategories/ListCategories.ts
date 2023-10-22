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

import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


class ListCategories {

    constructor(private categoriesRepository: ICategoriesRepository){}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();
    
    return categories;
  }
}

export { ListCategories };

