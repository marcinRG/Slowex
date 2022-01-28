import React from "react";

export function CustomChallenge() {
    return (
        <div>
            <h2>Stwórz własną zagadkę</h2>
            <form>
                <label>ilość liter w słowie</label>
                <div><input type="number" /></div>
                <span>uwaga! </span>
                <label>Wybierz słowo (liczba od 1 do x)</label>
                <div>
                    <input type="text" />
                    <button>losuj słowo</button>
                </div>
                <label>ilość prób</label>
                <div>
                    <input type="text"/>
                </div>

            </form>
        </div>);
}