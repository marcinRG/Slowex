import React, {useContext} from 'react';
import './Keyboard.scss';
import {LetterStatus} from "../utilsAndSettings/letterStatus";
import {KeyboardKey} from "./KeyboardKey";
import {AppContext} from "../context/AppContext";

export function Keyboard(props) {

    const appContext = useContext(AppContext);
    const {keyboard} = props;

    const removeLetter = () => {
        appContext.removeLetter();
    }

    const makeGuess = () => {
        appContext.makeGuess();
    }

    return (
        <div className="keyboard-wrapper">
            <div className="keyboard-keys">
                {(Object.values(keyboard)).map((value, index) => (
                    <KeyboardKey key={index} letter={value.letter} status={value.status} action={appContext.addLetter}/>
                ))}

            </div>
            <div className="keyboard-keys">
                <button className="key function" key="enter" onClick={makeGuess}>Enter</button>
                <button className="key function" key="cancel" onClick={removeLetter}>Cancel</button>
            </div>

        </div>
    );
}