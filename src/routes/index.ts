/* eslint-disable quotes */
/* eslint-disable arrow-body-style */
/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */

import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { consultaRoutes } from "./consulta.routes";
import { medicoRoutes } from "./medico.routes";
import { pacienteRoutes } from "./paciente.routes";
import { specificationsRoutes } from "./specifications.routes";

const router = Router();

router.use('/consulta', consultaRoutes);

router.use('/categories', categoriesRoutes);

router.use('/specifications', specificationsRoutes);

router.use('/paciente', pacienteRoutes);

router.use('/medico', medicoRoutes);

export { router };