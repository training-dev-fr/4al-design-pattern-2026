import Image from "./Image.js";
import Video from "./Video.js";

export default class DiaporamaFactory{
    constructor(element){
        if(element.type === "image"){
            return new Image(element);
        } else if(element.type === "video"){
            return new Video(element);
        }
    }
}