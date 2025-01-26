import { questions } from './examQuestions.js';
import { startExamSetting, showQuestion } from './functions.js';
console.log(questions);


let currentQustionIndex = 0;
let score = 0;
let timerId;
let interval;


const welcomePage = document.querySelector(".nameEnter");
const ExamPage = document.querySelector("#ExamSection");
const startBtn = document.querySelector(".startBtn");
const userNameSpan = document.querySelector(".userName");

const questionTitle = document.querySelector(".questionTitle");
const questionImage = document.querySelector(".questionImage");
const questionAnswers = document.querySelector(".questionAnswers");
const progressBar = document.querySelector(".progress-bar");
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
            //store in localStorage to simulate the backend only
            localStorage.setItem("examUser", validUser);
            Swal.fire({
                icon: "success",
                title: "Saved!",
                text: `Welome "${validUser}" in our exam. we wish you luck!`,
            });
            userNameSpan.innerText = validUser.split(" ")[0];
            console.log("Stored user:", localStorage.getItem("examUser"));
        }
        // else if (result.isDismissed) {
        //     startBtn.disabled = true;
        // }
    });


    //-----enter the exam-------
    startBtn.addEventListener('click', function () {
        welcomePage.classList.add('hidden');
        ExamPage.classList.remove('hidden');
        startExamSetting(currentQustionIndex, questionTitle, questionImage, questionAnswers, progressBar, nextBtn, timerId);
    })
    //-----next question in case of user click next---
    nextBtn.addEventListener('click', nextQuestion);

})




// --------------next question functionalit--> called in 2 cases (next button click ,question time out ) 
function nextQuestion() {
    clearInterval(timerId);
    let selectedAnswer = document.querySelector('.active') != null ? document.querySelector('.active').innerText : " ";

    console.log(questions[currentQustionIndex].correctAnswer);
    if (selectedAnswer == questions[currentQustionIndex].correctAnswer) {
        score++;
    }
    currentQustionIndex++;
    if (currentQustionIndex < questions.length) {
        showQuestion(currentQustionIndex, questionTitle, questionImage, questionAnswers, progressBar, nextBtn, timerId);
        nextBtn.disabled = true;
    }
    else {
        //----score page---------------
        console.log(score);
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

        clearInterval(timerId);
        clearInterval(interval);

    }
}

//---time for each question
function questionTime() {
    timerId = setTimeout(() => {
        nextQuestion();
    }, 6000)
}


//-----progress bar for each question
function startTimer() {
    clearInterval(interval);
    let width = 100;
    let timeLeft = 5;
    progressBar.style.width = width + "%";
    interval = setInterval(() => {
        // timeLeft--;
        width = (timeLeft / 6) * 100;
        progressBar.style.width = width + "%";
        timeLeft--;
        // When time is out
        if (timeLeft < 0) {
            clearInterval(interval);
            nextQuestion();
        }
    }, 1000);
}


export { questionTime, startTimer };