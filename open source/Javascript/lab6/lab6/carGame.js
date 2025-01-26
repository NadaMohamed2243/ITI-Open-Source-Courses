// 5-  Using ES6 create Class Engine with source property (Abstract 
//     class) and has private static count property. 
//     Create Car Class (inherits from Engine class)  
//     Class constructor will take top, left and (image source 
//     reference) as source property value 
//     Class methods: 
//     a- top-> setter for top property 
//     b- left-> setter for left property 
//     c- moveLeft-> to move the ball left on page 
//     d- moveRight->to move the ball right on page 
//     e- ChangeStyle-> method that take css style object as input to 
//     apply  it on the car.  
//     Now create your cars and let’s play 

class Engine {

    static #count = 0;
    constructor(source) {
        if (this.constructor.name === 'Engine') {
            throw new Error("We can't create an object from Class Engine (Abstract class)");
        }
        this.source = source;
        this.carRefEle = document.createElement("img");
        this.carRefEle.src = this.source;
        Engine.#count++;
    }
    static getCount() {
        return Engine.#count;
    }
}

class Car extends Engine {
    #mirror = 0;
    #carIdLeft = null;
    #carIdRight = null;

    constructor(top, left, source, container = document.body) {
        super(source);
        this.top = parseInt(top);
        this.left = parseInt(left);
        // this.carRefEle = document.createElement("img");
        // this.carRefEle.src = source;
        this.carRefEle.style.position = "absolute";
        this.carRefEle.style.top = this.top + 'px';
        this.carRefEle.style.left = this.left + 'px';
        this.carRefEle.style.width = '300px';
        this.carRefEle.style.height = '300px';
        this.carRefEle.style.transform = 'scaleX(-1)';
        container.append(this.carRefEle);
    }

    setTop(topValue) {
        this.top = parseInt(topValue);
        this.carRefEle.style.top = this.top + 'px';
    }

    setLeft(leftValue) {
        this.left = parseInt(leftValue);
        this.carRefEle.style.left = this.left + 'px';
    }

    moveLeft() {
        clearInterval(this.#carIdRight);
        if (this.#mirror === 0) {
            this.#mirror = 1;
            this.carRefEle.style.transform = 'scaleX(1)';
        }
        const carInstance = this;
        this.#carIdLeft = setInterval(function () {
            carInstance.left -= 10;
            if (carInstance.left > 0) {
                console.log(carInstance.carRefEle.style.left);
                carInstance.carRefEle.style.left = carInstance.left + 'px';
            } else {
                clearInterval(carInstance.#carIdLeft);
            }

        }, 100);
    }

    moveRight() {
        clearInterval(this.#carIdLeft);
        if (this.#mirror === 1) {
            this.#mirror = 0;
            this.carRefEle.style.transform = 'scaleX(-1)';
        }
        const carInstance = this;
        this.#carIdRight = setInterval(function () {
            carInstance.left += 10;
            if (carInstance.left < window.innerWidth - carInstance.carRefEle.width) {
                console.log(carInstance.carRefEle.style.left);
                carInstance.carRefEle.style.left = carInstance.left + 'px';
            } else {
                clearInterval(carInstance.#carIdRight);
            }

        }, 100);
    }

    ChangeStyle(objStyle) {
        
        for (let prop in objStyle) {
            this.carRefEle.style[prop] = objStyle[prop];
            // console.log(prop);
            // console.log(typeof prop);
            // console.log(objStyle[prop]);
        }
    }
}

// Testing the implementation
let new_car1 = new Car('10px', '900px', '/images/car.jpg', document.querySelector(".inside"));
let new_car2 = new Car('300px', '100px', '/images/car.jpg');
console.log('The number of engines =', Car.getCount());
// new_car1.top(100);
// new_car2.setLeft(100);

setTimeout(() => new_car2.moveRight(), 3000);
setTimeout(() => new_car1.moveLeft(), 2000);

setTimeout(() => new_car2.moveLeft(), 9000);
setTimeout(() => new_car1.moveRight(), 8000);

new_car1.ChangeStyle({ border: '2px pink solid' ,height:'270px'})