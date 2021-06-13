import { Router } from 'express';

import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';


const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

function findCategoryById(request, response, next) {
    const { id } = request.params;
    const category = categoriesRepository.findById(id);

    if (!category) {
        return response.status(404).json({ error: "Category not found!" })
    }

    request.category = category;
    next()
}

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(categoriesRepository);

    createCategoryService.execute({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRepository.list()

    return response.json(all);
})

export { categoriesRoutes };