let computerScore = 0, playerScore = 0

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

const playRound = (playerSelection, computerSelection) => {
    let player = playerSelection.toLowerCase()
    if(player === computerSelection) {
        return 'Draw'
    }
    let result;
    switch(player){
        case 'rock':
            if(computerSelection === 'paper'){
                result = 'You Lose! Paper beats Rock'
                computerScore++
            } else {
                result = 'You Win! Rock beats Scissors'
                playerScore++
            }
            break;
        case 'paper':
            if(computerSelection === 'scissors'){
                result = 'You Lose! Scissors beats Paper'
                computerScore++
            } else {
                result = 'You Win! Paper beats Rock'
                playerScore++
            }
            break;
        case 'scissors':
            if(computerSelection === 'rock') {
                result = 'You Lose! Rock beats Scissors'
                computerScore++
            } else {
                result = 'You Win! Scissors beats Paper'
                playerScore++
            }
            break;
    }

    return result
}

const game = () => {
    for(let i = 0; i < 5 ; i++) {
        let playerMove = prompt('Rock, Paper, Scissors?')
        console.log(playRound(playerMove, getComputerChoice()))
    }
    return playerScore > computerScore ? `You Win! ${playerScore} : ${computerScore}` :` You Lose! ${playerScore} : ${computerScore}`
}

console.log(game());