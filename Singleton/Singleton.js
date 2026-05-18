class Singleton{
    constructor(){
        if(!Singleton.instance){
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}

let s1 = new Singleton();
let s2 = new Singleton();
let s3 = new Singleton();

console.log(s1);
console.log(s2);
console.log(s3);

console.log(s1 === s2);