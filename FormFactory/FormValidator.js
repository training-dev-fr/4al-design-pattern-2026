export default class FormValidator{
    constructor(){

    }

    check(item){
        if(item.format){
            let regex = new RegExp(item.format);
            return regex.test(item.selectedValue);
        }
        return true;
    }
}