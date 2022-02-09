import React, {useContext, useEffect, useState} from "react";
import "./DailyChallenge.scss";
import {Keyboard} from "../otherComponents/Keyboard";
import {AppContext} from "../context/AppContext";
import {createNewKeysObject} from "../utilsAndSettings/createNewKeysObject";
import {initializeGameState} from "../utilsAndSettings/initializeGameState";
import {createGuessTable} from "../utilsAndSettings/createGuessTable";
import {LetterStatus} from "../utilsAndSettings/letterStatus";
import {checkGuess, someFunction} from "../utilsAndSettings/checkGuess";

export function DailyChallenge() {

    const appContext = useContext(AppContext);
    const settings = appContext.gameSettings.dailyGame;
    const [gameState, setGameState] = useState({});
    const [keys, setKeys] = useState({});

    const selectLetter = (letter) => {
        let newState = {...gameState};
        let currentRow = [];
        if (newState.currentLetter < settings.wordLength) {
            currentRow = newState.guesses[newState.currentGuess];
            currentRow[newState.currentLetter] = {
                letter: letter.toUpperCase(),
                status: LetterStatus.not_used
            }
            newState.word = newState.word + letter;
            newState.guesses[newState.currentGuess] = currentRow;
            newState.currentLetter = newState.currentLetter + 1;
        }
        setGameState(newState);
    };

    const pushCancel = () => {
        let newState = {...gameState};
        let currentRow = [];
        if (newState.currentLetter > 0) {
            currentRow = newState.guesses[newState.currentGuess];
            currentRow[newState.currentLetter - 1] = {
                letter: '',
                status: LetterStatus.not_used
            }
            newState.word = newState.word.substring(0, newState.word.length - 1);
            newState.guesses[newState.currentGuess] = currentRow;
            newState.currentLetter = newState.currentLetter - 1;
        }
        setGameState(newState);
    };

    const pushEnter = () => {
        let newState = {...gameState};
        if (newState.currentGuess < settings.guessNumber) {
            if (newState.currentLetter >= settings.wordLength) {
                if (appContext.findWord(newState.word) >= 0) {
                    newState.guesses[newState.currentGuess] = checkGuess('ksero', newState.guesses[newState.currentGuess]);
                    newState.currentLetter = 0;
                    newState.word = '';
                    newState.currentGuess = newState.currentGuess + 1;
                } else {
                    console.log(newState.word);
                    //todo - dodać komunikat
                    console.log('brak takiego słowa w słowniku');
                }
            } else {
                //todo - dodać komunikat
                console.log('za krótkie');
            }
        }
        if (newState.currentGuess === settings.guessNumber) {
            //todo - dodać komunikat
            console.log('koniec');
        }
        setGameState(newState);
    }

    useEffect(() => {
        setKeys(initializeKeyboardState());
        setGameState(initializeGameState(settings.wordLength, settings.guessNumber));
        //todo - dodać nasłuchiwanie eventów z klawiatury, usuwanie podczas demontowania
        // window.addEventListener('keydown', e => {
        //     e.stopPropagation();
        //     handleKeyPresses(e.key);
        // });
    }, []);


    return (
        <div className="daily-challenge-box">
            <h2 className="section-title">Menu &gt; Dzienne wyzwanie</h2>

            <div className="all-guesses">
                {(gameState && gameState.guesses) && createGuessTable(gameState.guesses)}
            </div>
            {keys && <Keyboard keyboard={keys} letterAction={selectLetter} cancelAction={pushCancel}
                               guessAction={pushEnter}></Keyboard>}
        </div>);
}


function initializeKeyboardState() {
    let letters = 'aąbcćdeęfghijlłkmnńoóprqstuwyxzźż';
    return createNewKeysObject(letters.split(''));
}

function handleKeyPresses(key) {
    const letters = 'aąbcćdeęfghijlłkmnńoóprqstuwyxzźżAĄBCĆDEĘFGHIJLŁKMNOÓPRQSTUWYXZŹŻ';
    if (letters.indexOf(key) >= 0) {
        console.log('key:', key);
    }
    if (key === 'Backspace') {
        console.log('back');
    }
    if (key === 'Enter') {
        console.log('enter');
    }
}