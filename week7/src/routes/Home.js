import React, { useEffect, useState } from "react";
import Mov from "../components/Mov";
import PropTypes from "prop-types";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&&sort_by=rating"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        movies.map((movie) => (
          <Mov
            id={movie.id}
            key={movie.id}
            title={movie.title}
            medium_cover_image={movie.medium_cover_image}
            summary={movie.summary}
            genres={movie.genres}
          />
        ))
      )}
    </div>
  );
}

Mov.propTypes = {
  title: PropTypes.string.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Home;
