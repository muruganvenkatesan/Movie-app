import React, { useState, useEffect } from "react";
import './movie.cart.css';
import { getAllMovieCase } from '../service/api.movie';

let IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

const MovieCart = (props) => {
  const [movies, setMovies] = useState([]);
  const [nonFilteredmovies, setNonFilteredmovies] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(onload, []);

  function onload() {
    getAllMovieCase()
      .then((res) => {
        setNonFilteredmovies(res?.data?.results);
        setMovies(res?.data?.results)
      })
      .catch(err => console.log('error', err))
  }

  function onSearch(e) {
    e.preventDefault();
    if (!searchText || searchText.trim() === '') {
      setMovies(nonFilteredmovies);
      return;
    }
    let pattern = new RegExp(searchText, 'i');
    console.log('pattern', pattern)
    let filteredMovies = [...nonFilteredmovies];
    filteredMovies = filteredMovies.filter(movie => {
      return movie.original_title.match(pattern) || movie.title.match(pattern) || movie.overview.match(pattern);
    });
    setMovies(filteredMovies);
    console.log(filteredMovies)
  }

  function navigateToSingle(movie){
    movie.poster_path = IMAGE_URL + '' + movie.poster_path;
    movie.backdrop_path = IMAGE_URL + '' + movie.backdrop_path;
    props.history.push({
      pathname:`/moviecart/${movie.title.split(' ').join('')}/details`,
      movie: movie
    });
  }

  return (
    <div className="movie-cards-wrapper">
      <div className="row m-3 justify-content-end">
        <div className="col-3 align-self-end">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Movie Name / overview"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="col-1 align-self-center">
          <button
            type="button"
            className="btn btn-light"
            onClick={e => onSearch(e)}
          >
            Search
          </button>
        </div>
      </div>


      <div className="cards">
        {
          movies.length === 0 ? (
            <h3>SORRY NO MOVIES FOUND</h3>
          ) : (

              movies.map((movie, index) => {
                return (
                  <div key={index} className="mr-2 mb-3">
                    <div className="container" onClick={() => navigateToSingle(movie)}>
                      <img src={IMAGE_URL + '' + movie.poster_path} alt={movie.title} className="banner-image" />
                      <div className="overlay">
                        <div className="text">{movie.title}</div>
                        <div className="text text-1">Ratings: {movie.vote_average}</div>
                        <div className="text text-2">{movie.release_date}</div>
                      </div>
                    </div>

                  </div>
                )
              })
            )
        }
      </div>
    </div>)
}
export default MovieCart;