const prompt = require("prompt-sync")();

let bank_account = []

let transaction_history = []

function account_balance(user_bal) {
        bank_account = user_bal
        transaction_history = user_bal
        return bank_account[0]
        }
        
function withdraw_money(withdraw) {
        remaining_bal = bank_account[0] - withdraw
        bank_account = remaining_bal
        transaction_history = remaining_bal
        return remaining_bal 
        }

let account_bal = 0
let withdraw_amount = 0
let withdraw_fee = 100
let bal_after = 0
let rem_bal = 0



console.log("Welcome to Simulation Bank!")
console.log("________________________________")
console.log("You are required to make a selection: ")
account_bal = Number(prompt("Enter your account balance: $"))
console.log("Your current balance is: $"  + account_balance(account_bal))


let start = 10
while (start<= 10) {

        account_bal = Number(prompt("Enter your account balance: $"))        
        if (withdraw_amount > 20000) {
                console.log("Failed! Enter an amount lesser than $20,000")
                 withdraw_amount = Number(prompt("Enter withdrawal amount multiples of $500 or $1000: $"))
                }
        else{
                if (account_bal + 100 > withdraw_amount) {
                        bal_after = account_bal - withdraw_amount
                        rem_bal = bal_after - withdraw_amount
                        console.log("Transaction successful!")
                        console.log("Withdrawal fee: $" + withdraw_fee)
                        console.log("Remaining Balance: $" + rem_bal)
                    }
                else{
                        console.log("You entered a withdrawal amount that is higher than your balance")
                }
           }

        let sentinel = Number(prompt("Do you want to make another withdrawal ? 0 for yes/ any number for no: "))
        if (sentinel == 0) {
        }         
console.log("Your transaction history is "+ transaction_history)
    
console.log("Thank you! Have a nice day!")

}