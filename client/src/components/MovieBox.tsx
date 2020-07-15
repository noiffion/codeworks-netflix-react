import React, { useContext } from 'react';
import Movie from '../interfaces/movie-model';
import addBtnSrc from '../images/btn-add.svg';
import addedBtnSrc from '../images/btn-added.svg';
import styled from 'styled-components';


interface AddOrRemove {
  (add: boolean, movie: Movie): Movie;
}

interface PropTypes {
  movie: Movie;
  addOrRemove: AddOrRemove;
}


const MovieBox: React.FC<PropTypes> = ({ movie, addOrRemove }) => {
  const AddRemoveIcon = styled.img`
    visibility: hidden;
    transition: visibility 0.1s;
  `

  const imagePrependURL: string = 'https://image.tmdb.org/t/p/w300';
  const Box = styled.article`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    min-height: 150px;
    min-width: 250px;
    max-height: 150px;
    max-width: 250px;
    margin-left: 5px;
    background-image: url('${imagePrependURL}${movie.backdrop_path}');
    &:hover ${AddRemoveIcon} {
      visibility: visible;
      cursor: pointer;
    }
  `;

  return (
    <Box>
      <span>{movie.title}</span>
      <AddRemoveIcon
        src={movie.in_my_list ? addedBtnSrc : addBtnSrc}
        onClick={() => addOrRemove(!movie.in_my_list, movie)}
      >
      </AddRemoveIcon>
    </Box>
  );
}

export default MovieBox;
