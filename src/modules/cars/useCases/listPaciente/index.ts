/* eslint-disable max-len */
/* eslint-disable no-multi-spaces */
/* eslint-disable import-helpers/order-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable quotes */

import { ListPaciente } from "./ListPaciente";
import { ListPacienteController } from "./ListPacienteController";
import { PacienteRepository } from "../../repositories/PacienteRepository";

// const categoriesRepository = new CategoriesRepository();
const pacienteRepository = PacienteRepository.getInstance();

const listPaciente = new ListPaciente(pacienteRepository);

const listPacienteController = new ListPacienteController(listPaciente);   // depende do use case

export { listPacienteController };
