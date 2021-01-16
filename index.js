var readLineSync=require('readline-sync');
const chalk=require('chalk');

var userName=readLineSync.question(chalk.yellow('MAY I KNOW YOUR NAME ? '))
console.log(chalk.green("-----------------"))
console.log(chalk.blue.bold(`Welcome ${userName} to the SYNONYMS QUIZ`))
console.log(chalk.grey("----------------"))

var score=0

var questions=[{
  question:`Select the option that is most similar in meaning to "advice"
 1.Counsil
 2.Counsel
 3.Proposal`,
 answer:"2"},
{question:`Select the option that is most similar in meaning to "miserable"
 1.Object
 2.Abstract
 3.Abject`,
 answer:"3"},
 {
  question:`Select the option that is most similar in meaning to "quote"
  1.Sight
  2.Sue
  3.Cite`,
  answer:"3"
},
 {
  question:`Select the option that is most similar in meaning to "unlawful"
  1.Illicit
  2.Elicit
  3.Illegitimate`,
  answer:"1"
},
 {
  question:`Select the option that is most similar in meaning to "haughty"
  1.Imperial
  2.Imperious
  3.Adamant`,
  answer:"2"
},
 {
  question:`Select the option that is most similar in meaning to "watchfulness"
  1.Vigil
  2.Supervision
  3.Custody`,
  answer:"1"
},
 {
  question:`Select the option that is most similar in meaning to "attachment"
  1.Affinity
  2.Influence
  3.Apendage`,
  answer:"1"
},
 {
  question:`Select the option that is most similar in meaning to "bequest"
  1.Matrimony
  2.Heritage
  3.Guerdon`,
  answer:"2"
},
 {
  question:`Select the option that is most similar in meaning to "gullible"
  1.credible
  2.Believable
  3.Credulous`,
  answer:"3"
},
 {
  question:`Select the option that is most similar in meaning to "bravery"
  1.Arrogant
  2.Fortitude
  3.Nepotism`,
  answer:"2"
}]

function play(question,answer){
  var userAnswer=readLineSync.question(question)
  if(userAnswer===answer){
    console.log(chalk.green('Yay !!! Correct Answer'))
    score++
  }
  else{
    console.log(chalk.red('Oopss !!! Wrong Answer'))
  }
  console.log("You scored "+chalk.green(score))
  console.log(chalk.yellow("-----------------------"))
}

for(let i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer)
}
console.log("Your final score is : ",score)

const scores=[6,7]
let result;
function check(a){
  for(let i=0;i<a.length;i++){
    if(score>a[i]){
      result=chalk.green("Congratulations !!! You have got the highest scores")
      }
    else{
        result=chalk.green("You couldn't beat the High Score")
    }
    return result
  }
  
}
console.log(check(scores))
console.log(".....................")

console.log(chalk.grey(`SCORE BOARD:
 Tushar: 7
 Shikha: 6`))
 console.log(chalk.grey("Send me your score in screenshot and i will update the Score Board"))