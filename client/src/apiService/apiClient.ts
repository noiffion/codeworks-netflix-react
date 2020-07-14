const apiBaseURL = 'https://movied.herokuapp.com';


export async function getDiscoverMovies(): Promise<any> {
  return fetch(`${apiBaseURL}/discover`)
    .then(results => results.json());
}

export async function getCategories(): Promise<any> {
  return fetch(`${apiBaseURL}/categories`)
    .then(results => results.json());
}

