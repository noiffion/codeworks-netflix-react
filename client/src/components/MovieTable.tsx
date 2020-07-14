import React, { useState, useEffect } from 'react';
import CSS from 'csstype';
import MovieList from './MovieList';
import Movie from '../interfaces/movie-model';


interface Styles {
  movieTable: CSS.Properties;
}

const st: Styles = {
  movieTable: {
    border: '1px solid #141414',
    marginTop: '0',
    padding: '0 2vw',
    backgroundColor: '#141414',
    color: '#d6d7d7',
    fontFamily: 'Oxygen',
  }
}

interface PropTypes {}


const MovieTable: React.FC<PropTypes> = () => {

  const [myListMovies, setMyListMovies] = useState<Movie[]>([]);
  const [discoverMovies, setDiscoverMovies] = useState<Movie[]>([]);

  function addToMyListMovies(movie: Movie): Movie {
    const myList: Movie[] = [...myListMovies];
    myList.push(movie);
    setMyListMovies(myList);
    return movie;
  }

  function removeFromMyListMoves(movie: Movie): Movie {
    const myList: Movie[] = [...myListMovies];
    const newList: Movie[] = myList.filter(motpic => motpic.title !== movie.title);
    setMyListMovies(newList);
    return movie;
  }

  useEffect(():void => {
    fetch('https://movied.herokuapp.com/discover')
      .then(results => results.json())
      .then(movies => setDiscoverMovies(movies))
      .catch(err => console.error(err));
  }, []);


  return (
    <div style={st.movieTable}>
      {myListMovies.length ? <MovieList title="My List" movies={discoverMovies}/> : null}
      <MovieList title="Discover" movies={discoverMovies}/>
    </div>
  );
}

export default MovieTable;
