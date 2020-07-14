import React from 'react';
import Movie from '../interfaces/movie-model';


interface PropTypes {
  movie: Movie;
}


const MovieBox: React.FC<PropTypes> = ({ movie }) => {
  return (
    <>
      <p>{movie.title}</p>
    </>
  );
}

export default MovieBox;
