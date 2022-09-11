const checkAnswer = document.querySelector('.answer-btn');
const luckyNumber = document.querySelector('.lucky-number');
const birthDate = document.querySelector('.date-picker');
const result = document.querySelector('.result');

const calculateSum = (val) => {
  let sum = 0;

  while (val !== 0) {
    let rem = val % 10;
    sum += rem;
    val = parseInt(val / 10);
  }

  return sum;
};

const calculateResult = () => {
  let luckyNum = parseInt(luckyNumber.value);
  let bDate = birthDate.value;

  let message = '';

  if (luckyNum === 0 || isNaN(luckyNum) || bDate === '') {
    message = 'Ahh, give a proper input dude 👿';
    result.textContent = message;
    return;
  }

  bDate = parseInt(bDate.replaceAll('-', ''));
  let sumOfBirthDate = calculateSum(bDate);

  if (sumOfBirthDate % luckyNum === 0) {
    message = `Yay!! You are lucky. Congratulations, ${luckyNum} is your lucky number 🔥🎉`;
  } else {
    message = `Ahh!! ${luckyNum} is not that lucky for you. 😔`;
  }

  result.textContent = message;
};

function App() {
  checkAnswer.addEventListener('click', calculateResult);
}

App();
