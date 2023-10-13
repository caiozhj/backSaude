/* eslint-disable max-len */
/* eslint-disable no-multi-spaces */
/* eslint-disable import-helpers/order-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable quotes */


import { ListConsulta } from "./ListConsulta";
import { ListConsultaController } from "./ListConsultaController";
import { ConsultaRepository } from "../../repositories/ConsultaRepository";

// const categoriesRepository = new CategoriesRepository();
const consultaRepository = ConsultaRepository.getInstance();

const listConsulta = new ListConsulta(consultaRepository);

const listConsultaController = new ListConsultaController(listConsulta);   // depende do use case

export { listConsultaController };
