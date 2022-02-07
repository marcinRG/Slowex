import React, {useState, useEffect} from 'react';
import localForage from "localforage";
import {LetterStatus} from "../utilsAndSettings/letterStatus";
import {storageConfig} from "../utilsAndSettings/localForageSettings";

export const AppContext = React.createContext(null);

export function AppContextProvider(props) {
    const [localDB, setLocalDB] = useState({});
    const [word, setWord] = useState('kalka');
    const [dailyWord, setDailyWord] = useState('ksero');
    const keyboards = {
        pl_keyboard: 'aąbcćdeęfghijlłkmnńoóprqstuwyxzźż'.split(''),
        symbols: ['⛳', '⛹', '⚽', '✌', '⏰', '🌈', '🍀', '🍖', '🍔', '🍐', '🍑', '🍒', '🍦', '🍰', '🎅', '🏓', '🏹'],
        numbers: '0123456789'.split('')
    };
    const [dictionary, setDictionary] = useState({});

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
        },
        customGame: {
            maxWord: 12,
            minWord: 4,
            defaultWord: 8,
            minGuesses: 2,
            maxGuesses: 15,
            defaultGuesses: 5,
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

    const getDictionaryDataFromServer = () => {
        return fetch('/5_literowe.txt').then((response) => {
            return response.text();
        }).then((data) => {
            const values = data.split(/\r\n|\n/);
            return values;
        });
    }

    const config = () => {
        return new Promise((resolve, reject) => {
            try {
                localForage.config(storageConfig);
                resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    }

    const initializeDictionary = () => {
        getDictionaryDataFromServer().then((data) => {
            return localForage.setItem('5', data);
        }).then(() => {
            return localForage.getItem('5');
        }).then((data) => {
            const newState = {...localDB, '5': data, localDB: true};
            setLocalDB(newState);
        });
    }

    useEffect(() => {
        config().then(() => {
            return localForage.getItem('5');
        }).then((data) => {
            let values = data;
            if (!values) {
                initializeDictionary();
            } else {
                const newState = {...localDB, '5': data, localDB: true};
                setLocalDB(newState);
            }
        });
    }, []);

    const findWord = (word) => {
        if (localDB.localDB) {
            return localDB['5'].indexOf(word);
            ;
        }
        return -1;
    }

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
        value={{localDB, word, guesses, keyboards, gameSettings, addLetter, removeLetter, makeGuess, findWord}}>
        {props.children}
    </AppContext.Provider>);
}