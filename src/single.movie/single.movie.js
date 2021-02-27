import React from "react";
import './single.movie.css'
import { Rating } from "primereact/rating";

const SingleMovie = (props) => {
  const { movie } = props.location;
  console.log(movie)
  return (
    <div style={{
      backgroundImage: `url(${movie?.backdrop_path}), linear-gradient(180deg, rgb(255, 255, 255), rgb(255, 255, 255))`
    }}
      className="movieDetailWrapper">
      <div className="innerWrap">
        <div className="namePic">
          <img src={movie?.poster_path} alt={movie?.title} className="inner-banner-image" />
        </div>
        <div className="desc">
          {movie ? (
            <>
          <div className="title mb-5 mt-3">
            <h2>{movie?.title.toUpperCase()}</h2><h4 className="ml-1">({movie?.release_date.slice(0, 4)})</h4>
          </div>
          <div className="row justify-content-end mb-3">
            <div className="col-5">
              <h4 className="mb-3">Release Date</h4>
              <h6>{movie?.release_date}</h6>
            </div>
            <div className="col-6 mb-3">
              <h4 className="mb-3">Adult Movie</h4>
              <h6>{movie?.adult ? ' YES' : ' No '}</h6>
            </div>
          </div>
          <div className="row justify-content-end mb-3">
            <div className="col-5 mb-3">
              <h4 className="mb-3">Language</h4>
              <h6>{movie?.original_language.toUpperCase()}</h6>
            </div>
            <div className="col-6 mb-3">
              <h4 className="mb-3">Popularity</h4>
              <h6>{movie?.popularity}</h6>
            </div>
          </div>
          <div className="row justify-content-end mb-3">
            <div className="col-11 mb-3">
              <h4 className="mb-3">Overview</h4>
              <h6>{movie?.overview}</h6>
            </div>
          </div>
          <div className="row justify-content-end mb-3">
            <div className="col-11 mb-3 ml-3">

              <h4 className="mb-3">Ratings</h4>
              <h5>{movie?.vote_average}</h5>

            </div>
          </div>
          </>) :<div className="row justify-content-center align-items-center"><h3 className="col-12 text-center">SOMETHING WENT WRONG</h3><button className="btn btn-light" onClick={()=> props.history.goBack()}>Home</button></div>}
        </div>
      </div>
    </div>)
}
export default SingleMovie;