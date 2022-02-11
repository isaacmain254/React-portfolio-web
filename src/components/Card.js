import React  from "react";
import './Card.css';


const Card = ({card}) => {
    return (
        <div className="card-container">
            <div className="card-image">
                <img src={card.image} alt="image"/>
            </div>
            <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
            </div>
            <div className="tech-stack">
                <p>stack</p>
                
            </div>
            <div className="btn-to">
                <a href="#source">View Source</a>
                <a href="#source">Live Demo</a>
            </div>
        </div>
    );
}

export default Card;