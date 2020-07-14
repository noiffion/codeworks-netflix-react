import React from 'react';
import Movie from '../interfaces/movie-model';
import CSS from 'csstype';
import addBtnSrc from '../images/btn-add.svg';
import addedBtnSrc from '../images/btn-added.svg';
import styled from 'styled-components';


interface PropTypes {
  movie: Movie;
}


const MovieBox: React.FC<PropTypes> = ({ movie }) => {

  const imagePrependURL: string = 'https://image.tmdb.org/t/p/w300';


  const AddRemoveIcon = styled.img`
    visibility: hidden;
    transition: visibility 0.1s;
  `

  const Box = styled.article`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    min-height: 150px;
    min-width: 250px;
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
      <AddRemoveIcon src={movie.in_my_list ? addedBtnSrc : addBtnSrc}></AddRemoveIcon>
    </Box>
  );
}

export default MovieBox;
