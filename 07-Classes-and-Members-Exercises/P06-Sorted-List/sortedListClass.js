class SortedList {
    constructor() {
        this.sortedList = [];
        this.size = 0;
    }

    add(T) {
        this.sortedList.push(T);
        this.size++;
        this.sortedList = this.sortedList.sort((a, b) => a - b);
    }
    remove(index) {
        if (this.size === 0) {
            throw new Error('List is empty!');
        }
        if (index < 0 || index > this.sortedList.length - 1) {
            throw new RangeError('Index out of Range!');
        }

        this.sortedList.splice(index, 1);
        this.size--;
    }
    get(index) {
        if (this.size === 0) {
            throw new Error('List is empty!');
        }
        if (index < 0 || index > this.sortedList.length - 1) {
            throw new RangeError('Index out of Range!');
        }

        return this.sortedList[index];
    }
}

let myList = new SortedList();
myList.add(5);
myList.add(3);
myList.remove(0);
console.log(myList.get(0));
console.log(myList.size);