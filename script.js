const qustionDataBase = [
  {
    question: 'Full form of Html?',
    option1: 'Hello to my world',
    option2: 'Hey text my language',
    option3: 'Hyper text Markup language',
    option4: 'Hyper text Makeup language',
    ans: 'answer3',
  },
  {
    question: 'why do we use ReactJs?',
    option1: "For building UI's",
    option2: 'For back-end',
    option3: 'For data-bases',
    option4: "It's nothing.",
    ans: 'answer1',
  },
  {
    question: 'Which tag is incorrect?',
    option1: '<kbd>',
    option2: '<html>',
    option3: '<abbr>',
    option4: 'All are correct',
    ans: 'answer4',
  },
]

// getting referrence
const questionContainer = document.querySelector('h2')
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const submitButton = document.querySelector('button')
const usersAnswer = document.querySelectorAll('.answer')
const scoreArea = document.querySelector('#ShowScore')

// This function is rendering all the texts

let questionCount = 0
let score = 0
const mainFunc = () => {
  const list = qustionDataBase[questionCount]
  questionContainer.innerText = list.question
  option1.innerText = list.option1
  option2.innerText = list.option2
  option3.innerText = list.option3
  option4.innerText = list.option4
}

mainFunc()

// this function is for answer checking

const goCheckAnswer = () => {
  let answers
  usersAnswer.forEach((data) => {
    if (data.checked) {
      answers = data.id
    }
  })
  return answers
}

submitButton.addEventListener('click', () => {
  const checkAnswer = goCheckAnswer()
  console.log(checkAnswer)

  if (checkAnswer === qustionDataBase[questionCount].ans) {
    score++
  }
  questionCount++
  if (questionCount < qustionDataBase.length) {
    mainFunc()
  } else {
    scoreArea.style.display = 'block'
    scoreArea.innerHTML = `
      <h3>Your score is ${score} / ${qustionDataBase.length}</h3>
      <button class='btn' onclick='location.reload()'>Play Again</button>
      `
  }
})
console.log(qustionDataBase[questionCount].ans)
