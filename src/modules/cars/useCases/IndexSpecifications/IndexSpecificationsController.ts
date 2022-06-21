import { Request, Response } from 'express';
import { IndexSpecificationUseCase } from './IndexSpecificationUseCase';

class IndexSpecificationController {
  constructor(private indexSpecificationUseCase: IndexSpecificationUseCase) {}
  handle(request: Request, response: Response): Response {
    const specifications = this.indexSpecificationUseCase.execute();

    return response.status(200).json(specifications);
  }
}

export { IndexSpecificationController };
