/* eslint-disable import-helpers/order-imports */
/* eslint-disable quotes */
/* eslint-disable object-curly-spacing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */

import { ImportPacienteController } from "./ImportPacienteController";
import { ImportPaciente } from "./ImportPaciente";
import { PacienteRepository } from "../../repositories/PacienteRepository";

const pacienteRepository = PacienteRepository.getInstance();

const importPaciente = new ImportPaciente(pacienteRepository);

/* eslint-disable quotes */
const importPacienteController = new ImportPacienteController(importPaciente);

export { importPacienteController};