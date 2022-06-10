import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { indexCategoryController } from '../modules/cars/useCases/indexCategory';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
  createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  indexCategoryController.handle(request, response);
});

export { categoriesRoutes };
