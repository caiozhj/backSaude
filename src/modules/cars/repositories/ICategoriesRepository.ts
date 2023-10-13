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

import { Category } from "../model/Category";

// responsavel pela manipulação dos dados no lugar do  que seria das rotas
// DTO => Data Transfer Object    dados recebidos por classes vindos da url
interface ICreatedCategoryDTO {
    name: string;
    description: string;
}


interface ICategoriesRepository {
    findByName(name: string): Category;     // recebe name e retorna Category
    list(): Category[];
    create({ name, description}: ICreatedCategoryDTO): void;
}

export { ICategoriesRepository, ICreatedCategoryDTO };