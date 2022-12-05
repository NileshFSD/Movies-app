import React from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import { AiTwotoneStar } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

const View = () => {
  const moviesOutlet = useOutletContext();
  const { movieId } = useParams();

  const movie = moviesOutlet.find((movie) => {
    return movie.id === Number(movieId);
  });

  function find() {
    movie.movieDetails.release_date.slice();
  }

  const d = movie.movieDetails.release_date;
  const date = d.slice(6) + d.slice(2, 6) + d.slice(0, 2);
  console.log(new Date(date).getTime());

  const cast =
    "https://www.google.com/search?q= " +
    movie.movieDetails.name.replace(" ", "+") +
    "+cast";

  return (
    <div className="movie-container">
      <div>
        <Link to="/">
          <MdArrowBackIos className="back" />
        </Link>
      </div>
      <div className="movie">
        <div className="movie-poster-rate">
          <div className="movie-poster">
            {" "}
            <img src={movie.movieDetails.poster} alt="poster" />
          </div>
          <div className="movie-rating">
            {" "}
            IMDB Rating : {movie.movieDetails.rating.toFixed(1)}/10{" "}
            <AiTwotoneStar className="star-icon" />
          </div>
          <div className="movie-duration">{movie.movieDetails.duration} </div>
        </div>
        <div className="movie-details">
          <div className="movie-name">
            {movie.movieDetails.name}{" "}
            <a href={cast} target="_blank" className="link">
              Cast
            </a>{" "}
          </div>
          <div className="movie-summary">{movie.movieDetails.summary}</div>
          <div className="movie-date">
            Release date : {movie.movieDetails.release_date}
          </div>
          <div className="movie-genre">
            {movie.movieDetails.genre.map((item, index) => {
              return (
                <div key={index}>
                  <span>{item}</span>
                </div>
              );
            })}
          </div>
          <div>
            <a href={movie.movieDetails.trailer} target="_blank">
              <button className="movie-trailer">
                Watch trailer <FaPlay className="play-icon" />
              </button>
            </a>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default View;
