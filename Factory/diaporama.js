import DiaporamaFactory from "./DiaporamaFactory.js";

let currentIndex = 0;

const loadData = async () => {
    let res = await fetch('./content.json');
    let data = await res.json();
    return data;
}

const showDiapo = (element) => {
    let item = new DiaporamaFactory(element);
    document.querySelector(".diaporama").innerHTML += item.display();
}

const prepareEvent = (data) => {
    document.querySelector('#prev').addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = data.length - 1;
        }
        showDiapo(data[currentIndex]);
    })
    document.querySelector('#next').addEventListener("click", () => {
        if (currentIndex < data.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        showDiapo(data[currentIndex]);
    })
}

const init = async () => {
    let data = await loadData();
    showDiapo(data[0]);
    prepareEvent(data);
}

init();