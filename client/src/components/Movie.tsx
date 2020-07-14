import React, { useState, useEffect } from 'react';
import Movie from '../interfaces/movie-model';


interface PropTypes {
  movie: Movie;
}


const Movie: React.FC<PropTypes> = ({ movie }) => {
  return (
    <>
      <p>{movie.title}</p>
    </>
  );
}

export default Movie;
