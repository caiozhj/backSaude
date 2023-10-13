/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable quotes */


import { PacienteRepository } from "../../repositories/PacienteRepository";
import { CreatePacienteController } from "./CreatePacienteController";
import { CreatePaciente } from "./CreatePaciente";

// const categoriesRepository = new CategoriesRepository();
const pacienteRepository = PacienteRepository.getInstance();
const createPaciente = new CreatePaciente(pacienteRepository);

const createPacienteController = new CreatePacienteController(createPaciente);

export { createPacienteController, createPaciente };