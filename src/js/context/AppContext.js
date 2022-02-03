import React, {useState} from 'react';
import {LetterStatus} from "../utilsAndSettings/letterStatus";

export const AppContext = React.createContext(null);

export function AppContextProvider(props) {

    const [word, setWord] = useState('kalka');
    const keyboards = {
        pl_keyboard: 'aąbcćdeęfghijlłkmnńoóprqstuwyxzźż'.split(''),
        symbols: ['⛳', '⛹', '⚽', '✌', '⏰', '🌈', '🍀', '🍖', '🍔', '🍐', '🍑', '🍒', '🍦', '🍰', '🎅', '🏓', '🏹']
    };
    const gameSettings = {
        dailyGame: {
            wordLength: 5,
            guessNumber: 6
        },
        noWordsGame: {
            dataSetSize: 12,
            wordLength: 5,
            guessNumber: 4

        },
        codeBreaker: {
            wordLength: 4,
            guessNumber: 5
        }
    };
    const [guesses, setGuesses] = useState({
        currentTry: [],
        previousGuesses: [],
        wordLength: 5,
        guesses: 6,
        currentGuess: 0,
        currentLetter: 0,
        currentWord: ''
    });

    const addLetter = (letter) => {
        console.log(letter);
    }

    const removeLetter = () => {
        console.log('remove letter');
    }

    const makeGuess = () => {
        console.log('make guess')
    }


    return (<AppContext.Provider
        value={{word, guesses, keyboards, gameSettings, addLetter, removeLetter, makeGuess}}>
        {props.children}
    </AppContext.Provider>);
}