import { Specification } from '../models/Specification';
import { ISpecificationRepository } from '../repositories/ISpecificationsRepository';

class IndexSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute(): Specification[] {
    return this.specificationRepository.index();
  }
}

export { IndexSpecificationService };
