import React, {useContext, useEffect, useState} from "react";
import {LetterCell} from "../otherComponents/LetterCell";
import "./DailyChallenge.scss";
import {Keyboard} from "../otherComponents/Keyboard";
import {AppContext} from "../context/AppContext";
import {LetterStatus} from "../utilsAndSettings/letterStatus";
import {createNewKeysObject} from "../utilsAndSettings/createNewKeysObject";

export function DailyChallenge() {

    const appContext = useContext(AppContext);
    const wordLength = 5;
    const guessNumber = 6;


    const [gameState, setGameState] = useState({});
    const [keys, setKeys] = useState({});


    useEffect(() => {

        console.log('init');
        setKeys(initializeKeyboardState());
        setGameState(initializeGameState(wordLength, guessNumber));
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


function createGuessTable(guesses) {
    return guesses.map((guessRow, i) => {
        return (<div className="guess-row" key={i}>
            {createRowCells(guessRow, i)}
            </div>)
    });
}

function createRowCells(guessRow, rowNumber) {
    return guessRow.map((cell, i) => {
        return <LetterCell key={"Row" + rowNumber + "Column" + i} letter={cell.letter}
                           status={cell.status}></LetterCell>
    });
}

function initializeGameState(wordLength, guessNumber) {
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