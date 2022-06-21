import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';
import { IndexSpecificationController } from './IndexSpecificationsController';
import { IndexSpecificationUseCase } from './IndexSpecificationUseCase';

const specificationRepository = SpecificationRepository.getInstance();
const indexSpecificationsUseCase = new IndexSpecificationUseCase(
  specificationRepository
);
const indexSpecificationController = new IndexSpecificationController(
  indexSpecificationsUseCase
);

export { indexSpecificationController };
