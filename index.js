var readlinesync = require('readline-sync');
var chalk = require('chalk')
console.log("************************************************")
console.log(chalk.magenta("Welcome to **How much do you know me QUIZ**"))
console.log("************************************************")
console.log(chalk.green("Each right answer will give you a + 1 score every time \n\nLets BEGINNNN..!!! \n\nARE YOU EXCITED...??"))
console.log("*************************************************")
console.log(chalk.blue("How to play? Guidlines\n"))
console.log(chalk.blue("Answer with a,b,c,d (use smallcase only)"))
console.log("*************************************************")

 var score = 0;
 function quiz(question,answer){
    var answerByUser = readlinesync.question(question)
    if(answerByUser=== answer){
      console.log("The answer is right")
      score ++;
    }
    else{
      console.log("The answer is wrong")
    }
    console.log("Your score : " + score)
    console.log("--------------------------\n")
 }

 var allQuestions = [  firstQuestion ={
    question : "What is my Nick name ?\na.Rajani\nb.Rajjo\nc.Sona\nd.Chinti\nYour Answer : ",
  
    answer: "b"
  },

  secondQuestion ={
    question :"Which is my education ?\na.BE\nb.B.Tech\nc.BA\nd.BCA\nYour Answer : ",
    answer: "a"
  },


 thirdQuestion ={
    question : "What is the name of my YouTube Channel?\na.Fresher Bee\nb.Nusta Bee\nc.Fresher \nd.yeh nhi pata to kya hi pata hai \nYour Answer : ",
    answer: "a"
  }
,
fourthQuestion ={
    question : "Am I a good friend?\na.NA\nb.Lol \nc.Yes ofcourse\nd.No(i am sad now)\nYour Answer : ",
    answer: "c"
  }
,

 fifthQuestion ={
    question : "What is my favourite street food?\na.Pani-Puri\nb.Dosa\nc.Pav-Bhaji\nd.Misal\nYour Answer : ",
    answer: "d"
  }
  
  ]

 for (i=0; i<allQuestions.length; i++){
   var currentQuestion = allQuestions[i]
   quiz(currentQuestion.question , currentQuestion.answer)

 }


var highscores = [Rajani = {score : "5"},
Shivani ={score : "5"},
Akash = {score : "5"}
]

console.log(chalk.red("Final Score is : " + score))
console.log("\n***************************\n")
 console.log("Below are the people who know me the most :")
 console.log(chalk.yellow("Rajani :" + Rajani.score  ))
 console.log(chalk.yellow("Shivani :" + Shivani.score  ))
 console.log(chalk.yellow("Akash :" + Akash.score  ))
console.log("\n********************************************\n")
if (score ==5){
  console.log(chalk.magenta("I am super proud of you..#LoveLove \n"))
  
  console.log(chalk.cyan("Please send me Screenshot of your score !!!"))}
else{console.log(chalk.green("Don't be sad YOU ARE STILL MY FRIEND..LOL... try one more time and score 5 please!!"))
  }
