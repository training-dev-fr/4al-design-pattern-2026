import Field from "./Field/Field.js";

export default class FormFactory {
    async create(item){
        const module = await import(`./Field/${capitalize(item.type)}.js`);
        let fieldModule = module.default;

        if(!fieldModule.prototype instanceof Field){
            throw new Error(`${item.type} n'es pas un type de champ de formulaire valide`);
        }

        return new fieldModule(item);
    }
}

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}