/* eslint-disable import-helpers/order-imports */
/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multi-spaces */
/* eslint-disable arrow-body-style */
/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
import express, { request, response } from 'express';
import swaggerUi from 'swagger-ui-express';

// import swaggerFile from '../swagger.json';

import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);   // rotas criadas 
// app.use('/categories', categoriesRoutes);

// app.use('/specifications', specificationsRoutes);

app.listen(3333, () => console.log('servidor rodando'));
