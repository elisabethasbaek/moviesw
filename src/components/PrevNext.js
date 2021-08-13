import "./PrevNext.scss";
import { Link } from "@reach/router";

export default function PrevNext({prev, next}){
    return(
        <div className="prevNext">
            <Link to={prev} className="prevNext__button">&lt; Previous page</Link>
            |
            <Link to={next} className="prevNext__button">Next page &gt;</Link>
        </div>
    )
}