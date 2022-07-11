import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { IndexCategoryUseCase } from './IndexCategoryUseCase';

class IndexCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const indexCategoriesUseCase = container.resolve(IndexCategoryUseCase);

    const categories = await indexCategoriesUseCase.execute();

    return response.status(200).json(categories);
  }
}

export { IndexCategoryController };
