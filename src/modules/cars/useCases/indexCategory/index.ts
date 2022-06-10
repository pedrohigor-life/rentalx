import { CategoriesRepository } from '../../repositories/CategoriesRepositories';
import { IndexCategoryController } from './IndexCategoryController';
import { IndexCategoryUseCase } from './IndexCategoryUseCase';

const categoryRepository = new CategoriesRepository();
const indexCategoryUseCase = new IndexCategoryUseCase(categoryRepository);

const indexCategoryController = new IndexCategoryController(
  indexCategoryUseCase
);

export { indexCategoryController };
