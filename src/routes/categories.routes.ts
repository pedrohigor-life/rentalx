import { Router } from 'express';

import { Category } from '../models/Category';
import { CategoriesRepository } from '../repositories/CategoriesRepositories';

const categoriesRoutes = Router();

const categories: Category[] = [];

const categoriesRespository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  if (categoriesRespository.findCategory(name))
    return response.status(400).json({
      message: 'Category already exists',
    });

  categoriesRespository.create({
    name,
    description,
  });

  return response.status(201).send();
});

categoriesRoutes.get('/', (requeste, response) => {
  const categories = categoriesRespository.index();

  return response.status(200).json({ categories });
});

export { categoriesRoutes };
