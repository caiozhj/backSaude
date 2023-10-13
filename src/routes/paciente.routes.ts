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



import { createPacienteController } from '../modules/cars/useCases/createPaciente';
import { importPacienteController } from '../modules/cars/useCases/importPaciente';
import { listPacienteController } from '../modules/cars/useCases/listPaciente';


    

const pacienteRoutes = Router();

const upload = multer({
  dest: "./tmp",
});      // armazenar uploads em uma pasta temporaria, apos salvar no bc deletamos arquivos

pacienteRoutes.post('/', (request, response) => {
   return createPacienteController.handle(request, response);
});

pacienteRoutes.get('/', ( request, response) => {
  return listPacienteController.handle(request, response);
});

pacienteRoutes.post('/import', upload.single("file"), (request, response) => {

  return importPacienteController.handle(request, response)
  // const  { file } = request;
  // console.log(file);
  // return response.send();
  // usar arquivos .csv
})

export { pacienteRoutes };