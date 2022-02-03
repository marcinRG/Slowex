import {LetterStatus} from "./letterStatus";

export function initializeGameState(wordLength, guessNumber) {
    const currentLetter = 0;
    const currentGuess = 0;
    const word = '';
    let guesses = [];
    let guessesRow = [];
    for (let i = 0; i < guessNumber; i++) {
        for (let k = 0; k < wordLength; k++) {
            guessesRow.push({
                letter: '',
                status: LetterStatus.not_used
            });
        }
        guesses.push(guessesRow);
        guessesRow = [];
    }
    return {
        currentLetter,
        currentGuess,
        word,
        guesses
    }
}