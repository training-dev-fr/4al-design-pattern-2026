import Field from "./Field.js";

export default class Password extends Field{
    constructor(item){
        super(item);
    }

    display(){
        let password = document.createElement("input");
        password.type = "password";
        return super.display(password)
    }

    onChange(callback){
        this.element.addEventListener("keyup",(e) => {
            callback(e.target.value);
        });
    }
}