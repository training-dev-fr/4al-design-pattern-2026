import FormFactory from "./FormFactory.js";
const formFactory = new FormFactory();

const loadData = async () => {
    let res = await fetch('./content.json');
    let data = await res.json();
    return data;
}

const showField = async (element) => {
    let item = await formFactory.create(element);
    document.querySelector(".form").appendChild(item.display());
    item.onChange((value) => console.log(value));
}

const init = async () => {
    let data = await loadData();
    for(let element of data){
        await showField(element);
    }
}

init();