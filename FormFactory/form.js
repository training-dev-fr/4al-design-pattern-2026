import FormFactory from "./FormFactory.js";
import FormValidator from "./FormValidator.js";

const fieldList = [];
const formFactory = new FormFactory();
const formValidator = new FormValidator();

const loadData = async () => {
    let res = await fetch('./content.json');
    let data = await res.json();
    return data;
}

const showField = async (element) => {
    let item = await formFactory.create(element);
    document.querySelector(".form").appendChild(item.display());
    fieldList.push(item);
    item.onChange((value) => console.log(value));
}

const init = async () => {
    let data = await loadData();
    for (let element of data) {
        await showField(element);
    }
}

init();

document.querySelector("#send").addEventListener("click", () => {
    for (let item of fieldList) {
        item.error = false;
        if(!formValidator.check(item)){
            item.error = true;
            throw new Error("Formulaire invalide");
        }
    }

})