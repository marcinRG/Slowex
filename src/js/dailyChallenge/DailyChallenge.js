import React, {useContext, useEffect} from "react";
import {LetterCell} from "../otherComponents/LetterCell";
import "./DailyChallenge.scss";
import {Keyboard} from "../otherComponents/Keyboard";
import {AppContext} from "../context/AppContext";
import {Guess} from "../otherComponents/Guess";

export function DailyChallenge() {

    const appContext = useContext(AppContext);

    console.log(appContext.word);
    console.log(appContext.guesses);

    const wordLength = 5;
    const guessNumber = 6;

    useEffect(() => {
        window.addEventListener('keydown', e => {
            e.stopPropagation();
            handleKeyPresses(e.key);
        });
    }, []);


    return (
        <div className="daily-challenge-box">
            <h2 className="section-title">Menu &gt; Dzienne wyzwanie</h2>

            <div className="all-guesses">

                <Guess></Guess>

                <div className="guess-row">
                    <div className="letter-cell">A</div>
                    <div className="letter-cell">B</div>
                    <div className="letter-cell">C</div>
                    <div className="letter-cell">D</div>
                    <div className="letter-cell">E</div>
                </div>

                <div className="guess-row">
                    <div className="letter-cell">A</div>
                    <div className="letter-cell">B</div>
                    <div className="letter-cell">C</div>
                    <div className="letter-cell">D</div>
                    <div className="letter-cell">E</div>
                </div>


                <div className="guess-row">
                    <div className="letter-cell">A</div>
                    <div className="letter-cell">B</div>
                    <div className="letter-cell">C</div>
                    <div className="letter-cell">D</div>
                    <div className="letter-cell">E</div>
                </div>

                <div className="guess-row">
                    <div className="letter-cell">⛳</div>
                    <div className="letter-cell">🍀</div>
                    <div className="letter-cell">🍦</div>
                    <div className="letter-cell">🏓</div>
                    <div className="letter-cell">🍒</div>
                </div>

                <div className="guess-row">
                    <div className="letter-cell">A</div>
                    <div className="letter-cell">B</div>
                    <div className="letter-cell">C</div>
                    <div className="letter-cell">D</div>
                    <div className="letter-cell">E</div>
                </div>


            </div>

            {/*{createGuessTable(wordLength, guessNumber)}*/}
            <Keyboard></Keyboard>
        </div>);
}


function createGuessTable(wordLength, guessNumber) {
    let rows = [];
    for (let i = 0; i < guessNumber; i++) {
        rows.push(
            <div className="guess-row" key={i}>
                {createRowCells(wordLength, i)}
            </div>
        );
    }
    return rows;
}

function createRowCells(guessNumber, row) {
    let cells = [];
    for (let i = 0; i < guessNumber; i++) {
        cells.push(
            <LetterCell key={"Row" + row + "Column" + i}></LetterCell>
        );
    }
    return cells;
}

function handleKeyPresses(key) {
    const letters = 'aąbcćdeęfghijlkmnoóprqstuwyxzźżAĄBCĆDEĘFGHIJLKMNOÓPRQSTUWYXZŹŻ';
    if (letters.indexOf(key) >=0) {
      console.log('key:',key);
    }
    if (key === 'Backspace') {
        console.log('back');
    }
    if (key === 'Enter') {
        console.log('enter');
    }
}