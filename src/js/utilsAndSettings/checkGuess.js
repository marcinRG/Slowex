import {LetterStatus} from "./letterStatus";

export const getArrayFromWord = (word, letterState) => {
    let letterArray = word.toUpperCase().split('');
    return letterArray.map((elem) => {
        return {
            letter: elem,
            status: letterState
        }
    });
}

export const checkGuess = (word, wordArray) => {

    let results = [];
    const letterArray = [...wordArray];

    if (Array.isArray(letterArray) && letterArray.length > 0) {

        const origin = getArrayFromWord(word, LetterStatus.not_used);
        results = letterArray.map((value, index) => {
            let result = {letter: value.letter, status: LetterStatus.not_found};
            for (let i = 0; i < origin.length; i++) {
                if ((origin[i].status !== LetterStatus.found_exact)
                    && (origin[i].position !== LetterStatus.found_misplaced)) {
                    if (value.letter === origin[i].letter) {
                        let status = LetterStatus.not_found;
                        if (index === i) {
                            status = LetterStatus.found_exact;
                        }
                        if (index !== i) {
                            status = LetterStatus.found_misplaced;
                        }
                        origin[i] = {...origin[i], status};
                        result = {...result, status};
                        break;
                    }
                }
            }
            return result;
        });

    }
    return results;
}
