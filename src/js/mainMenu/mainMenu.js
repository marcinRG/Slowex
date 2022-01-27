import React from "react";
import {Link} from "react-router-dom";
import { LinksNames } from "../utilsAndSettings/linkNames";
import "./mainMenu.scss";

export function MainMenu() {
    return (
        <div className="app-menu-screen">
            <h1 className="app-title">Słowex</h1>
            <ul className="links-menu">
                <li className="link-button"><Link to={LinksNames.DAILY}>Dzienne wyzwanie</Link></li>
                <li className="link-button"><Link to={LinksNames.CUSTOM}>Customowa gra</Link></li>
                <li className="link-button"><Link to={LinksNames.NO_WORDS}>Nie znam liter!!!</Link></li>
                <li className="link-button"><Link to={LinksNames.NO_WORDS}>Złam kod</Link></li>
            </ul>
        </div>);
}