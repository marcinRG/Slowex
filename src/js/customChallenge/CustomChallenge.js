import React from "react";
import './CustomChallenge.scss';

export function CustomChallenge() {
    return (
        <div className="custom-challenge-form">
            <h2 className="section-title">Menu &gt; Stwórz własną zagadkę</h2>
            <form className="custom-game-form">
                <label className="form-label">ilość liter w słowie</label>
                <div className="form-row"><input className="form-input" type="number" /></div>
                <label className="form-label">Wybierz słowo (liczba od 1 do x)</label>
                <div className="form-row random">
                    <input className="form-input" type="text" />
                    <button className="form-button random">losuj słowo</button>
                </div>
                <label className="form-label">ilość prób</label>
                <div className="form-row">
                    <input className="form-input" type="number"/>
                </div>
                <div className="form-row form-btn">
                    <button className="form-button new-game">Rozpocznij grę</button>
                </div>

            </form>
        </div>);
}