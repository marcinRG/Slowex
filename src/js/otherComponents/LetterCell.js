import React, {useState} from "react";


export function LetterCell(props) {
    const {letter} = props;
    return (
        <React.Fragment>
                <div className="letter-cell">{getLetter(letter)}</div>
        </React.Fragment>
    );
}

function getLetter(letter) {
    if (letter) return letter;
    return "";
}