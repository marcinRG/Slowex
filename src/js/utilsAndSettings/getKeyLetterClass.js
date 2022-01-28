import {LetterStatus} from "./letterStatus";

export function getKeyLetterClass(keyStatus,className) {
    switch (keyStatus) {

        case LetterStatus.not_found: {
            return className + ' ' + 'not_found';
        }
        case LetterStatus.found_exact: {
            return className + ' ' +  'found';
        }
        case LetterStatus.found_misplaced: {
            return className + ' ' + 'misplaced';
        }
        case LetterStatus.not_used: {
            return className;
        }
    }
}