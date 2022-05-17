import { Category } from '../models/Category';
import { CategoriesRepository } from '../repositories/CategoriesRepositories';

class IndexCategoryService {
  constructor(private categoriesRespository: CategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRespository.index();

    return categories;
  }
}
export { IndexCategoryService };
