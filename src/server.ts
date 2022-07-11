import 'reflect-metadata';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { router } from './routes';

import './database';

import './shared/container';

const app = express();

import swaggerFile from '../swagger.json';

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333, () => {
  console.log('Server is running: http://localhost:3333');
});
