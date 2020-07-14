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
    height: '100vh',
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
    if (myListMovies.includes(movie)) return movie;
    const myList: Movie[] = [...myListMovies];
    movie.in_my_list = true;
    myList.push(movie);
    setMyListMovies(myList);
    return movie;
  }

  function removeFromMyListMoves(movie: Movie): Movie {
    const myList: Movie[] = [...myListMovies];
    const newList: Movie[] = myList.filter(motpic => motpic.title !== movie.title);
    movie.in_my_list = false;
    setMyListMovies(newList);
    return movie;
  }

  function addOrRemove(add: boolean, movie: Movie,): void {
    add ? addToMyListMovies(movie) : removeFromMyListMoves(movie);
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
        {myListMovies.length
          ? <MovieList title="My List" movies={myListMovies} addOrRemove={addOrRemove}/>
          : null
        }
        <MovieList title="Discover" movies={discoverMovies} addOrRemove={addOrRemove}/>
      </section>
    </div>
  );
}

export default MovieTable;
