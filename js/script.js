const questionCount = document.querySelector('.question-p');
const question = document.querySelector('.question');
const choice = document.querySelector('.choices');

let questionNumber = 1;
let score = 0;
const choiceAlphabet = ['A', 'B', 'C', 'D'];

function updatePage() {
  if (questionNumber < 5) {

    questionCount.innerText = `Question ${questionNumber}/4`;  
    const questions = [
      'What is 1 + 1',
      'What is 2 + 3',
      'What is 3 + 7',
      'What is 9 + 9'
    ];
    let childNum = 0;
    const answerSheet = [[2,4,5,7],[1,5,10,11], [20,30,10,14],[12,20,27,18]];
    
    question.innerText = `${questions[questionNumber-1]}`;
    const choices = document.querySelector('.choices');
    choices.innerHTML = ''
    for(let i = 0; i < 4; i++) {
      choices.insertAdjacentHTML('beforeend', 
      `<div class = "child${i+1}">
      <div class="child-inner">${choiceAlphabet[i]}</div>
      ${answerSheet[questionNumber-1][i]}
      </div>
      `);
    }
    const child = document.querySelectorAll('[class^=child]');
    for (let c of child) {
      c.addEventListener('click', () => {
        let val = c.innerText;
        checkAnswer(questionNumber, choiceAlphabet.indexOf(val[0]));
      })
    }
    document.querySelector('.score').innerText = score;
  } else {
    const body = document.querySelector('body');
    body.innerHTML = '';
    body.insertAdjacentHTML('afterbegin', `
    <h1 class=result style="color: #5AA7EB;">Total score: ${score}</h1>
    <a href="quiz.html">
    <button class="start-btn">Play Again</button>
    </a>
    `);
    
  }
}



function checkAnswer(question, answer) {
  document.querySelector('.meter').value += 25;
  if((question === 1 && answer === 0) || (question === 2 && answer === 1) || (question === 3 && answer === 2) || (question === 4 && answer === 3)) {
    score++;
    document.querySelector(`.child${answer+1}`).setAttribute('style', 'background-color: green');
  } 
  else {
    document.querySelector(`.child${answer+1}`).setAttribute('style', 'background-color: red');

  }
  setTimeout(updatePage, 1000);
  questionNumber++;
  // updatePage();

}

