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

import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {

    create({ name, description}: ICreateSpecificationDTO): void ; 
    findByName(name: string): Specification;     // recebe name e retorna Category
}

export { ISpecificationsRepository, ICreateSpecificationDTO};