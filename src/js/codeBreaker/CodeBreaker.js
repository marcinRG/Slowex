import React, {useContext, useEffect, useState} from 'react';
import {Keyboard} from "../otherComponents/Keyboard";
import {AppContext} from "../context/AppContext";
import {initializeGameState} from "../utilsAndSettings/initializeGameState";
import {createNewKeysObject} from "../utilsAndSettings/createNewKeysObject";
import {createGuessTable} from "../utilsAndSettings/createGuessTable";

export function CodeBreaker(props) {

    const appContext = useContext(AppContext);
    const settings = appContext.gameSettings.codeBreaker;
    const [gameState, setGameState] = useState({});
    const [keys, setKeys] = useState({});

    const selectLetter = (letter) => {
        console.log(letter);
    }

    const pushCancel = () => {
    };

    const pushEnter = () => {
    }

    useEffect(() => {
        setKeys(initializeKeyboardState());
        setGameState(initializeGameState(settings.wordLength, settings.guessNumber));
    }, []);


    return (
        <div className="no-words-challenge-box">
            <h2 className="section-title">Menu &gt; Code breaker</h2>
            <div className="all-guesses">
                {(gameState && gameState.guesses) && createGuessTable(gameState.guesses)}
            </div>

            {keys && <Keyboard keyboard={keys} letterAction={selectLetter} cancelAction={pushCancel}
                               guessAction={pushEnter}></Keyboard>}
        </div>
    )
}

function initializeKeyboardState() {
    let letters = '0123456789';
    return createNewKeysObject(letters.split(''));
}