import { Category } from '../../models/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class IndexCategoryUseCase {
  constructor(private categoriesRespository: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRespository.index();

    return categories;
  }
}
export { IndexCategoryUseCase };
