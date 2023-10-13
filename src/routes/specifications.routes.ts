/* eslint-disable arrow-body-style */
/* eslint-disable keyword-spacing */
/* eslint-disable object-curly-spacing */
/* eslint-disable space-in-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-multi-spaces */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { request, response, Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';

import { createSpecificationController } from '../modules/cars/useCases/createSpecification';



const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
    return createSpecificationController.handle(request, response); 
});

export { specificationsRoutes };