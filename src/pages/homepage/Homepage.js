import React, { useState, useEffect, useRef } from "react";
import "./homepage.scss";
import Card from "../../components/card/Card";
import Slider from "react-slick";
import axios from "axios";
import Detail from "../../components/details/Details";

const Homepage = () => {
  const API_KEY = "641aef8bfa01c60ca1f37f2125893261";
  const [popularMovies, setPopularMovies] = useState(null);
  const [trendMovies, setTrendMovies] = useState(null);

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  let refT, refP = useRef(null);
  const executeScroll = (r) => scrollToRef(r);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((res) => setPopularMovies(res.data.results));
    axios
      .get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`)
      .then((res) => setTrendMovies(res.data.results));
  }, []);

  console.log(popularMovies);

  const [detailSection, setDetailSection] = useState({
    staus: false,
    section: null,
  });
  const [detail, setDetail] = useState(null);

  const handleDetail = (movie, section, r) => {
    executeScroll(r)
    setDetailSection({
      staus: true,
      section: section,
    });
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}`)
      .then((res) => setDetail(res.data));
  };

  let settings = {
    className: "center",
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 500,
  };
  return (
    <div className="container-fluid homepageContainer">
      <nav class="navbar navbar-expand-md navbar-dark bg-transparent">
        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Left
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="//codeply.com">
                Codeply
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Right
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <span className="genreTitle" ref={refT}>Trends on Netflix</span>
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
        <span className="genreTitle" ref={refP}>Populer on Netflix</span>
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
    </div>
  );
};

export default Homepage;
