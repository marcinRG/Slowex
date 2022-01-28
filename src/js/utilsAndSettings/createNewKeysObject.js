import {LetterStatus} from "./letterStatus";

export function  createNewKeysObject(arrayOfKeys) {
    let obj = {};
    arrayOfKeys.forEach((key)=> {
        obj[key] = {
            letter: key,
            status: LetterStatus.not_used
        }
    });
    return obj;
}