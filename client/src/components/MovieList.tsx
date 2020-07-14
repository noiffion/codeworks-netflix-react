import React, { useState, useEffect } from 'react';
import CSS from 'csstype';
import Movie from '../interfaces/movie-model';
import MovieBox from './MovieBox';


const imagePrependURL: string = 'https://image.tmdb.org/t/p/w300/';

interface Styles {
  movieBox: CSS.Properties;
  movieList: CSS.Properties;
  listTitle: CSS.Properties;
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
    cursor: 'pointer',
    minHeight: '20vh',
    minWidth: '15vw',
  },
  listTitle: {
    paddingLeft: '2vw',
  }
}

const movieBackgrMaker = (movie: Movie, movieBox: CSS.Properties): CSS.Properties => {
  const mBox = {...movieBox}
  mBox.backgroundImage = `url('${imagePrependURL}${movie.backdrop_path}')`;
  return mBox;
}

interface PropTypes {
  title: string;
  movies: Movie[];
}


const MovieList: React.FC<PropTypes> = ({title, movies}) => {
  const movieList = movies.map((movie, index) => (
    <MovieBox
      key={`${index}_${movie.title}`}
      movie={movie}
      boxStyle={movieBackgrMaker(movie, st.movieBox)}
    />
  ));

  return (
    <>
      <h3 style={st.listTitle}>{title}</h3>
      <section style={st.movieList}> {movieList} </section>
    </>
  );
}

export default MovieList;
