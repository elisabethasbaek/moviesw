import "./SingleView.scss";
import axios from "axios";
import { useContext, useEffect } from "react";
import SearchContext from "../SearchContext";
import Heading from "../components/Heading";
import SearchBar from "../components/SearchBar";

export default function SingleView(props){
    var setResults = useContext(SearchContext)[1];

    useEffect(
        function(){
            axios.get("https://movie-database-imdb-alternative.p.rapidapi.com/", {
                params: {
                    i: props.id,
                    r: 'json'
                },
                headers: {
                    'x-rapidapi-key': 'cbf0eada93mshda4348a7166d51bp13e11bjsna5929dc3ff1a',
                    'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
                }
            })
                .then(function(response){
                    setResults(response.data);
                    console.log(response.data);
                })
        }, [props.id, setResults]
    );

    return(
        <div className="singleView">
            <div className="singleView__menu">
                <Heading />
                <SearchBar />
            </div>
        </div>
    )
}