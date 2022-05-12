import { Category } from '../models/Category';

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  public create({ name, description, created_at }: Category): void {
    const category: Category = new Category();

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
