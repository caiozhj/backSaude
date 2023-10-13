/* eslint-disable max-len */
/* eslint-disable no-multi-spaces */
/* eslint-disable import-helpers/order-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable quotes */


import { ListMedico } from "./ListMedico";
import { ListMedicoController } from "./ListMedicoController";
import { MedicoRepository } from "../../repositories/MedicoRepisitory";

// const categoriesRepository = new CategoriesRepository();
const medicoRepository = MedicoRepository.getInstance();

const listMedico = new ListMedico(medicoRepository);

const listMedicoController = new ListMedicoController(listMedico);   // depende do use case

export { listMedicoController };
