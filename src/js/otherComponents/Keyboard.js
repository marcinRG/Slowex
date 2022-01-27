import React, {useContext} from 'react';
import './Keyboard.scss';
import {LetterStatus} from "../utilsAndSettings/letterStatus";
import {KeyboardKey} from "./KeyboardKey";
import {AppContext} from "../context/AppContext";

export function Keyboard() {

    const appContext = useContext(AppContext);
    const pl_keyboard = {
        'a': {
            letter: 'a',
            status: LetterStatus.not_used
        },
        'ą': {
            letter: 'ą',
            status: LetterStatus.found_misplaced
        },
        'b': {
            letter: 'b',
            status: LetterStatus.found_exact
        },
        'c': {
            letter: 'c',
            status: LetterStatus.not_found
        },
        'ć': {
            letter: 'ć',
            status: LetterStatus.not_used
        },
        'd': {
            letter: 'd',
            status: LetterStatus.not_used
        },
        'e': {
            letter: 'e',
            status: LetterStatus.not_used
        },
        'ę': {
            letter: 'ę',
            status: LetterStatus.not_used
        },
        'f': {
            letter: 'f',
            status: LetterStatus.not_used
        },
        'g': {
            letter: 'g',
            status: LetterStatus.not_used
        },
        'h': {
            letter: 'h',
            status: LetterStatus.not_used
        },
        'i': {
            letter: 'i',
            status: LetterStatus.not_used
        },
        'j': {
            letter: 'j',
            status: LetterStatus.not_used
        },
        'k': {
            letter: 'k',
            status: LetterStatus.not_used
        },
        'l': {
            letter: 'l',
            status: LetterStatus.not_used
        },
        'ł': {
            letter: 'ł',
            status: LetterStatus.not_used
        },
        'm': {
            letter: 'm',
            status: LetterStatus.not_used
        },
        'n': {
            letter: 'n',
            status: LetterStatus.not_used
        },
        'ń': {
            letter: 'ń',
            status: LetterStatus.not_used
        },
        'o': {
            letter: 'o',
            status: LetterStatus.not_used
        },
        'ó': {
            letter: 'ó',
            status: LetterStatus.not_used
        },
        'p': {
            letter: 'p',
            status: LetterStatus.not_used
        },
        'r': {
            letter: 'r',
            status: LetterStatus.not_used
        },
        's': {
            letter: 's',
            status: LetterStatus.not_used
        },
        't': {
            letter: 't',
            status: LetterStatus.not_used
        },
        'u': {
            letter: 'u',
            status: LetterStatus.not_used
        },
        'w': {
            letter: 'w',
            status: LetterStatus.not_used
        },
        'x': {
            letter: 'x',
            status: LetterStatus.not_used
        },
        'y': {
            letter: 'y',
            status: LetterStatus.not_used
        },
        'z': {
            letter: 'z',
            status: LetterStatus.not_used
        }
    };

    const removeLetter = () => {
        appContext.removeLetter();
    }

    const makeGuess = () => {
        appContext.makeGuess();
    }

    return (
        <div className="keyboard-wrapper">
            <div className="keyboard-keys">
                {/*{keyboards.symbols.map((value, index) => (<div key={index} className="key">{value}</div>))}*/}
                {(Object.values(pl_keyboard)).map((value, index) => (
                    <KeyboardKey key={index} letter={value.letter} status={value.status} action={appContext.addLetter}/>
                ))}
                <button className="key" key="enter" onClick={makeGuess}>Enter</button>
                <button className="key" key="cancel" onClick={removeLetter}>Cancel</button>
            </div>

        </div>
    );
}