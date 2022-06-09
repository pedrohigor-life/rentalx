import { Router } from 'express';
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';
import { IndexSpecificationService } from '../modules/cars/services/IndexSpecificationService';

const specificationRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationRepository
  );

  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

specificationRoutes.get('/', (request, response) => {
  const indexSpecificationService = new IndexSpecificationService(
    specificationRepository
  );

  const specifications = indexSpecificationService.execute();

  return response.status(200).json({ specifications });
});

export { specificationRoutes };
