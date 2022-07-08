import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO';
import { Category } from '../entities/Category';

interface ICategoriesRepository {
  findbyName(name: string): Promise<Category>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
  index(): Promise<Category[]>;
}

export { ICategoriesRepository };
