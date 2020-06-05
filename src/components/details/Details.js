import React from "react";
import "./details.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const Details = ({ detail, setDetailSection, setDetail }) => {
  const posterBaseUrl = "http://image.tmdb.org/t/p/original";

  return (
    <div
      className={"detailContainer container"}
      style={{
        backgroundImage: `url(${posterBaseUrl}${detail.backdrop_path})`,
      }}
    >
      <div className="row">
        <div className="col-5 detailCol">
          <div className="row">
            <h1 className="title">{detail.title}</h1>
          </div>
          <div className="row">
            <span className="year">{detail.release_date.substring(0, 4)}</span>
            {detail.adult && <span className="ageLimit">Adult</span>}
            <span className="imdb">IMDB: {detail.vote_average}</span>
            <span className="duration">{detail.runtime} mins</span>
          </div>
          <div className="row">
            <p className="desc">{detail.overview}</p>
          </div>
          <div className="row">
            <button className="btn playButton">
              <FontAwesomeIcon icon={faPlay} className="mr-2" />
              Play
            </button>
            <button className="btn myListButton">
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              My List
            </button>
          </div>
          <div className="row starring">
            <p>
              <i>"{detail.tagline}"</i>
            </p>
          </div>
          <div className="row genre">
            <p>
              <b>Genres:</b>{" "}
              {detail.genres.map((g) => (
                <span>{g.name} </span>
              ))}
            </p>
          </div>
        </div>
        <div className="col-3 detailButtons">
          <ul>
            <li active className="active">
              Summary
            </li>
            <li>More Info</li>
          </ul>
        </div>
        <div className="col-1 offset-3 closeCol">
          <span
            className="closeButton"
            onClick={() => {
              setDetailSection({ staus: false, section: null });
              setDetail(null);
            }}
          >
            <FontAwesomeIcon icon={faTimes} style={{ fontSize: "25px" }} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Details;
