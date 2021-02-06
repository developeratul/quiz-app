const qustionDataBase = [
  {
    question: 'Full form of Html?',
    option1: 'Hello to my world',
    option2: 'Hey text my language',
    option3: 'Hyper text Merkup language',
    option4: 'Hyper text Makeup language',
    answer: 'answer3',
  },
  {
    question: 'why do we use ReactJs?',
    option1: "For building UI's",
    option2: 'For back-end',
    option3: 'For data-bases',
    option4: "It's nothing.",
    answer: 'answer1',
  },
  {
    question: 'Which tag is incorrect?',
    option1: '<kbd>',
    option2: '<html>',
    option3: '<abbr>',
    option4: 'All are correct',
    answer: 'answer4',
  },
]
const questionContainer = document.querySelector('h2')
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const submitButton = document.querySelector('button')
const mainFunc = () => {
  const list = qustionDataBase[0]
  questionContainer.innerText = list.question
  option1.innerText = list.option1
  option2.innerText = list.option2
  option3.innerText = list.option3
  option4.innerText = list.option4
}
submitButton.addEventListener('click', () => {})
mainFunc()
