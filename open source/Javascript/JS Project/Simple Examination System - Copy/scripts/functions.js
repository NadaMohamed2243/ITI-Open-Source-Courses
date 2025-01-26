import { questions } from './examQuestions.js';
import { questionTime } from './external.js'

const randomize = function (arr) {
    return arr.sort(() => Math.random() - 0.5);
}
// questions.sort(() => Math.random() - 0.5);
// console.log(randomize(questions));

// function that start the exam --> randomize the question , start to show questions
export function startExamSetting(currentQustionIndex, questionTitle, questionImage, questionAnswers, nextBtn) {
    randomize(questions)
    currentQustionIndex = 0;
    showQuestion(currentQustionIndex, questionTitle, questionImage, questionAnswers, nextBtn);

}

// show question --> start each question times , start the progress bar , make question appear
export function showQuestion(currentQustionIndex, questionTitle, questionImage, questionAnswers, nextBtn) {
    questionTime();
    const currentQuestion = questions[currentQustionIndex];
    questionTitle.innerText = currentQuestion.title;
    questionImage.src = currentQuestion.image;
    questionAnswers.innerHTML = '';

    randomize(currentQuestion.answers).forEach((answer) => {
        const div = document.createElement("div");
        div.innerText = answer;
        div.classList.add("answer");
        div.addEventListener('click', () => selectAnswer(div, nextBtn));
        questionAnswers.appendChild(div);
    });
}


// Select Answer
function selectAnswer(div, nextBtn) {
    document.querySelectorAll(".questionAnswers .answer").forEach((div) => div.classList.remove("active"));
    div.classList.add("active");
    nextBtn.disabled = false;
    // console.log(document.querySelector('.active').innerText);

}
