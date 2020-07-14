import React from 'react';
import Movie from '../interfaces/movie-model';
import CSS from 'csstype';


interface PropTypes {
  movie: Movie;
  boxStyle: CSS.Properties;
}


const MovieBox: React.FC<PropTypes> = ({ movie, boxStyle }) => {
  return (
    <article style={boxStyle}>
      <span>{movie.title}</span>
    </article>
  );
}

export default MovieBox;
