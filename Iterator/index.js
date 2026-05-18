import Item from "./Item.js";
import List from "./List.js";

let item3 = new Item(-5,null);
let item2 = new Item(10,item3)
let item1 = new Item(3,item2);

let list = new List([item1,item2,item3]);

list.forEach(element => console.log(element.value));