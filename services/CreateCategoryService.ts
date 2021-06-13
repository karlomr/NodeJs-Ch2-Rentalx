

interface IRequest {
    name: string;
    description: string;

}


/**
 * [] Definir o tipo de retorno
 * [] Alterar o retorno do erro
 * [] Acessar o repositório
 * [] Retornar algo
 */
class CreateCategoryService {
    execute({ description, name }) : IRequest {
        const categoryAlreadyExists = categoriesRepository.findByName(name);

        if(categoryAlreadyExists) {
            throw new Error ("Category already exists!")
        }
    
        categoriesRepository.create({ name, description });        
    }
}

export { CreateCategoryService }