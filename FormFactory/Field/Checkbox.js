import Field from "./Field.js";

export default class Checkbox extends Field {
    constructor(item) {
        super(item);
        this.options = item.options;
        this.multiple = item.multiple;
    }

    display() {
        let element = super.display([]);
        for (let option of this.options) {
            let label = document.createElement("label");

            let opt = document.createElement("input");
            opt.type = this.multiple ? "checkbox" : "radio";
            opt.value = option;
            opt.id = this.id + "-" + option;
            opt.name = this.name + "[]";

            label.appendChild(opt);
            label.innerHTML += option;
            element.appendChild(label);
        }
        return element;
    }

    onChange(callback) {
        for (let input of this.element.querySelectorAll("input")) {
            input.addEventListener("click", (e) => {
                if (this.multiple) {
                    if (!this.selectedValue) {
                        this.selectedValue = [];
                    }
                    if(this.selectedValue.some(el => el === e.target.value)){
                        this.selectedValue = this.selectedValue.filter(el => el !== e.target.value);
                    }else{
                        this.selectedValue.push(e.target.value);
                    }
                    callback(this.selectedValue);
                    super.onChange(this.selectedValue);
                } else {
                    callback(e.target.value);
                    super.onChange(e.target.value);
                }
            });
        }
    }
}