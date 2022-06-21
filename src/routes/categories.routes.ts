import multer from 'multer';
import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { indexCategoryController } from '../modules/cars/useCases/indexCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategory';

const categoriesRoutes = Router();
const upload = multer({
  dest: './tmp',
});

categoriesRoutes.post('/', (request, response) => {
  createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  indexCategoryController.handle(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  importCategoryController.handle(request, response);
});

export { categoriesRoutes };
