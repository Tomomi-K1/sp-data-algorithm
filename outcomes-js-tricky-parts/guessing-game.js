function guessingGame() {
    let num = Math.floor(Math.random()*100);
    let numOfGuess =0;
    let isOver = false;
    return function(guess){
        if(isOver){
            return `The game is over, you already won!`;
        };
        numOfGuess++;
        if(Number(guess) === num){
            isOver = true;
            const guess = numOfGuess>1? 'guesses.': 'guess.';
            return `You win! You found ${num} in ${numOfGuess} ${guess}`;
        } else if(Number(guess)> num){ 
            
            return `${guess} is too high!`;
        } else {
            return `${guess} is too low!`;
        };
    };
}

module.exports = { guessingGame };
