import { inject, injectable } from 'tsyringe';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRespository: ICategoriesRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRespository.findbyName(
      name
    );

    if (categoryAlreadyExists) throw new Error('Category alredy exists');

    this.categoriesRespository.create({
      name,
      description,
    });
  }
}
export { CreateCategoryUseCase };
