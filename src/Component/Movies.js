import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const Movies = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [genre, setGenre] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [sort, setSort] = useState("");
  const moviesPerPage = 10;
  const pageVisited = pageNumber * moviesPerPage;
  const moviesOutlet = useOutletContext();

  const movies = moviesOutlet.filter((movie) => {
    if (genre === "") {
      return movie;
    } else {
      return movie.movieDetails.genre.includes(genre);
    }
  });

  if (sort === "") {
    movies.sort((a, b) => a.id - b.id);
  } else if (sort === "oldest") {
    movies.sort((a, b) =>
      new Date(
        a.movieDetails.release_date.slice(6) +
          a.movieDetails.release_date.slice(2, 6) +
          a.movieDetails.release_date.slice(0, 2)
      ).getTime() >
      new Date(
        b.movieDetails.release_date.slice(6) +
          b.movieDetails.release_date.slice(2, 6) +
          b.movieDetails.release_date.slice(0, 2)
      ).getTime()
        ? 1
        : -1
    );
  } else if (sort === "high") {
    movies.sort((a, b) =>
      a.movieDetails.rating > b.movieDetails.rating ? -1 : 1
    );
  }

  const pageCount = Math.ceil(movies.length / moviesPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  function handleReset(e) {
    setGenre("");
    setSearchValue("");
    window.location.reload();
  }
  return (
    <div className="movies">
      <div className="search-bar">
        <div>
          <input
            type="text"
            name="search"
            className="search"
            placeholder="search..."
            autoComplete="off"
            onChange={(e) => setSearchValue(e.target.value)}
          />{" "}
          <FaSearch className="search-icon" />
        </div>

        <div className="sort">
          <select
            className="select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value={""}>Sort </option>
            <option value="high">Top rated</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
      </div>

      <div className="filter-container">
        <label htmlFor="action">Action</label>
        <input
          type="radio"
          name="genre"
          id="action"
          value="Action"
          onChange={(e) => setGenre(e.target.value)}
        />
        <label htmlFor="adventure">Adventure</label>
        <input
          type="radio"
          name="genre"
          id="adventure"
          value="Adventure"
          onChange={(e) => setGenre(e.target.value)}
        />
        <label htmlFor="comedy">Comedy</label>
        <input
          type="radio"
          name="genre"
          id="comedy"
          value="Comedy"
          onChange={(e) => setGenre(e.target.value)}
        />
        <label htmlFor="drama">Drama</label>
        <input
          type="radio"
          name="genre"
          id="drama"
          value="Drama"
          onChange={(e) => setGenre(e.target.value)}
        />
        <label htmlFor="fantasy">Fantasy</label>
        <input
          type="radio"
          name="genre"
          id="fantasy"
          value="Fantasy"
          onChange={(e) => setGenre(e.target.value)}
        />

        <label htmlFor="suspence">Fiction</label>
        <input
          type="radio"
          name="genre"
          id="suspence"
          value="Fiction"
          onChange={(e) => setGenre(e.target.value)}
        />

        <label htmlFor="mystery">Mystery</label>
        <input
          type="radio"
          name="genre"
          id="mystery"
          value="Mystery"
          onChange={(e) => setGenre(e.target.value)}
        />
        <label htmlFor="romance">Romance</label>
        <input
          type="radio"
          name="genre"
          id="romance"
          value="Romance"
          onChange={(e) => setGenre(e.target.value)}
        />
        <label htmlFor="horror">Horror</label>
        <input
          type="radio"
          name="genre"
          id="horror"
          value="Horror"
          onChange={(e) => setGenre(e.target.value)}
        />

        <label htmlFor="science">Science</label>
        <input
          type="radio"
          name="genre"
          id="science"
          value="Science"
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div className="movies-list">
        {movies
          .filter((movie) => {
            return movie.movieDetails.name
              .toLowerCase()
              .includes(searchValue.toLowerCase());
          })
          .slice(pageVisited, pageVisited + moviesPerPage)
          .map((movie) => {
            return (
              <div className="movies-card" key={movie.id}>
                <div className="movie-card">
                  <Link to={`/ ${movie.id}`}>
                    <img src={movie.movieDetails.poster} alt="movie-poster" />{" "}
                  </Link>
                </div>
                <div className="movie-title"> {movie.movieDetails.name}</div>
              </div>
            );
          })}
      </div>
      <br />
      <div className="paginate">
        <ReactPaginate
          previousLabel={`Previous`}
          nextLabel={`Next`}
          breakLabel={`...`}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          onPageChange={changePage}
          containerClassName="pagination justify-content-center margin-bottom"
          pageClassName="page-items"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </div>
  );
};

export default Movies;
