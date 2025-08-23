import { Link } from "react-router-dom";
import './CreatorCard.css'

const Card = (props) => {
    return (
        <div className="Card">
            <Link to={'edit/' + props.id}>Edit</Link>
            <Link to={`/creator/${props.id}`}>View</Link>
            <h2 className="name">{props.name}</h2>
            <p className="description">{props.description}</p>
            <a href={props.url}>Content Creator URL</a>
            <img src={props.img} alt="Creator's picture" />
        </div>
    )
};

export default Card;