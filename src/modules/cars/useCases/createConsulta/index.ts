/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable quotes */




import { ConsultaRepository } from "../../repositories/ConsultaRepository";
import { CreateConsulta } from "./CreateConsulta";
import { CreateConsultaController } from "./CreateConsultaController";

// const categoriesRepository = new CategoriesRepository();
const consultaRepository = ConsultaRepository.getInstance();
const createConsulta = new CreateConsulta(consultaRepository);

const createConsultaController = new CreateConsultaController(createConsulta);

export { createConsultaController, createConsulta };