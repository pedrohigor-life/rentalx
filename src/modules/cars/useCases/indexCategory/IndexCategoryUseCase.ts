import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class IndexCategoryUseCase {
  constructor(private categoriesRespository: ICategoriesRepository) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRespository.index();

    return categories;
  }
}

export { IndexCategoryUseCase };
