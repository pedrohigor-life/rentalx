import multer from 'multer';
import importCategoryController from '../modules/cars/useCases/importCategory';
import { Router } from 'express';
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { IndexCategoryController } from '../modules/cars/useCases/indexCategory/IndexCategoryController';

const categoriesRoutes = Router();
const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const indexCategoryController = new IndexCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', indexCategoryController.handle);

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  importCategoryController().handle(request, response);
});

export { categoriesRoutes };
