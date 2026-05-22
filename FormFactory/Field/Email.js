import Field from "./Field.js";

export default class Email extends Field{
    constructor(item){
        super(item);
    }

    display(){
        let email = document.createElement("input");
        email.type = "email";
        return super.display(email)
    }

    onChange(callback){
        this.element.addEventListener("keyup",(e) => {
            callback(e.target.value);
        });
    }
}