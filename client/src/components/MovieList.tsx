import React, { useState, useEffect } from 'react';
import CSS from 'csstype';
import Movie from '../interfaces/movie-model';


const imagePrependURL: string = 'https://image.tmdb.org/t/p/w300/';

interface Styles {
  movieBox: CSS.Properties;
  movieList: CSS.Properties;

}


const st: Styles = {
  movieList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  movieBox: {
    border: '1px solid blue',
    minHeight: '10vh',
    minWidth: '20vw',


  }


}

const movieBoxStyleMaker = (movie: Movie, movieBox: CSS.Properties): CSS.Properties => {
  const mBox = {...movieBox}
  mBox.backgroundImage = `url("${imagePrependURL}${movie.poster_path}")`;
  return mBox;
}



interface PropTypes {
  title: string;
  movies: Movie[];
}


const MovieList: React.FC<PropTypes> = ({title, movies}) => {

  const movieList = movies.map((movie, index) => (
    <div
      key={`${index}_${movie.title}`}
      style={movieBoxStyleMaker(movie, st.movieBox)}
    >{movie.title}
    </div>
  ));


  return (
    <>
      <h3>{title}</h3>
      <section style={st.movieList}> {movieList} </section>
    </>
  );
}

export default MovieList;
