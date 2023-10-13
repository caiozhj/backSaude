/* eslint-disable import-helpers/order-imports */
/* eslint-disable quotes */
/* eslint-disable object-curly-spacing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */


import { ImportMedicoController } from "./ImportMedicoController";
import { ImportMedico } from "./ImportMedico";
import { MedicoRepository } from "../../repositories/MedicoRepisitory";

const medicoRepository = MedicoRepository.getInstance();

const importMedico = new ImportMedico(medicoRepository);

/* eslint-disable quotes */
const importMedicoController = new ImportMedicoController(importMedico);

export { importMedicoController};