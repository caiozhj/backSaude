/* eslint-disable max-len */
/* eslint-disable padded-blocks */
/* eslint-disable keyword-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multi-spaces */
/* eslint-disable eol-last */
/* eslint-disable space-before-blocks */
/* eslint-disable indent */
/* eslint-disable quotes */
import { Category } from "../model/Category";
import { ICategoriesRepository, ICreatedCategoryDTO } from "./ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {

    private categories: Category[] ;

    private static INSTANCE: CategoriesRepository;

    private constructor(){     // para nao que nao seja possivel o new CategoriesRepository
        this.categories = [];
    }

    public static getInstance(): CategoriesRepository{

        if(!CategoriesRepository.INSTANCE){    // verificação, se for nulo ou undefined criamos um valor pra ele
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }
        // mas se ja tiver uma instancia criada retornamos a instancia ja criada
        return CategoriesRepository.INSTANCE;
    }

    create({ name, description }: ICreatedCategoryDTO): void{
        const category: Category = new Category();    // chamo metodo construtor
    
        Object.assign(category, {     // passando parametro por parametro para o objeto category
            name, 
            description,       
            created_at: new Date(),
        });
    
        this.categories.push(category);
    }

    list(): Category[] {        // retorno da lista de categorias
        return this.categories;
    }

    findByName(name:string): Category {
        // find() => função javascript para perrcorrer array com uma condição dentro de parenteses
        // objetivo é nao ter varias categorias com mesmo nome
        const category =  this.categories.find((category) => category.name === name);         
        return category;     
    }
}

export { CategoriesRepository };