import { Category } from '../models/Category';

interface IRequest {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findbyName(name: string): Category;
  create({ name, description }: IRequest): void;
  index(): Category[];
}

export { ICategoriesRepository };
