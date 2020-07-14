import React, { useState, useEffect } from 'react';
import CSS from 'csstype';
import Movie from '../interfaces/movie-model';

/*
interface Styles {
  movieBox: CSS.Properties;
}

const st: Styles = {
  movieBox() {

  }


}
*/


interface PropTypes {
  title: string;
  movies: Movie[];
}


const MovieList: React.FC<PropTypes> = ({title, movies}) => {

  const imagePrependUrl: string = 'https://image.tmdb.org/t/p/w300/';
  console.log('props.movies: ', movies);
  const movieList = movies.map((movie, index) => (
    <div
      key={`${index}_${movie.title}`}
    >{movie.title}
    </div>
  ));


  return (
    <>
      <h3>{title}</h3>
      {movieList}
    </>
  );
}

export default MovieList;
