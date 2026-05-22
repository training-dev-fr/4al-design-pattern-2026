export default class Field {
    constructor(item) {
        this.label = item.label;
        this.id = item.id;
        this.name = item.name;
        this.element = null;
    }

    display(children) {
        this.element = document.createElement("div");
        this.element.classList.add("form-group");

        let label = document.createElement("label");
        if (this.id) {
            label.setAttribute("for", this.id);
        }
        label.innerHTML = this.label;

        this.element.appendChild(label);

        if (children instanceof HTMLElement) {
            if (this.id) {
                children.id = this.id;
            }
            if (this.name) {
                children.name = this.name;
            }

            this.element.appendChild(children);
        }

        return this.element;
    }
}