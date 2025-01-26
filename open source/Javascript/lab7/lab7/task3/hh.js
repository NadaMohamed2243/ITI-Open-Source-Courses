

class Basket {
    constructor() {
        this.top = window.innerHeight - 200;
        this.left = Math.floor(window.innerWidth / 2);
        // console.log(this.left)
        this.basketCreation();
        document.body.append(this.basketRefEle);
    }
    basketCreation()
    {
        this.basketRefEle = document.createElement("img");
        this.basketRefEle.src = '/images/basket.png';
        this.basketRefEle.style.position = "absolute";
        this.basketRefEle.style.top = this.top + 'px';
        this.basketRefEle.style.left = this.left + 'px';
        this.basketRefEle.style.width = '200px';
        this.basketRefEle.style.height = '200px';

    }
    moveRight() {
        if (this.left < window.innerWidth - (this.basketRefEle.width + 20)) {
            this.left += 10;
            this.basketRefEle.style.left = this.left + 'px';
        }
    }
    moveLeft() {
        if (this.left > 0) {
            this.left -= 10;
            this.basketRefEle.style.left = this.left + 'px';
        }
    }
}



class Egg {
    #score;
    constructor() {
        this.top = 0;
        this.left = Math.floor(Math.random() * (window.innerWidth - 200));
        this.eggCreation();
        document.body.append(this.eggRefEle);
        this.#score=0;
    }
    getScote(){
        return this.#score;
    }
    eggCreation()
    {
        this.eggRefEle = document.createElement("img");
        this.eggRefEle.src = '/images/egg.png';
        this.eggRefEle.style.position = "absolute";
        this.eggRefEle.style.top = this.top + 'px';
        this.eggRefEle.style.left = this.left + 'px';
        this.eggRefEle.style.width = '180px';
        this.eggRefEle.style.height = '180px';
    }
    moveDown(basket, basketMovment) {

        let eggDown = setInterval(() => {
            this.top += 10;
            // console.log(this);
            if (this.top < window.innerHeight - this.eggRefEle.height) {
                // console.log(this.eggRefEle.style.top);
                this.eggRefEle.style.top = this.top + 'px';



                let eggBottom = this.top + 40;
                let eggLeft = this.left;
                let eggRight = this.left + 100;
                if (eggBottom >= basket.top && eggLeft < (basket.left + 100) && eggRight > basket.left) {
                    clearInterval(eggDown);
                    window.removeEventListener('keydown', basketMovment);
                    setTimeout(() => this.eggRefEle.style.display = 'none', 200);
                }




            } else {
                clearInterval(eggDown);
                this.eggRefEle.src = '/images/eggfall (2).png';
                window.removeEventListener('keydown', basketMovment);
                setTimeout(() => {
                    this.eggRefEle.style.display = 'none';
                    // window.addEventListener('keydown', basketMovment);
                }, 2000)
            }
        }, 50)

    }

}





// Ensure everything is loaded before creating instances
window.addEventListener('load', function () {
    // egg.moveDown();
    let basket = new Basket();
    let egg = new Egg();
    // egg.moveDown();

    let basketMovment = function (event) {
        if (event.key === 'ArrowLeft') {
            basket.moveLeft();
        } else if (event.key === 'ArrowRight') {
            basket.moveRight();
        }
    }
    window.addEventListener('keydown', basketMovment);
    egg.moveDown(basket, basketMovment);
});