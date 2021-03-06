import { ICreateSpecificationDTO } from '../dtos/ICreateSpecificationDTO';
import { Specification } from '../entities/Specification';

interface ISpecificationRepository {
  findByName(name: string): boolean;
  create({ name, description }: ICreateSpecificationDTO): void;
  index(): Specification[];
}
export { ISpecificationRepository };
