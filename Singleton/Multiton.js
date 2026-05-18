class Multiton{
    constructor(){
        if(!Multiton.instances){
            Multiton.instances = [this];
        } else if(Multiton.instances.length < 4){
            Multiton.instances.push(this);
        }
        return Multiton.instances;
    }
}

let m1 = new Multiton();
console.log(m1);
let m2 = new Multiton();
let m3 = new Multiton();
console.log(m3);
let m4 = new Multiton();
let m5 = new Multiton();
let m6 = new Multiton();
console.log(m6);