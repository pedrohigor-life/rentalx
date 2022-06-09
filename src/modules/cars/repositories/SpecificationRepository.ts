import { ICreateSpecificationDTO } from '../dtos/ICreateSpecificationDTO';
import { Specification } from '../models/Specification';
import { ISpecificationRepository } from './ISpecificationsRepository';

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  findByName(name: string): boolean {
    const specification = this.specifications.some(
      (specification) => specification.name === name
    );

    return specification;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }
  index(): Specification[] {
    return this.specifications;
  }

  constructor() {
    this.specifications = [];
  }
}

export { SpecificationRepository };
