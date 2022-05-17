import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepositories';
import { CreateCategoryService } from '../services/CreateCategoryService';
import { IndexCategoryService } from '../services/IndexCategoryService';

const categoriesRoutes = Router();

const categoriesRespository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(
    categoriesRespository
  );

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (requeste, response) => {
  const indexCategoryService = new IndexCategoryService(categoriesRespository);

  const categories = indexCategoryService.execute();

  return response.status(200).json({ categories });
});

export { categoriesRoutes };
