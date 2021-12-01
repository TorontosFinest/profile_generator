const { count } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!",
];

const answers = [];

let counter = 0;
let max = questions.length;
const question = function () {
  if (counter < max) {
    rl.question(questions[counter], (answer) => {
      answers.push(answer);
      counter++;
      question();
    });
  } else {
    rl.close();
    console.log(
      ` Your New Profile : \n${answers[0]} likes ${answers[1]} while listening to ${answers[2]}. Their favorite meal of the day is ${answers[3]} and their favorite food for
          that meal is ${answers[4]}. Their favorite sport is ${answers[5]} and their super power is ${answers[6]}. Nice to meet you ${answers[0]}!`
    );
  }
};
question();
