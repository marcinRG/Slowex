import React from 'react';
import {getKeyLetterClass} from "../utilsAndSettings/getKeyLetterClass";

export function KeyboardKey(props) {
    const {letter, status, action} = props;
    const doSomething = () => {
        if (action) {
            action(letter);
        }
    }
     return (<button className={getKeyLetterClass(status, 'key')} onClick={doSomething}>
         {letter}
     </button>);
}
