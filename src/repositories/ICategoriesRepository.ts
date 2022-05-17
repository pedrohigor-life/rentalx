import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO';
import { Category } from '../models/Category';

interface ICategoriesRepository {
  findbyName(name: string): Category;
  create({ name, description }: ICreateCategoryDTO): void;
  index(): Category[];
}

export { ICategoriesRepository };
