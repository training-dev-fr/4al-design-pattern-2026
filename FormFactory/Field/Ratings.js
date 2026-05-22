import Field from "./Field.js";

export default class Ratings extends Field{
    constructor(item){
        super(item);
    }

    display(){
        this.ratings = document.createElement('div');
        this.ratings.classList.add('ratings');
        for(let i=0;i<5;i++){
            let star = document.createElement('i');
            star.classList.add('star');
            star.classList.add('fa-solid');
            star.classList.add('fa-star');
            star.dataset.value = i+1;
            this.ratings.appendChild(star);
        }
        return super.display(this.ratings);
    }

    onChange(callback){
        this.ratings.querySelectorAll('.star').forEach(star => {
            star.addEventListener('click',(e) => {
                callback(e.currentTarget.dataset.value);
                super.onChange(e.currentTarget.dataset.value);
            });
        });
    }
}