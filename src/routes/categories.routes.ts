import { Router } from 'express';

import { Category } from '../models/Category';
import { CategoriesRepository } from '../repositories/CategoriesRepositories';

const categoriesRoutes = Router();

const categories: Category[] = [];

const categoriesRespository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  categoriesRespository.create({
    name,
    description,
    created_at: new Date(),
  });

  return response.status(201).send();
});

categoriesRoutes.get('/', (requeste, response) => {
  return response.status(200).json({ categories });
});

export { categoriesRoutes };
