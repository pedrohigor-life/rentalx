import { Router } from 'express';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  categories.push({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (requeste, response) => {
  return response.status(200).json({ categories });
});

export { categoriesRoutes };
