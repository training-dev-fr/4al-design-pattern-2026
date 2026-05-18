export default class List {
    constructor(listItem) {
        this.listItem = listItem;
        this.currentItem = this.listItem[0];
    }

    next() {
        this.currentItem = this.currentItem.next;
    }

    isNext() {
        return this.currentItem.next !== null;
    }

    forEach(callback) {
        if (this.currentItem) {
            callback(this.currentItem);
        }
        if (this.isNext()) {
            this.next();
            this.forEach(callback);
        }
    }
}