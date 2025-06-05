const prompt = require("prompt-sync")();

console.log('Welcome to Justine quiz!')

let sentinel = 1
let randomNumber = Math.floor(Math.random() * 9)

let count = 0
let counter = 0

while (sentinel != -1) {
let firstQuestion = {
                 Question: "What is the capital of Lagos?",
                 A: "Awka",
                 B: "Ikeja",
                 C: "Porth-Harcort",
                 D: "Calabar",
                  };

let secondQuestion = {
                 Question: "What is the name of the best tech school in Yaba ?",
                 A: "Decagon",
                 B: "Andela",
                 C: "Semicolon",
                 D: "ALX",
                  };

let thirdQuestion = {
                 Question: "What is the name of the developer of this app ?",
                 A: "Justine",
                 B: "John",
                 C: "Gift",
                 D: "Tobi",
                  };

let fourthQuestion = {
                 Question: "What is the name of the best footballer in the world ?",
                 A: "C. Ronaldo",
                 B: "Rashford",
                 C: "Mbappe",
                 D: "Messi",
                  };

let fifthQuestion = {
                 Question: "Who is the author of things fall apart book ?",
                 A: "Prof Wole Soyinka",
                 B: "Chimmamanda Adichie",
                 C: "Chinua Achebe",
                 D: "V.P Yemi Osinbanjo",
                  };

let sixthQuestion = {
                 Question: "Which cohort is the best in Semicolon ?",
                 A: "Cohort 22",
                 B: "Cohort 23",
                 C: "Cohort 24",
                 D: "Cohort 25",
                  };

let seventhQuestion = {
                 Question: "Which programming language is Justine favorite?",
                 A: "Python",
                 B: "Java Script",
                 C: "Golang",
                 D: "Java",
                  };

let eightQuestion = {
                 Question: "Which of this concept is used for iterating in programming?",
                 A: "If statement",
                 B: "Loops",
                 C: "Integer",
                 D: "Boolean",
                  };

let ninethQuestion = {
                 Question: "Who is the current president of Nigeria?",
                 A: "Buhari",
                 B: "Goodluck Jonathan",
                 C: "Bola Tinubu",
                 D: "Obasanjo",
                  };

let tenthQuestion = {
                 Question: "Who is the founder of Apple technology company?",
                 A: "Elon Musk",
                 B: "Steve Jobs",
                 C: "Bill Gates",
                 D: "Mark Zuckerberg",
                  };


let array = [firstQuestion, secondQuestion, thirdQuestion, fourthQuestion, fifthQuestion, sixthQuestion, seventhQuestion, eightQuestion, ninethQuestion, tenthQuestion]


let userInput = Number(prompt('Select a random question from (1 - 10) : '))

switch(userInput){
	case 1: console.log(array[0])
	        let userAnswer = prompt('Select the right answer: ')
                 userAnswer = userAnswer.toLowerCase()
                 correctAnswer = "b"

                if (userAnswer == correctAnswer) {
               console.log('Correct answer!')
               count++
                }
                else {
                console.log('Wrong answer')
                counter++
                console.log(array[0])
                let userAnswer = prompt('Select the right answer: ')
                if (userAnswer == correctAnswer) {
               console.log('Correct answer!')
               count++
               }
               else{
               console.log('Wrong answer')
               counter++
               }
        }
                        break;

	case 2: console.log(array[1])          
	          let userAnswer1 = prompt('Select the right answer: ')
                 userAnswer1 = userAnswer1.toLowerCase()
                 correctAnswer = "c"

                if (userAnswer1 == correctAnswer) {
               console.log('Correct answer!')
               count++
                }
                else {
                counter++
                console.log('Wrong answer')
                console.log(array[1])
                let userAnswer1 = prompt('Select the right answer: ')
                if (userAnswer1 == correctAnswer) {
               console.log('Correct answer!')
               count++
               }
               else{
               counter++
               console.log('Wrong answer')
               }
        }
                        break;
                        
	case 3: console.log(array[2])          
	          let userAnswer2 = prompt('Select the right answer: ')
                 userAnswer2 = userAnswer2.toLowerCase()
                 correctAnswer = "a"

                if (userAnswer2 == correctAnswer) {
               console.log('Correct answer!')
               count++
                }
                else {
                counter++
                console.log('Wrong answer')
                console.log(array[2])
                let userAnswer2 = prompt('Select the right answer: ')
                if (userAnswer2 == correctAnswer) {
               console.log('Correct answer!')
               count++
               }
               else{
               counter++
               console.log('Wrong answer')
               }
        }
                        break;

	case 4: console.log(array[3])
	          let userAnswer3 = prompt('Select the right answer: ')
                 userAnswer3 = userAnswer3.toLowerCase()
                 correctAnswer = "d"

                if (userAnswer3 == correctAnswer) {
               console.log('Correct answer!')
               count++
                }
                else {
                counter++
                console.log('Wrong answer')
                console.log(array[3])
                let userAnswer3 = prompt('Select the right answer: ')
                if (userAnswer3 == correctAnswer) {
               console.log('Correct answer!')
               count++
               }
               else{
               counter++
               console.log('Wrong answer')
               }
        }
                        break;

	case 5: console.log(array[4])
	          let userAnswer4 = prompt('Select the right answer: ')
                 userAnswer4 = userAnswer4.toLowerCase()
                 correctAnswer = "c"

                if (userAnswer4 == correctAnswer) {
               console.log('Correct answer!')
               count++
                }
                else {
                counter++
                console.log('Wrong answer')
                console.log(array[4])
                let userAnswer4 = prompt('Select the right answer: ')
                if (userAnswer4 == correctAnswer) {
               console.log('Correct answer!')
               count++
               }
               else{
               counter++
               console.log('Wrong answer')
               }
        }
                        break;

	case 6: console.log(array[5])
	          let userAnswer5 = prompt('Select the right answer: ')
                 userAnswer5 = userAnswer5.toLowerCase()
                 correctAnswer = "d"

                if (userAnswer5 == correctAnswer) {
               console.log('Correct answer!')
               count++
                }
                else {
                counter++
                console.log('Wrong answer')
                console.log(array[5])
                let userAnswer5 = prompt('Select the right answer: ')
                if (userAnswer5 == correctAnswer) {
               console.log('Correct answer!')
               count++
               }
               else{
               counter++
               console.log('Wrong answer')
               }
        }
                        break;

	case 7: console.log(array[6])
	          let userAnswer6 = prompt('Select the right answer: ')
                 userAnswer6 = userAnswer6.toLowerCase()
                 correctAnswer = "d"

                if (userAnswer6 == correctAnswer) {
               console.log('Correct answer!')
               count++
                }
                else {
                counter++
                console.log('Wrong answer')
                console.log(array[6])
                let userAnswer6 = prompt('Select the right answer: ')
                if (userAnswer6 == correctAnswer) {
               console.log('Correct answer!')
               count++
               }
               else{
               counter++
               console.log('Wrong answer')
               }
        }
                        break;

	case 8: console.log(array[7])
	          let userAnswer7 = prompt('Select the right answer: ')
                 userAnswer7 = userAnswer7.toLowerCase()
                 correctAnswer = "d"

                if (userAnswer7 == correctAnswer) {
               console.log('Correct answer!')
               count++
                }
                else {
                counter++
                console.log('Wrong answer')
                console.log(array[7])
                let userAnswer7 = prompt('Select the right answer: ')
                if (userAnswer7 == correctAnswer) {
               console.log('Correct answer!')
               count++
               }
               else{
               counter++
               console.log('Wrong answer')
               }
        }
                        break;

	case 9: console.log(array[8])
	          let userAnswer8 = prompt('Select the right answer: ')
                 userAnswer8 = userAnswer8.toLowerCase()
                 correctAnswer = "c"

                if (userAnswer8 == correctAnswer) {
               console.log('Correct answer!')
               count++
                }
                else {
                counter++
                console.log('Wrong answer')
                console.log(array[8])
                let userAnswer8 = prompt('Select the right answer: ')
                if (userAnswer8 == correctAnswer) {
               console.log('Correct answer!')
               count++
               }
               else{
               counter++
               console.log('Wrong answer')
               }
        }
                        break;

	case 10: console.log(array[9])
	          let userAnswer9 = prompt('Select the right answer: ')
                 userAnswer9 = userAnswer9.toLowerCase()
                 correctAnswer = "b"

                if (userAnswer9 == correctAnswer) {
               console.log('Correct answer!')
               count++
                }
                else {
                counter++
                console.log('Wrong answer')
                console.log(array[9])
                let userAnswer9 = prompt('Select the right answer: ')
                if (userAnswer9 == correctAnswer) {
               console.log('Correct answer!')
               count++
               }
               else{
               counter++
               console.log('Wrong answer')
               }
        }
                        break;

                        };





sentinel = Number(prompt('Enter -1 to quit session or any other number to continue: '))
let answered = count + counter
console.log("The number of win is: ", count, "The number of losses is: ", counter, "The number of questions answered is: ", answered)




} 
