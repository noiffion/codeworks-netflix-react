import React, { useState, useEffect } from 'react';
import CSS from 'csstype';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import Movie from '../interfaces/movie-model';


interface Styles {
  movieTable: CSS.Properties;
  lists: CSS.Properties;
}

const st: Styles = {
  movieTable: {
    border: '1px solid #141414',
    margin: '0',
    padding: '0',
    backgroundColor: '#141414',
    color: '#d6d7d7',
    fontFamily: 'Oxygen',
  },
  lists: {
    paddingLeft: '2vw',
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
      <SearchBar/>
      <section style={st.lists}>
        {myListMovies.length ? <MovieList title="My List" movies={discoverMovies}/> : null}
        <MovieList title="Discover" movies={discoverMovies}/>
      </section>
    </div>
  );
}

export default MovieTable;
