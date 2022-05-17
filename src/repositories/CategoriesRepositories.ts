import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO';
import { Category } from '../models/Category';

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  private findCategory(name: string): Category {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }

  public create({ name, description }: ICreateCategoryDTO): void {
    const category: Category = new Category();

    if (this.findCategory(name)) throw Error('Category already exists');

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);

    return;
  }

  public index(): Category[] {
    return this.categories;
  }
}

export { CategoriesRepository };
