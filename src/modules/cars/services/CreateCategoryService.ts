import { CategoriesRepository } from '../repositories/CategoriesRepositories';
import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRespository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    if (this.categoriesRespository.findbyName(name))
      throw new Error('Category alredy exists');

    this.categoriesRespository.create({
      name,
      description,
    });
  }
}
export { CreateCategoryService };
