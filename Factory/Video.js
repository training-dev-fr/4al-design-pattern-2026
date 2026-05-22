export default class Video{
    constructor(element){
        this.url = element.url;
    }

    display(){
        return `<video src="${this.url}" autoplay="true" controls="true" />`;
    }
}