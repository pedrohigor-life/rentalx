import { inject, injectable } from 'tsyringe';
import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

@injectable()
class IndexCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRespository: ICategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRespository.index();

    return categories;
  }
}

export { IndexCategoryUseCase };
