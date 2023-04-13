import {Request, Response} from 'express';
import { ListCategoryService } from '../../services/category/ListCategoryService'

class ListCatergoryController{
    async handle(req: Request, res: Response){
        const listCatergoryService = new ListCategoryService();

        const category = await listCatergoryService.execute();

        return res.json(category);
    }
}

export {ListCatergoryController};
