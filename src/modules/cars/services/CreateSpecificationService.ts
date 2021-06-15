import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}
class CreateSpecificationService {
    constructor(private specificationsRepository: ISpecificationsRepository) { }

    execute({ description, name }: IRequest): void {
        this.specificationsRepository.create({
            name,
            description
        });
    }
}

export { CreateSpecificationService };