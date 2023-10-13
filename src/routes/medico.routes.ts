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

import { createMedicoController } from '../modules/cars/useCases/createMedico';
import { importMedicoController } from '../modules/cars/useCases/importMedico';
import { listMedicoController } from '../modules/cars/useCases/listMedico';

    

const medicoRoutes = Router();

const upload = multer({
  dest: "./tmp",
});      // armazenar uploads em uma pasta temporaria, apos salvar no bc deletamos arquivos

medicoRoutes.post('/', (request, response) => {
   return createMedicoController.handle(request, response);
});

medicoRoutes.get('/', ( request, response) => {
  return listMedicoController.handle(request, response);
});

medicoRoutes.post('/import', upload.single("file"), (request, response) => {

  return importMedicoController.handle(request, response)
  // const  { file } = request;
  // console.log(file);
  // return response.send();
  // usar arquivos .csv
})

export { medicoRoutes };