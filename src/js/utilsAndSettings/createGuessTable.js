import {LetterCell} from "../otherComponents/LetterCell";
import React from "react";

export function createGuessTable(guesses) {
    return guesses.map((guessRow, i) => {
        return (<div className="guess-row" key={i}>
            {createRowCells(guessRow, i)}
        </div>)
    });
}

export function createRowCells(guessRow, rowNumber) {
    return guessRow.map((cell, i) => {
        return <LetterCell key={"Row" + rowNumber + "Column" + i} letter={cell.letter}
                           status={cell.status}></LetterCell>
    });
}