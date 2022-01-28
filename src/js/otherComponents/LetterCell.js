import React, {useState} from "react";
import {getKeyLetterClass} from "../utilsAndSettings/getKeyLetterClass";


export function LetterCell(props) {
    const {letter, status} = props;
    return (
        <React.Fragment>
            <div className={getKeyLetterClass(status, "letter-cell")}>{getLetter(letter)}</div>
        </React.Fragment>
    );
}

function getLetter(letter) {
    if (letter) return letter;
    return "";
}