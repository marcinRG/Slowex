import React, {useState} from 'react';
import {LetterStatus} from "../utilsAndSettings/letterStatus";

export const AppContext = React.createContext(null);

export function AppContextProvider(props) {

    const [word, setWord] = useState('kalka');
    const keyboards = {
        pl_keyboard: [
            'a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó',
            'p', 'r', 's', 't', 'q','u', 'w', 'x', 'y', 'z'],
        symbols: ['⛳', '⛹', '⚽', '✌', '⏰', '🌈', '🍀', '🍖', '🍔', '🍐', '🍑', '🍒', '🍦', '🍰', '🎅', '🏓', '🏹']
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
        value={{word, guesses, keyboards, addLetter, removeLetter, makeGuess}}>
        {props.children}
    </AppContext.Provider>);
}