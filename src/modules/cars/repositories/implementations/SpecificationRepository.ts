import { ICreateSpecificationDTO } from '../../dtos/ICreateSpecificationDTO';
import { Specification } from '../../models/Specification';
import { ISpecificationRepository } from '../ISpecificationsRepository';

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  private static INSTANCE: SpecificationRepository;

  static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }

    return SpecificationRepository.INSTANCE;
  }

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

  private constructor() {
    this.specifications = [];
  }
}

export { SpecificationRepository };
