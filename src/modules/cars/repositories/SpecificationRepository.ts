import { ICreateSpecificationDTO } from '../dtos/ICreateSpecificationDTO';
import { Specification } from '../models/Specification';
import { ISpecificationRepository } from './ISpecificationsRepository';

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  public create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  public index(): Specification[] {
    return this.specifications;
  }

  public findByName(name: string): boolean {
    const specification = this.specifications.some(
      (specification) => specification.name === name
    );

    return specification;
  }

  constructor() {
    this.specifications = [];
  }
}

export { SpecificationRepository };
