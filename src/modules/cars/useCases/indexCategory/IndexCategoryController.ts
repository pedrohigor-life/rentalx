import { Request, Response } from 'express';
import { IndexCategoryUseCase } from './IndexCategoryUseCase';

class IndexCategoryController {
  constructor(private indexCategoryUseCase: IndexCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const categories = await this.indexCategoryUseCase.execute();
    return response.status(200).json({ categories });
  }
}

export { IndexCategoryController };
