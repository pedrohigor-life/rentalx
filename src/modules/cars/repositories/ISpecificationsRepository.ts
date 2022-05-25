import { ICreateSpecificationDTO } from '../dtos/ICreateSpecificationDTO';
import { Specification } from '../models/Specification';

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  index(): Specification[];
}
export { ISpecificationRepository };
