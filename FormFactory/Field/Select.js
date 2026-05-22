import Field from "./Field.js";

export default class Checkbox extends Field {
    constructor(item) {
        super(item);
        this.options = item.options;
    }

    display() {
        let select = document.createElement("select");
        for (let [key,option] of Object.entries(this.options)) {
            let opt = document.createElement("option");
            opt.value = key;
            opt.innerHTML = option;

            select.appendChild(opt);
        }
        return super.display(select);
    }

    onChange(callback) {
        this.element.addEventListener("change",(e) => {
            callback(e.target.value);
        });
    }
}