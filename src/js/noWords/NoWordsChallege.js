import React, {useContext, useState, useEffect} from "react";
import {AppContext} from "../context/AppContext";
import {getRandomInt} from "../utilsAndSettings/getRandomInt";
import {Keyboard} from "../otherComponents/Keyboard";
import {createNewKeysObject} from "../utilsAndSettings/createNewKeysObject";
import {createGuessTable} from "../utilsAndSettings/createGuessTable";
import {initializeGameState} from "../utilsAndSettings/initializeGameState";

export function NoWordsChallenge() {
    const appContext = useContext(AppContext);
    const symbols = appContext.keyboards.symbols;
    const settings = appContext.gameSettings.noWordsGame;
    const [keys, setKeys] = useState({});
    const [word, setWord] = useState([]);
    const [gameState, setGameState] = useState({});

    useEffect(() => {
        const symbolsInit = prepareDataSet(symbols, settings.dataSetSize);
        setKeys(symbolsInit);
        setWord(prepareNewWord(symbolsInit, settings.wordLength));
        setGameState(initializeGameState(settings.wordLength, settings.guessNumber));

    }, []);


    return (

        <div className="no-words-challenge-box">
            <h2 className="section-title">Menu &gt; No words challenge</h2>
            <div className="all-guesses">
                {(gameState && gameState.guesses) && createGuessTable(gameState.guesses)}
            </div>

            {keys && <Keyboard keyboard={keys}></Keyboard>}
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

function prepareNewWord(letterObject, size) {
    let output = [];
    let random;
    let letterArray = Object.keys(letterObject);
    for (let i = 0; i < size; i++) {
        random = getRandomInt(letterArray.length);
        output.push(letterArray[random]);
    }
    return output;
}

function prepareDataSet(symbolsArray, newSize) {
    let newSymbols = getUniqueSetOfKeys(symbolsArray, newSize);
    return createNewKeysObject(newSymbols);
}