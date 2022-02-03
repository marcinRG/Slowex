import React, {useContext, useEffect, useState} from "react";
import {LetterCell} from "../otherComponents/LetterCell";
import "./DailyChallenge.scss";
import {Keyboard} from "../otherComponents/Keyboard";
import {AppContext} from "../context/AppContext";
import {createNewKeysObject} from "../utilsAndSettings/createNewKeysObject";
import {initializeGameState} from "../utilsAndSettings/initializeGameState";
import {createGuessTable} from "../utilsAndSettings/createGuessTable";

export function DailyChallenge() {

    const appContext = useContext(AppContext);
    const settings = appContext.gameSettings.dailyGame;

    console.log(settings.guessNumber);
    console.log(settings.wordLength);


    const [gameState, setGameState] = useState({});
    const [keys, setKeys] = useState({});


    useEffect(() => {

        console.log('init');
        setKeys(initializeKeyboardState());
        setGameState(initializeGameState(settings.wordLength, settings.guessNumber));
        console.log('everything is set up')

        // window.addEventListener('keydown', e => {
        //     e.stopPropagation();
        //     handleKeyPresses(e.key);
        // });
    },[]);


    return (
        <div className="daily-challenge-box">
            <h2 className="section-title">Menu &gt; Dzienne wyzwanie</h2>

            <div className="all-guesses">
                {(gameState && gameState.guesses) && createGuessTable(gameState.guesses)}
            </div>

            {keys && <Keyboard keyboard={keys}></Keyboard>}
        </div>);
}


function initializeKeyboardState() {
   let letters = 'aąbcćdeęfghijlłkmnńoóprqstuwyxzźż';
   return createNewKeysObject(letters.split(''));
   let obj = {};
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