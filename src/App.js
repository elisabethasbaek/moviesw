import { useState } from "react";
import Results from "./pages/Results";
import { Router } from "@reach/router";
import SearchContext from "./SearchContext";
import "./index.css";
import SingleView from "./pages/SingleView";

export default function App() {
    var searchState = useState([]);

    return (
        <SearchContext.Provider value={searchState}>
            <div className="App">
                <Router>
                    <Results default path="/" />
                    <SingleView path="/movie/:id" />
                </Router>
            </div>
        </SearchContext.Provider>
    )
}
