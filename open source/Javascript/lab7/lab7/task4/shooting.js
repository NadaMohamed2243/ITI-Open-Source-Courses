class Bird {
    #birdRightInterval;
    #birdLeftInterval;
    #birdDownInterval;
    constructor() {
        this.top = Math.floor(Math.random() * (window.innerHeight - 300));
        this.left = 0;
        this.#createBird();
        document.body.append(this.birdRefEle);

        this.birdRefEle.addEventListener('click', () => { this.moveDown(); });
    }
    #createBird() {
        this.birdRefEle = document.createElement("img");
        this.birdRefEle.src = '/images/bird.gif';
        this.birdRefEle.style.position = "absolute";
        this.birdRefEle.style.top = this.top + 'px';
        this.birdRefEle.style.left = this.left + 'px';
        this.birdRefEle.style.width = '300px';
        this.birdRefEle.style.height = '300px';
        this.birdRefEle.style.transform = 'scaleX(1)';
    }

    moveRight() {
        this.birdRefEle.style.transform = 'scaleX(1)';
        this.#birdRightInterval = setInterval(() => {
            this.left += 10;
            if (this.left < window.innerWidth - this.birdRefEle.width) {
                // console.log(this.birdRefEle.style.left);
                this.birdRefEle.style.left = this.left + 'px';
            } else {
                clearInterval(this.#birdRightInterval);
                this.moveLeft();
            }

        }, 10);
    }

    moveLeft() {
        this.birdRefEle.style.transform = 'scaleX(-1)';
        this.#birdLeftInterval = setInterval(() => {
            this.left -= 10;
            if (this.left > 0) {
                // console.log(this.birdRefEle.style.left);
                this.birdRefEle.style.left = this.left + 'px';
            } else {
                clearInterval(this.#birdLeftInterval);
                this.moveRight();
            }
        }, 10);
    }

    moveDown() {
        clearInterval(this.#birdRightInterval);
        clearInterval(this.#birdLeftInterval);
        this.birdRefEle.style.transform = 'scaleY(-1)';
        this.#birdDownInterval = setInterval(() => {
            this.top += 10;
            // console.log(this);
            if (this.top < window.innerHeight - this.birdRefEle.height) {
                // console.log(this.eggRefEle.style.top);
                this.birdRefEle.style.top = this.top + 'px';
            } else {
                console.log('kkk')
                clearInterval(this.#birdDownInterval);
                this.birdRefEle.src = '/images/bg-1950918a-6fcf-45ea-b708-332645ad9f16.png';
                this.birdRefEle.style.width = '230px';
                this.birdRefEle.style.height = '230px';
                this.birdRefEle.style.top = (this.top + 40) + 'px';
                setTimeout(() => {
                    this.birdRefEle.style.display = 'none';

                }, 500)


                let winHeader = document.createElement('h1');
                winHeader.innerText = 'Winner';
                winHeader.style.position = 'absolute';
                winHeader.style.top = '40%';
                winHeader.style.left = '40%';
                winHeader.style.fontSize = '48px';
                winHeader.style.zIndex = '9999';
                document.body.append(winHeader);
            }
        }, 100)

    }

}


window.addEventListener('load', function () {
    let bird = new Bird();
    bird.moveRight();


})