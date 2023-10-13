/* eslint-disable padded-blocks */
/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable quotes */
/* eslint-disable arrow-body-style */
/* eslint-disable keyword-spacing */
/* eslint-disable object-curly-spacing */
/* eslint-disable space-in-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-multi-spaces */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { request, response, Router } from 'express';
import multer from 'multer';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';



    

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});      // armazenar uploads em uma pasta temporaria, apos salvar no bc deletamos arquivos

categoriesRoutes.post('/', (request, response) => {
   return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', ( request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post('/import', upload.single("file"), (request, response) => {

  return importCategoryController.handle(request, response)
  // const  { file } = request;
  // console.log(file);
  // return response.send();
  // usar arquivos .csv
})

export { categoriesRoutes };