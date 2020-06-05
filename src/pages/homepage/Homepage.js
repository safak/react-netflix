import React, { useState, useEffect, useRef } from "react";
import "./homepage.scss";
import axios from "axios";
import Detail from "../../components/details/Details";
import Navbar from "../../components/navbar/Navbar";
import FeaturedContent from "../../components/featuredContent/FeaturedContent";
import SliderCarousel from "../../components/slider/SliderCarousel";

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

  return (
    <div className="homepageContainer">
      <FeaturedContent />
      <Navbar />
      <SliderCarousel
        title="Trends on Netflix"
        name="trends"
        referance={refT}
        movies={trendMovies}
        handleDetail={handleDetail}
      />
      {detail &&
        detailSection.section &&
        detailSection.section === "trends" && (
          <Detail
            detail={detail}
            setDetailSection={setDetailSection}
            setDetail={setDetail}
          />
        )}
        <SliderCarousel
        title="Populer on Netflix"
        name="popular"
        referance={refP}
        movies={popularMovies}
        handleDetail={handleDetail}
      />
      {detail &&
        detailSection.section &&
        detailSection.section === "popular" && (
          <Detail
            detail={detail}
            setDetailSection={setDetailSection}
            setDetail={setDetail}
          />
        )}
        <SliderCarousel
        title="Action Movies"
        name="action"
        referance={refA}
        movies={actionMovies}
        handleDetail={handleDetail}
      />
      {detail &&
        detailSection.section &&
        detailSection.section === "action" && (
          <Detail
            detail={detail}
            setDetailSection={setDetailSection}
            setDetail={setDetail}
          />
        )}
        <SliderCarousel
        title="Horror Movies"
        name="horror"
        referance={refH}
        movies={horrorMovies}
        handleDetail={handleDetail}
      />
      {detail &&
        detailSection.section &&
        detailSection.section === "horror" && (
          <Detail
            detail={detail}
            setDetailSection={setDetailSection}
            setDetail={setDetail}
          />
        )}
        <SliderCarousel
        title="Family Movies"
        name="family"
        referance={refF}
        movies={familyMovies}
        handleDetail={handleDetail}
      />
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
