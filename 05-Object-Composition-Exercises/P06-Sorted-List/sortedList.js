function initSortedList() {
    let list = [];
    return {
        add: function (T) {
            list.push(T);
            this.size++;
            list = list.sort((a, b) => a - b);
        },
        remove: function (index) {
            if (this.size === 0) {
                throw new Error('List is empty!');
            }
            if (index < 0 || index > list.length - 1) {
                throw new RangeError('Index out of Range!');
            }

            list.splice(index, 1);
            this.size--;
        },
        get: function (index) {
            if (this.size === 0) {
                throw new Error('List is empty!');
            }
            if (index < 0 || index > list.length - 1) {
                throw new RangeError('Index out of Range!');
            }

            return list[index];
        },
        size: 0
    };
}

let sortedList = initSortedList();
let myList = sortedList;
myList.add(5);
myList.add(3);
myList.remove(0);
console.log(myList.get(0));
console.log(myList.size);