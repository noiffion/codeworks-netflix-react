import React, { useState, useEffect } from 'react';
import CSS from 'csstype';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import Movie from '../interfaces/movie-model';
import Genre from '../interfaces/category-model';
import {
  getDiscoverMovies,
  getCategories,
  getMoviesPerCategory } from '../apiService/apiClient';


interface Styles {
  movieTable: CSS.Properties;
  lists: CSS.Properties;
  categorySelect: CSS.Properties;
  categoryDiv: CSS.Properties;
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
  },
  categoryDiv: {
    marginTop: '5vh'
  },
  categorySelect: {
    backgroundColor: '#141414',
    color: '#d6d7d7',
    marginLeft: '1vw',
    padding: '0.5%',
    borderRadius: '3px',
  }
}

interface PropTypes {}


const MovieTable: React.FC<PropTypes> = () => {

  const [myListMovies, setMyListMovies] = useState<Movie[]>([]);
  const [discoverMovies, setDiscoverMovies] = useState<Movie[]>([]);
  const [genreMovies, setGenreMovies] = useState<Movie[]>([]);
  const [movieCategories, setMovieCategories] = useState<Genre[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Action');

  const addToMyListMovies = (movie: Movie): Movie => {
    if (myListMovies.includes(movie)) return movie;
    const myList: Movie[] = [...myListMovies];
    movie.in_my_list = true;
    myList.push(movie);
    setMyListMovies(myList);
    return movie;
  }

  const removeFromMyListMoves = (movie: Movie): Movie => {
    const myList: Movie[] = [...myListMovies];
    const newList: Movie[] = myList.filter(motpic => motpic.title !== movie.title);
    movie.in_my_list = false;
    setMyListMovies(newList);
    return movie;
  }

  const addOrRemove = (add: boolean, movie: Movie): Movie => {
    return add ? addToMyListMovies(movie) : removeFromMyListMoves(movie);
  }

  useEffect(():void => {
    getDiscoverMovies()
      .then(movies => setDiscoverMovies(movies))
      .catch(err => console.error(err));
    getCategories()
      .then(categories => setMovieCategories(categories))
      .catch(err => console.error(err));
    getMoviesPerCategory(28)
      .then(ctgMovies => {
        setGenreMovies(ctgMovies)
      })
      .catch(err => console.error(err));

  }, []);

  const options = movieCategories.map((category, index) => (
    <option key={`${index}_${category.name}`} value={category.name}> {category.name} </option>
  ));
  const loadCategoryMovies = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedCategory(event.target.value);
    const selectedCategoryObj = movieCategories.find(category => (
      category.name === event.target.value
    ));
    if (selectedCategoryObj !== undefined) {
      getMoviesPerCategory(selectedCategoryObj.id)
        .then(ctgMovies => setGenreMovies(ctgMovies))
        .catch(err => console.error(err));
    }
  }

  return (
    <div style={st.movieTable}>
      <SearchBar/>
      <section style={st.lists}>
        {myListMovies.length
          ? <MovieList title="My List" movies={myListMovies} addOrRemove={addOrRemove}/>
          : null
        }
        <MovieList title="Discover" movies={discoverMovies} addOrRemove={addOrRemove}/>
        <div style={st.categoryDiv}>
          <label htmlFor="categories">Choose a genre</label>
          <select
            id="categories"
            name="categories"
            value={selectedCategory}
            style={st.categorySelect}
            onChange={loadCategoryMovies}
          >
            {options}
          </select>
        </div>
        {genreMovies.length && (
          <MovieList title={selectedCategory} movies={genreMovies} addOrRemove={addOrRemove}/>)
        }
      </section>
    </div>
  );
}

export default MovieTable;
