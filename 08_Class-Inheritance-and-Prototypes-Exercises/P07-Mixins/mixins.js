let classes = require('./computerHierarchy');

function createMixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        };

        classToExtend.prototype.isFast = function () {
            return this.processorSpeed > (this.ram / 4);
        };

        classToExtend.prototype.isRoomy = function () {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed);
        };
    }
    
    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            if (this.manufacturer === this.keyboard.manufacturer) {
                if (this.manufacturer === this.monitor.manufacturer) {
                    return true;
                }
            }

            return false;
        };

        classToExtend.prototype.isClassy = function () {
            const colors = ['Black', 'Silver'];
            if (this.expectedLife < 3) return false;
            if (this.weight > 3) return false;
            return colors.includes(this.color);
        };
    }

    return {
        computerQualityMixin,
        styleMixin
    }
}

let mixins = createMixins();

let Desktop = classes.Desktop;
let Laptop = classes.Laptop;
let Keyboard = classes.Keyboard;
let Monitor = classes.Monitor;
let Battery = classes.Battery;

mixins.computerQualityMixin(Desktop);
mixins.styleMixin(Desktop);
mixins.computerQualityMixin(Laptop);
mixins.styleMixin(Laptop);

let keyboard = new Keyboard('Asus', 0.2);
let monitor = new Monitor('Asus', 1680, 1050);
let battery = new Battery('Asus', 4);

let desktop = new Desktop('Asus', 4.50, 16, 4, keyboard, monitor);
let laptop = new Laptop('Asus', 2.50, 4, 2, 2, 'Silver', battery);

console.log(desktop.getQuality()); // 8.166666666666666
console.log(desktop.isFast()); // true
console.log(desktop.isRoomy()); // false
console.log(desktop.isFullSet()); // true
console.log(desktop.isClassy()); // false (always)

console.log(laptop.getQuality()); // 2.8333333333333335
console.log(laptop.isFast()); // true
console.log(laptop.isRoomy()); // false
console.log(laptop.isClassy()); // true
// console.log(laptop.isFullSet()); // error