/* eslint-disable object-curly-spacing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable quotes */

import { CreateSpecification } from "./CreateSpecification";
import { CreateSpecificationController } from "./CreateSpecificationCrontroller";
import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";

const specificationsRepository = SpecificationsRepository.getInstance();
const createSpecification = new CreateSpecification(specificationsRepository);
const createSpecificationController = new CreateSpecificationController(createSpecification);


export { createSpecificationController, createSpecification};