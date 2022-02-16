outcomeEl = document.getElementById('outcome')
botPoints = 0
playerPoints = 0

function play(playerChoice) {
    choices = ['rock', 'paper', 'scissors'];
    botChoice = choices[Math.floor(Math.random()*choices.length)]

    if (playerChoice == botChoice) {
        outcomeEl.textContent = "Its a draw"
    }
    else if (playerChoice == "rock" && botChoice == "scissors") {
        playerPoints += 1
        outcomeEl.textContent = "You won"
    }
    else if (playerChoice == "paper" && botChoice == "rock") {
        playerPoints += 1
        outcomeEl.textContent = "You won"
    }
    else if (playerChoice == "scissors" && botChoice == "paper") {
        playerPoints += 1
        outcomeEl.textContent = "You won"
    }
    else {
        botPoints += 1
        outcomeEl.textContent = "You lost"
    }
}