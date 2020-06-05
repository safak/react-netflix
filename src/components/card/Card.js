import React from 'react';
import './card.scss';

const Card = ({movie}) => {

    const posterBaseUrl = "http://image.tmdb.org/t/p/original";

    const handleShowDetails =() =>{

    }

    return (
        <div className="cardContainer">
            <img className="cardImg" src={`${posterBaseUrl}/${movie.poster_path}`} alt="" />
        </div>
    );
};



export default Card;