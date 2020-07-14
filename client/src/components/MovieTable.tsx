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
    height: '80vh',
    margin: '10vh 0 0 0',
    padding: '5vh 0',
    backgroundColor: '#141414',
    color: '#d6d7d7',
    fontFamily: 'Oxygen',
    overflow: 'scroll',
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

  function addOrRemove(add: boolean, movie: Movie): Movie {
    return add ? addToMyListMovies(movie) : removeFromMyListMoves(movie);
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
        <label htmlFor="categories">Choose a genre</label>
        <select name="categories" id="categories">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </section>
    </div>
  );
}

export default MovieTable;
