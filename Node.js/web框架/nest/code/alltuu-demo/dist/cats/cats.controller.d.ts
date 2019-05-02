import { CreateCatDto, FindCats } from './cat.dto';
export declare class CatsController {
    create(createCatDto: CreateCatDto): Promise<string>;
    findCats(query: FindCats): string;
    findOne(params: any): string;
    findAll(): string;
}
