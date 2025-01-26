import { questions } from './examQuestions.js';
import { startExamSetting, showQuestion } from './functions.js';
console.log(questions);


let currentQustionIndex = 0;
let score = 0;
let interval;


const welcomePage = document.querySelector(".nameEnter");
const ExamPage = document.querySelector("#ExamSection");
const startBtn = document.querySelector(".startBtn");
const userNameSpan = document.querySelector(".userName");

const questionTitle = document.querySelector(".questionTitle");
const questionImage = document.querySelector(".questionImage");
const questionAnswers = document.querySelector(".questionAnswers");
const progressBar = document.querySelector("#progressQuestion");
const nextBtn = document.querySelector(".nextBtn");

const resultPage = document.querySelector("#timerContainer");
const percentResult = document.querySelector("#result");
const correctNum = document.querySelector(".correctNum");
const totalNum = document.querySelector(".totalNum");
const progressCircle = document.querySelector("#progressCircle");

window.addEventListener("load", function () {
    // ---------enter name using popup library called swal----------
    Swal.fire({
        title: "Enter your Name : ",
        input: "text",
        inputAttributes: {
            autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "Save",
        preConfirm: (username) => {
            // make some validation on the input name
            let validUsername = username.trim().replace(/\s+/g, ' ');
            console.log(validUsername);
            //ensure --> not empty , has more than 3 words and less than 6,don't have special chars or numbers 
            if (validUsername == '' || validUsername.split(' ').length < 3 || validUsername.split(' ').length >= 6 || !/^[a-zA-Z\s]+$/.test(validUsername)) {
                Swal.showValidationMessage("Please enter your fullName (more than 3 names and less than 6 names) and should contain only letters");
            } else {
                // if all is ok --> make only the first char capital and other small
                return validUsername.toLowerCase()
                    .split(" ")
                    .map((ele) => ele[0].toUpperCase() + ele.substring(1))
                    .join(" ");

            }
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        console.log(result)
        if (result.isConfirmed) {
            //disable the start exam button if the user not submit his fullname
            startBtn.disabled = false;
            const validUser = result.value;
            Swal.fire({
                icon: "success",
                title: "Saved!",
                text: `Welome "${validUser}" in our exam. we wish you luck!`,
            });
            userNameSpan.innerText = validUser.split(" ")[0];
        }
    });


    //-----enter the exam-------
    startBtn.addEventListener('click', function () {
        welcomePage.classList.add('hidden');
        ExamPage.classList.remove('hidden');
        startExamSetting(currentQustionIndex, questionTitle, questionImage, questionAnswers, nextBtn);
    })
    //-----next question in case of user click next---
    nextBtn.addEventListener('click', nextQuestion);

})




// --------------next question functionalit--> called in 2 cases (next button click ,question time out ) 
function nextQuestion() {
    let selectedAnswer = document.querySelector('.active') != null ? document.querySelector('.active').innerText : " ";
    console.log(questions[currentQustionIndex].correctAnswer);
    console.log(selectedAnswer);
    if (selectedAnswer == questions[currentQustionIndex].correctAnswer) {
        score++;
    }
    currentQustionIndex++;
    if (currentQustionIndex < questions.length) {
        showQuestion(currentQustionIndex, questionTitle, questionImage, questionAnswers, nextBtn);
        nextBtn.disabled = true;
    }
    else {
        //----score page---------------
        console.log(score);
        showScorePage();
    }
}


//----score page---------------
function showScorePage() {
    //check any correct answers
    // this because if user select the answer and the time is over (without click next)
    // we check if the choosen answer is correct or no (and if so increase the score)
    if (currentQustionIndex < questions.length ) {
        let selectedAnswer = document.querySelector('.active') != null ? document.querySelector('.active').innerText : " ";
        console.log(questions[currentQustionIndex].correctAnswer);
        console.log(selectedAnswer);
        if (selectedAnswer == questions[currentQustionIndex].correctAnswer) {
            score++;
        }
    }

    //----moving to score page---------------
    ExamPage.classList.add("hidden");
    resultPage.classList.remove("hidden");
    percentResult.innerText = `${(score / questions.length) * 100}%`;
    correctNum.innerText = score;
    totalNum.innerHTML = questions.length;

    const radius = 90;
    const dashArray = radius * Math.PI * 2;
    const progressScore = (score / questions.length) * 100;
    const dashOffset = dashArray - (dashArray * progressScore) / 100;
    progressCircle.style.strokeDasharray = `${dashArray}`;
    progressCircle.style.strokeDashoffset = `${dashOffset}`;

    clearInterval(interval);
}



//---time for exam (60 sec)
function ExamTime() {
    let timeLeft = 60;
    progressBar.style.width = "100%";
    clearInterval(interval);

    interval = setInterval(() => {
        timeLeft--;
        let width = (timeLeft / 60) * 100;
        progressBar.style.width = `${width}%`;

        if (timeLeft <= 0) {
            clearInterval(interval);
            showScorePage();
        }
    }, 1000);
}


export { ExamTime }; 