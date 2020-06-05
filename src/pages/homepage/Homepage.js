import React, { useState, useEffect, useRef } from "react";
import "./homepage.scss";
import Card from "../../components/card/Card";
import Slider from "react-slick";
import axios from "axios";
import Detail from "../../components/details/Details";
import Navbar from "../../components/navbar/Navbar";
import FeaturedContent from "../../components/featuredContent/FeaturedContent";

const Homepage = () => {
  const API_KEY = "641aef8bfa01c60ca1f37f2125893261";
  const [popularMovies, setPopularMovies] = useState(null);
  const [trendMovies, setTrendMovies] = useState(null);
  const [actionMovies, setActionMovies] = useState(null);
  const [horrorMovies, setHorrorMovies] = useState(null);
  const [familyMovies, setFamilyMovies] = useState(null);

  const refT = useRef();
  const refP = useRef();
  const refA = useRef();
  const refH = useRef();
  const refF = useRef();

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((res) => setPopularMovies(res.data.results));
    axios
      .get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`)
      .then((res) => setTrendMovies(res.data.results));
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
      )
      .then((res) => setActionMovies(res.data.results));
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
      )
      .then((res) => setHorrorMovies(res.data.results));
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751`
      )
      .then((res) => setFamilyMovies(res.data.results));
  }, []);

  const [detailSection, setDetailSection] = useState({
    staus: false,
    section: null,
  });
  const [detail, setDetail] = useState(null);

  const handleDetail = (movie, section, ref) => {
    setDetailSection({
      staus: true,
      section: section,
    });
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}`)
      .then((res) => setDetail(res.data));
    window.scrollTo(0, ref.current.offsetTop);
  };

  let settings = {
    className: "center",
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 500,
  };
  return (
    <div className="homepageContainer">
      <FeaturedContent/>
      <Navbar/>
      <div>
        <span className="genreTitle" ref={refT}>
          Trends on Netflix
        </span>
        <Slider {...settings}>
          {trendMovies &&
            trendMovies.map((movie) => (
              <div onClick={() => handleDetail(movie, "trends", refT)}>
                <Card movie={movie} />
              </div>
            ))}
        </Slider>
      </div>
      {detail &&
        detailSection.section &&
        detailSection.section === "trends" && (
          <Detail
            detail={detail}
            setDetailSection={setDetailSection}
            setDetail={setDetail}
          />
        )}
      <div>
        <span className="genreTitle" ref={refP}>
          Populer on Netflix
        </span>
        <Slider {...settings}>
          {popularMovies &&
            popularMovies.map((movie) => (
              <div onClick={() => handleDetail(movie, "popular", refP)}>
                <Card movie={movie} />
              </div>
            ))}
        </Slider>
      </div>
      {detail &&
        detailSection.section &&
        detailSection.section === "popular" && (
          <Detail
            detail={detail}
            setDetailSection={setDetailSection}
            setDetail={setDetail}
          />
        )}
      <div>
        <span className="genreTitle" ref={refA}>
          Action Movies
        </span>
        <Slider {...settings}>
          {actionMovies &&
            actionMovies.map((movie) => (
              <div onClick={() => handleDetail(movie, "action", refA)}>
                <Card movie={movie} />
              </div>
            ))}
        </Slider>
      </div>
      {detail &&
        detailSection.section &&
        detailSection.section === "action" && (
          <Detail
            detail={detail}
            setDetailSection={setDetailSection}
            setDetail={setDetail}
          />
        )}
      <div>
        <span className="genreTitle" ref={refH}>
          Horror Movies
        </span>
        <Slider {...settings}>
          {horrorMovies &&
            horrorMovies.map((movie) => (
              <div onClick={() => handleDetail(movie, "horror", refH)}>
                <Card movie={movie} />
              </div>
            ))}
        </Slider>
      </div>
      {detail &&
        detailSection.section &&
        detailSection.section === "horror" && (
          <Detail
            detail={detail}
            setDetailSection={setDetailSection}
            setDetail={setDetail}
          />
        )}
      <div>
        <span className="genreTitle" ref={refF}>
          Family Movies
        </span>
        <Slider {...settings}>
          {familyMovies &&
            familyMovies.map((movie) => (
              <div onClick={() => handleDetail(movie, "family", refF)}>
                <Card movie={movie} />
              </div>
            ))}
        </Slider>
      </div>
      {detail &&
        detailSection.section &&
        detailSection.section === "family" && (
          <Detail
            detail={detail}
            setDetailSection={setDetailSection}
            setDetail={setDetail}
          />
        )}
    </div>
  );
};

export default Homepage;
