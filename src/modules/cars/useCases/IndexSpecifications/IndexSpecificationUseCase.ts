import { Specification } from '../../entities/Specification';
import { ISpecificationRepository } from '../../repositories/ISpecificationsRepository';

class IndexSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}
  execute(): Specification[] {
    const specifications = this.specificationRepository.index();

    return specifications;
  }
}

export { IndexSpecificationUseCase };
