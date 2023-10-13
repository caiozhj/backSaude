/* eslint-disable max-len */
/* eslint-disable no-multi-spaces */
/* eslint-disable import-helpers/order-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable quotes */

import { ListCategories } from "./ListCategories";
import { ListCategoriesController } from "./ListCategoriesController";
import { CategoriesRepository } from "../../repositories/CategoriesRepository";

// const categoriesRepository = new CategoriesRepository();
const categoriesRepository = CategoriesRepository.getInstance();

const listCategories = new ListCategories(categoriesRepository);

const listCategoriesController = new ListCategoriesController(listCategories);   // depende do use case

export { listCategoriesController };
