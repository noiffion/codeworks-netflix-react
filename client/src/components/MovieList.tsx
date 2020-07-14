import React from 'react';
import CSS from 'csstype';
import Movie from '../interfaces/movie-model';
import MovieBox from './MovieBox';


interface Styles {
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
  listTitle: {
    paddingLeft: '4vw',
  }
}

interface AddOrRemove {
  (add: boolean, movie: Movie): Movie;
}

interface PropTypes {
  title: string;
  movies: Movie[];
  addOrRemove: AddOrRemove;
}


const MovieList: React.FC<PropTypes> = ({title, movies, addOrRemove}) => {
  const movieList = movies.map((movie, index) => (
    <MovieBox
      key={`${index}_${movie.title}`}
      movie={movie}
      addOrRemove={addOrRemove}
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
