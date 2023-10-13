/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable quotes */


import { MedicoRepository } from "../../repositories/MedicoRepisitory";
import { CreateMedicoController } from "./CreateMedicoController";
import { CreateMedico } from "./CreateMedico";

// const categoriesRepository = new CategoriesRepository();
const medicoRepository = MedicoRepository.getInstance();
const createMedico = new CreateMedico(medicoRepository);

const createMedicoController = new CreateMedicoController(createMedico);

export { createMedicoController, createMedico };