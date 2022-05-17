import { CategoriesRepository } from '../repositories/CategoriesRepositories';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRespository: CategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    if (this.categoriesRespository.findCategory(name))
      throw new Error('Category alredy exists');

    this.categoriesRespository.create({
      name,
      description,
    });
  }
}
export { CreateCategoryService };
