import ReactDOM from "react-dom";
import "./app.scss";
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import {MainMenu} from './js/mainMenu/mainMenu';
import {LinksNames} from "./js/utilsAndSettings/linkNames";
import {DailyChallenge} from "./js/dailyChallenge/DailyChallenge";
import {CustomChallenge} from "./js/customChallenge/CustomChallenge";
import {NoWordsChallenge} from "./js/noWords/NoWordsChallege";
import {AppContext, AppContextProvider} from "./js/context/AppContext";


const app = document.getElementById("App");
ReactDOM.render(
    <Router hashType="slash">
        <AppContextProvider>
            <div className="app-wrapper">
                <Routes>
                    <Route exact={true} path="/" element={<MainMenu/>}/>
                    <Route path={LinksNames.DAILY} element={<DailyChallenge/>}/>
                    <Route path={LinksNames.CUSTOM} element={<CustomChallenge/>}/>
                    <Route path={LinksNames.NO_WORDS} element={<NoWordsChallenge/>}/>
                </Routes>
            </div>
        </AppContextProvider>
    </Router>, app);