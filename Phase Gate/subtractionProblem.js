const prompt = require("prompt-sync")();

let count = 1
let counter = 0

while (count != 10) {
let minuend = Math.floor(Math.random() * 100)

let subtrahend = Math.floor(Math.random() * 100)

let temp = 0
let result = 0

if (minuend > subtrahend) {
        minuend = subtrahend
        }
else{
       temp = minuend
       minuend = subtrahend
       subtrahend = temp
        }

result = minuend - subtrahend
console.log(result)
console.log("Problem  " + count + " is: What is the answer to: " + minuend + " - " + subtrahend)
let userAnswer = Number(prompt('enter the number: '))

if (result == userAnswer) {
console.log("You got the right answer")
counter++
console.log("Counter is: " + counter)
}

else{
console.log("Wrong answer! you have one trial")
console.log("Problem  " + count + " is: What is the answer to: " + minuend + " - " + subtrahend)
let userAnswer = Number(prompt('enter the number: '))
}

count++

}

console.log("Your score is " + counter + " out of " + count + " questions")








