let list = [1,2,3,4,5];

for(let item of list){
    document.querySelector(".test").innerHTML += `<li class="item">${item}</li>`;
}

const test = document.querySelector(".test");
for(let item of list){
    let itemDom = document.createElement('li');
    itemDom.innerHTML = item;
    itemDom.classList.add("item");

    test.appendChild(itemDom);
}