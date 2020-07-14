import React, { useState, useEffect } from 'react';
import CSS from 'csstype';
import Movie from '../interfaces/movie-model';
import MovieBox from './MovieBox';


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

  },
  listTitle: {
    paddingLeft: '4vw',
  }
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
