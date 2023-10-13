/* eslint-disable import-helpers/order-imports */
/* eslint-disable quotes */
/* eslint-disable object-curly-spacing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */

import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategory } from "./ImportCategory";
import { CategoriesRepository } from "../../repositories/CategoriesRepository";

const categoriesRepository = CategoriesRepository.getInstance();

const importCategory = new ImportCategory(categoriesRepository);

/* eslint-disable quotes */
const importCategoryController = new ImportCategoryController(importCategory);

export { importCategoryController};