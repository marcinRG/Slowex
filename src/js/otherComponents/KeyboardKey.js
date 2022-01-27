import React from 'react';
import {LetterStatus} from "../utilsAndSettings/letterStatus";

export function KeyboardKey(props) {
    const {letter, status, action} = props;
    const doSomething = () => {
        if (action) {
            action(letter);
        }
    }
     return (<button className={getKeyClass(status)} onClick={doSomething}>
         {letter}
     </button>);
}

function getKeyClass(keyStatus) {
    let keyClass = 'key';
    switch (keyStatus) {

        case LetterStatus.not_found: {
            return keyClass + ' ' + 'not_found';
        }
        case LetterStatus.found_exact: {
            return keyClass + ' ' +  'found';
        }
        case LetterStatus.found_misplaced: {
            return keyClass + ' ' + 'misplaced';
        }
        case LetterStatus.not_used: {
            return keyClass;
        }
    }
}