import "./Result.scss";
import { Link } from "@reach/router";

export default function Result({imdbID, image, title, year}){
    return(
        <Link to={"/movie/" + imdbID} className="result">
            <img className="result__image" src={image} alt={title}/>
            <div className="result__text">
                <h2 className="title">{title}</h2>
                <p className="year">{year}</p>
            </div>
        </Link>
    )
}