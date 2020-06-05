import React from "react";
import "./featuredContent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";

const FeaturedContent = () => {
  return (
    <div
      className="featuredContainer"
      style={{ backgroundImage: `url(${require("../../assets/2.jpg")})` }}
    >
      <div className="desc">
        <div className="row titleImg">
          <img
            src={require("../../assets/forrest.webp")}
            alt=""
            className="m-5"
            width="400px"
          />
        </div>
        <div className="row buttons m-3">
          <button className="btn playButton">
            <FontAwesomeIcon icon={faPlay} className="mr-2" />
            Play
          </button>
          <button className="btn myListButton">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            My List
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;
