import { useState } from "react";
import Results from "./pages/Results";
import { Router } from "@reach/router";
import SearchContext from "./SearchContext";
import "./index.css";
import SingleView from "./pages/SingleView";

export default function App() {
    var searchState = useState([]);

    Notification.requestPermission(function(status){
        console.log("Notification permission status: ", status);
    });

    function displayNotification(){
        if(Notification.permission === "granted"){
            navigator.serviceWorker.getRegistration()
                .then(function(reg){
                    reg.showNotification("Watch your back. It's coming.", {
                        vibrate: [100, 50, 200, 100, 100, 50, 200, 100, 100, 50, 200, 100]
                    });
                });
        }
    }

    return (
        <SearchContext.Provider value={searchState}>
            <div className="App">
                <button className="notifyButton" onClick={() => displayNotification()}>Notify me!</button>

                <Router>
                    <Results default path="/" />
                    <SingleView path="/movie/:id" />
                </Router>
            </div>
        </SearchContext.Provider>
    )
}
