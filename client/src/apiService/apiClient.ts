import Movie from '../interfaces/movie-model';
import Genre from '../interfaces/category-model';

const apiBaseURL = 'https://movied.herokuapp.com';


export async function getDiscoverMovies(): Promise<Movie[]> {
  return fetch(`${apiBaseURL}/discover`)
    .then(results => results.json());
}

export async function getCategories(): Promise<Genre[]> {
  return fetch(`${apiBaseURL}/categories`)
    .then(results => results.json());
}

export async function getMoviesPerCategory(id:number): Promise<Movie[]> {
  return fetch(`${apiBaseURL}/categories/${id}`)
    .then(results => results.json());
}
