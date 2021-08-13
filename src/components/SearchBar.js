import "./SearchBar.scss";
import axios from "axios";
import { useContext } from "react";
import SearchContext from "../SearchContext";

export default function SearchBar(){
    var setResults = useContext(SearchContext)[1];
    
    function handleSubmit(event){
        event.preventDefault();
        
        axios.get("https://movie-database-imdb-alternative.p.rapidapi.com/", {
            params: {
                s: event.target.search.value, 
                page: 1, 
                r: 'json'
            },
            headers: {
                'x-rapidapi-key': 'cbf0eada93mshda4348a7166d51bp13e11bjsna5929dc3ff1a',
                'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
            }
        })
        .then(function(response){
            setResults(response);
            console.log(response.data.Search);
        })
    }

    return(
        <form onSubmit={handleSubmit} className="search">
            <input type="text" placeholder="Search" name="search" className="search__input" />
            <button type="submit" className="search__button">Search</button>
        </form>
    )
}