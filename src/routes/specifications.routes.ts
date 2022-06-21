import { Router } from 'express';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';
import { indexSpecificationController } from '../modules/cars/useCases/IndexSpecifications';

const specificationRoutes = Router();

specificationRoutes.post('/', (request, response) => {
  createSpecificationController.handle(request, response);
});

specificationRoutes.get('/', (request, response) => {
  indexSpecificationController.handle(request, response);
});

export { specificationRoutes };
