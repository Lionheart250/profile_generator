const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

const answers = [];

function askQuestion(index) {
  rl.question(questions[index] + ' ', (answer) => {
    answers.push(answer);

    if (index < questions.length - 1) {
      askQuestion(index + 1);
    } else {
      generateProfile();
      rl.close();
    }
  });
}

function generateProfile() {
  const [name, activity, music, meal, food, sport, superpower] = answers;

  const profile = `Name: ${name}
Activity: ${activity}
Music: ${music}
Favorite Meal: ${meal}
Favorite Food: ${food}
Favorite Sport: ${sport}
Superpower: ${superpower}`;

  console.log('\nProfile Generated:');
  console.log(profile);
}

askQuestion(0);

























