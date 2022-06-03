import React,{useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { setSearchInput } from '../../Redux/gameReducer';

function Search(props) {
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    console.log(inputRef);
    return (
        <nav className="main__nav">
        <div
          className="navbar__logo"
        >RAWG</div>
        <div className="navbar__container">
          <FontAwesomeIcon icon={faSearch} className="navbar__icon" />
          <input placeholder="Search for games" type="search" className="navbar__input" ref={inputRef} 
          onChange={(e)=>{
              console.log(inputRef.current.value);
              dispatch(setSearchInput(inputRef.current.value))
          }}
          />
        </div>
      </nav>
    );
}

export default Search;