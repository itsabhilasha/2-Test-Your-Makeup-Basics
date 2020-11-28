var rs = require("readline-sync")
const chalk = require('chalk');

// output
console.log(chalk.cyan("Hello! Let's test your makeup knowledge! "));

// input
var player = rs.question("Name: ")

// processing

var welcomeMessage = `Welcome, ${player}! Please answer all the questions with either a yes or no.`

console.log(chalk.yellow(welcomeMessage))

//function

var score = 0


function gameplay(question,correctAnswer)
{
  var isAnswerCorrect
  var answer=rs.keyInYNStrict(`\n${chalk.green(question)}`)
  if (answer === correctAnswer)
  {
    isAnswerCorrect="Yes"
    score=score+2
  } else
  {
    isAnswerCorrect="No"
    score=score-1
  }

  return isAnswerCorrect
}


//list of questions

const questionList = 
[{
  question: "Does the corrector go before the foundation? ",
  answer: true
},
{
  question:"Can bronzer be shimmery? ",
  answer: true
},
{
  question:"Can contour be shimmery? ",
  answer: false
},
{
  question:"Are all high points of face highlighted? ",
  answer: true
},
{
  question:"Tapered false eyelashes look worst on almond shaped eyes? ",
  answer: false
},
{
  question:"Is lavendar corrector used to counteract dullness on the face? ",
  answer: true
},
{
  question:"Can we test for right foundation shade by swatching on hand? ",
  answer: false
},
{
  question:"Does loose glitter eyeshadow require glue for application on the eye? ",
  answer: true
},
{
  question:"Fair skin tones can replace orange corrector with peach corrector to tackle pigmentation on skin? ",
  answer: true
},
{
  question:"Should makeup be removed using clear water? ",
  answer: false
},
{
  question:"Spotlight eyeshadow look involves cutting the crease from the corner of the eye? ",
  answer: false
},
{
  question:"Is bronzer used to give dimension to the face? ",
  answer: false
},
{
  question:"Can pouting while contouring cheekbones worsen the look? ",
  answer: true
},
{
  question:"Is facial oil used as a moisturizer and primer before doing makeup? ",
  answer: true
},
{
  question:"Is setting powder applied to prevent creasing of makeup? ",
  answer: true
}
]

for(i=0;i<questionList.length;i++)
{
  var isCorrect=gameplay(questionList[i].question,questionList[i].answer)
  console.log(chalk.blue("Were you right? "), chalk.red(isCorrect))
  console.log(chalk.blue("Your score is: "),chalk.cyan(score)) 
}
console.log("-------------------------")
const playerScoreboardList = [
  {
    "name":"Rosh", 
    "score":"20"
  },
  {
    "name":"Rohit", 
    "score":"10"
  },
  {
    "name":"Abhilasha", 
    "score":"0"
  }
]
var flag=0
console.log(chalk.cyan(`This is the current scoreboard:`))
for (i=0;i<playerScoreboardList.length;i++) {
  console.log(playerScoreboardList[i].name+": "+playerScoreboardList[i].score)
  if (score>playerScoreboardList[i].score)
  {
    flag=1
  }
}
if(flag===1)
{
  console.log(chalk.green("\nYou have beaten a high score, please send a screenshot to me so that I can update your score in the scoreboard!"))
} else
{
  console.log(chalk.red("\nYou did not beat a highscore. Please try again!"))
}