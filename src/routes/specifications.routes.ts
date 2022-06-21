import { Router } from 'express';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';

const specificationRoutes = Router();

specificationRoutes.post('/', (request, response) => {
  createSpecificationController.handle(request, response);
});

specificationRoutes.get('/', (request, response) => {
  const indexSpecificationService = new IndexSpecificationService(
    specificationRepository
  );

  const specifications = indexSpecificationService.execute();

  return response.status(200).json({ specifications });
});

export { specificationRoutes };
