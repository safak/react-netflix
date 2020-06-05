import React from "react";
import "./card.scss";

const Card = ({ movie }) => {
  const posterBaseUrl = "http://image.tmdb.org/t/p/original";

  return (
    <div className="cardContainer">
      <img
        className="cardImg"
        src={`${posterBaseUrl}/${movie.poster_path}`}
        alt=""
      />
      <div className="det">
        <span className="movieTitle">{movie.title}</span>
        <span className="movieVote">
          Imdb: <b>{movie.vote_average}</b>
        </span>
        <span className="movieLang">
          Language: <b>{movie.original_language}</b>
        </span>
      </div>
    </div>
  );
};

export default Card;
