import React, {useContext, useEffect, useState} from "react";
import './CustomChallenge.scss';
import {AppContext} from "../context/AppContext";

export function CustomChallenge() {
    const appContext = useContext(AppContext);
    const settings = appContext.gameSettings.customGame;
    const [guesses, setGuesses] = useState(settings.defaultGuesses);
    const [wordLength, setWordLength] = useState(settings.defaultWord);
    const [wordsCount, setWordsCount] = useState();

    useEffect(() => {
        let len = (appContext.localDB[settings.defaultGuesses + '']).length;
        setWordsCount(len - 1);
    }, []);

    const changeWordLength = (event) => {
        setWordLength(event.target.value);
    };

    const changeGuessNumber = (event) => {
        setGuesses(event.target.value);
    }

    return (
        <div className="custom-challenge-form">
            <h2 className="section-title">Menu &gt; Stwórz własną zagadkę</h2>
            <form className="custom-game-form">
                <label className="form-label">ilość liter w słowie</label>
                <div className="form-row"><input className="form-input" type="number" min={settings.minWord}
                                                 max={settings.maxWord} value={wordLength}
                                                 onChange={changeWordLength}/></div>
                <label className="form-label">{`Wybierz słowo (liczba od 1 do ${wordsCount})`}</label>
                <div className="form-row random">
                    <input className="form-input" type="text"/>
                    <button className="form-button random">losuj słowo</button>
                </div>
                <label className="form-label">ilość prób</label>
                <div className="form-row">
                    <input className="form-input" type="number" min={settings.minGuesses} max={settings.maxGuesses}
                           value={guesses} onChange={changeGuessNumber}/>
                </div>
                <div className="form-row form-btn">
                    <button className="form-button new-game">Rozpocznij grę</button>
                </div>

            </form>
        </div>);
}