import { useContext } from "react";
import Heading from "../components/Heading";
/* import PrevNext from "../components/PrevNext"; */
import Result from "../components/Result";
import SearchBar from "../components/SearchBar";
import SearchContext from "../SearchContext";
import "./Results.scss";

export default function Results(){
    var [results] = useContext(SearchContext);
    /* var pageNumbers = results.data?.totalResults / 10;
    var array = results.data?.Search.length; */

    return(
        <div className="results">
            <div className="results__menu">
                <Heading />
                <SearchBar />
            </div>

            {results.data?.Search.map(function(result){
                return(
                    <Result
                        imdbID={result.imdbID}
                        image={result.Poster}
                        title={result.Title}
                        year={result.Year}
                    /> 
                )
            })}
        </div>
    )
};