window.addEventListener("load", () => {
    class Basket {
        constructor() {
            this.top = window.innerHeight - 200;
            this.left = Math.floor(window.innerWidth / 2);
            this.#basketCreation();
            document.body.append(this.basketRefEle);
        }
        #basketCreation() {
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
                this.left += 20;
                this.basketRefEle.style.left = this.left + 'px';
            }
        }
        moveLeft() {
            if (this.left > 0) {
                this.left -= 20;
                this.basketRefEle.style.left = this.left + 'px';
            }
        }
    }

    class Egg {
        static #score = 0;
        constructor() {
            this.top = 0;
            this.left = Math.floor(Math.random() * (window.innerWidth - 200));
            this.#eggCreation();
            document.body.append(this.eggRefEle);
            this.newCreated = 0;
            Egg.#score++;
        }
        static getScore() {
            return Egg.#score;
        }
        #eggCreation() {
            this.eggRefEle = document.createElement("img");
            this.eggRefEle.src = '/images/egg.png';
            this.eggRefEle.style.position = "absolute";
            this.eggRefEle.style.top = this.top + 'px';
            this.eggRefEle.style.left = this.left + 'px';
            this.eggRefEle.style.width = '180px';
            this.eggRefEle.style.height = '180px';
        }

        moveDown(basket, basketMovement, createNewEggObj) {
            let eggDown = setInterval(() => {
                this.top += 10;
                if (this.top < window.innerHeight - this.eggRefEle.height) {
                    this.eggRefEle.style.top = this.top + 'px';

                    // movement 
                    // numbers depend on the images w & h --> try
                    let eggBottom = this.top + 40;
                    let eggLeft = this.left;
                    let eggRight = this.left + 90;

                    if (
                        eggBottom >= basket.top &&
                        eggLeft < basket.left + 100 &&
                        eggRight > basket.left
                    ) {
                        clearInterval(eggDown);
                        // window.removeEventListener('keydown', basketMovement);
                        setTimeout(() => (this.eggRefEle.style.display = 'none'), 200);
                        createNewEggObj();

                    }
                } else {
                    clearInterval(eggDown);
                    this.eggRefEle.src = '/images/eggfall (2).png';
                    window.removeEventListener('keydown', basketMovement);
                    setTimeout(() => {
                        this.eggRefEle.style.display = 'none';
                    }, 2000);

                    let gameOverHeader = document.createElement('h1');
                    gameOverHeader.innerText = 'Game Over';
                    gameOverHeader.style.position = 'absolute';
                    gameOverHeader.style.top = '40%';
                    gameOverHeader.style.left = '40%';
                    gameOverHeader.style.fontSize = '48px';
                    gameOverHeader.style.zIndex = '9999';
                    document.body.append(gameOverHeader);
                }
            }, 40);
        }

    }

    class Play {
        constructor() {
            this.basket = new Basket();
            this.egg = new Egg();
            this.basketMovment = this.basketMovment.bind(this);
            this.scoreHeader= this.scorePosition();
        }
        scorePosition() {
            let scoreHeader = document.createElement('h1');
            scoreHeader.style.position = 'absolute';
            scoreHeader.innerText = `score : ${0}`;
            scoreHeader.style.top = '5%';
            scoreHeader.style.left = '5%';
            scoreHeader.style.fontSize = '30px';
            scoreHeader.style.zIndex = '9999';
            document.body.append(scoreHeader);
            return scoreHeader;
        }
        basketMovment(event) {
            console.log(this)
            if (this.gameOver) return;

            if (event.key === 'ArrowLeft') {
                this.basket.moveLeft();
            } else if (event.key === 'ArrowRight') {
                this.basket.moveRight();
            }
        }
        startGame() {
            window.addEventListener('keydown', this.basketMovment);
            this.egg.moveDown(this.basket, this.basketMovment, this.createNewEggObj.bind(this));

        }
        createNewEggObj() {
            this.egg = new Egg();
            //bind --> make this bind to the play class without this will bind to window
            // console.log(Egg.getScore());
            this.scoreHeader.innerText = `score : ${Egg.getScore()-1}`;
            this.egg.moveDown(this.basket, this.basketMovment, this.createNewEggObj.bind(this));
        }
    }

    let game = new Play();
    game.startGame();
});
