import Field from "./Field.js";

export default class Text extends Field{
    constructor(item){
        super(item);
    }

    display(){
        let text = document.createElement("input");
        text.type = "text";
        return super.display(text)
    }

    onChange(callback){
        this.element.addEventListener("keyup",(e) => {
            callback(e.target.value);
        });
    }
}