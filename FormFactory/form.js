import FormFactory from "./FormFactory.js";

const loadData = async () => {
    let res = await fetch('./content.json');
    let data = await res.json();
    return data;
}

const showField = (element) => {
    let item = new FormFactory(element);
    document.querySelector(".form").appendChild(item.display());
    item.onChange((value) => console.log(value));
}

const init = async () => {
    let data = await loadData();
    for(let element of data){
        showField(element);
    }
}

init();