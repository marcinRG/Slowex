import React, {useContext, useState} from "react";
import {AppContext} from "../context/AppContext";
import {getRandomInt} from "../utilsAndSettings/getRandomInt";
import {Keyboard} from "../otherComponents/Keyboard";
import {createNewKeysObject} from "../utilsAndSettings/createNewKeysObject";

export function NoWordsChallenge() {
    const appContext = useContext(AppContext);
    const symbols = appContext.keyboards.symbols;
    const wordLength = 5;
    const guessNumber = 4;

    const [keys, setKeys] = useState(prepareDataSet(symbols, 8));

    return (

        <div className="daily-challenge-box">
            <h2 className="section-title">Menu &gt; No words challenge</h2>
            <div className="all-guesses">
                {"content"}
            </div>

            <Keyboard keyboard={keys}></Keyboard>
        </div>);
}


function getUniqueSetOfKeys(keysArray, newSize) {
    let arrayCopy = [];
    let outputSymbols = [];
    let random;

    if (keysArray && keysArray.length > 0) {
        arrayCopy = [...keysArray];

        while (outputSymbols.length < newSize) {
            random = getRandomInt(arrayCopy.length);
            outputSymbols.push(arrayCopy[random]);
            arrayCopy.splice(random, 1);
        }
    }

    return outputSymbols;
}


function prepareDataSet(symbolsArray, newSize) {
    let newSymbols = getUniqueSetOfKeys(symbolsArray,newSize);
    return createNewKeysObject(newSymbols);
}