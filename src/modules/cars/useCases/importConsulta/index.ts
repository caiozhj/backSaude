/* eslint-disable import-helpers/order-imports */
/* eslint-disable quotes */
/* eslint-disable object-curly-spacing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */


import { ImportConsulta } from "./ImportConsulta";
import { ImportConsultaController } from "./ImportConsultaController";
import { ConsultaRepository } from "../../repositories/ConsultaRepository";

const consultaRepository = ConsultaRepository.getInstance();

const importConsulta = new ImportConsulta(consultaRepository);

/* eslint-disable quotes */
const importConsultaController = new ImportConsultaController(importConsulta);

export { importConsultaController};