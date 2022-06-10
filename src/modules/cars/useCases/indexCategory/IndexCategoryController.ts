import { Request, Response } from 'express';
import { IndexCategoryUseCase } from './IndexCategoryUseCase';

class IndexCategoryController {
  constructor(private indexCategoryUseCase: IndexCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const data = this.indexCategoryUseCase.execute();
    return response.status(200).json({ data });
  }
}

export { IndexCategoryController };
