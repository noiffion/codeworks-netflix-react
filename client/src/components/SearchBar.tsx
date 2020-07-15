import React, { useState, useEffect } from 'react';
import CSS from 'csstype';
import magGlassSrc from '../images/magnifying_glass_white.svg';
import netFlixLogoSrc from '../images/netflix_logo.jpg';


interface Styles {
  navBar: CSS.Properties;
  navList: CSS.Properties;
  magnGlass: CSS.Properties;
  searchInputBox: CSS.Properties;
  searchText: CSS.Properties;
}

const st: Styles = {
  navBar: {
    margin: '0',
    padding: '0',
    width: '100%',
    position: 'fixed',
    top: '0',
  },
  navList: {
    margin: '0',
    padding: '0',
    backgroundColor: '#050300',
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  magnGlass: {
    cursor: 'pointer',
  },
  searchInputBox: {
    minWidth: '25vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: 'Oxygen',
  },
  searchText: {
    boxSizing: 'border-box',
    border: '1px solid #d6d7d7',
    borderRadius: '3px',
    backgroundColor: '#050300',
    color: '#d6d7d7',
    padding: '2%',
    marginLeft: '0.5vw',
    minHeight: '100%',
    minWidth: '20vw',
  }
}

interface PropTypes {}

const submitHandler = (event: Event) => {
  event.preventDefault();
}


const SearchBar: React.FC<PropTypes> = () => {
  return (
    <nav style={st.navBar}>
      <ul style={st.navList}>
        <li>
          <img src={netFlixLogoSrc} height="100" width="200" alt="Netflix logo"></img>
        </li>
        <li style={st.searchInputBox}>
          <img
            style={st.magnGlass}
            src={magGlassSrc}
            height="30"
            width="30"
            alt="magnifying glass icon">
          </img>
          <form >
            <input type="text" style={st.searchText}/>
          </form>
        </li>
      </ul>
    </nav>
  );
}

export default SearchBar;
