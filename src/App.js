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
                    reg.showNotification("Permission granted");
                    console.log(reg);
                })
        }
    }

    return (
        <SearchContext.Provider value={searchState}>
            <div className="App">
                <button onClick={() => displayNotification()}>Notify me!</button>

                <Router>
                    <Results default path="/" />
                    <SingleView path="/movie/:id" />
                </Router>
            </div>
        </SearchContext.Provider>
    )
}
