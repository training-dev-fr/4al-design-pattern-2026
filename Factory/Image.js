export default class Image{
    constructor(element){
        this.url = element.url;
    }

    display(){
        return `<img src="${this.url}" />`;
    }
}