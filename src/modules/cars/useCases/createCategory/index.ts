/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable quotes */


import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategory } from "./CreateCategory";

// const categoriesRepository = new CategoriesRepository();
const categoriesRepository = CategoriesRepository.getInstance();
const createCategory = new CreateCategory(categoriesRepository);

const createCategoryController = new CreateCategoryController(createCategory);

export { createCategoryController, createCategory };