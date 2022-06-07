import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setPage, setSearchInput } from "../../Redux/gameReducer";
import { useNavigate, useLocation } from "react-router-dom";
import useMediaQuery from "./../../hooks/useMediaQuery";
import { setMedia } from "../../Redux/mediaReducer";

function Search(props) {
  const dispatch = useDispatch();
  const inputRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  const isDesktop = useMediaQuery("(min-width: 1527px)");
  const isMobile = useMediaQuery("(max-width: 599px)");
  const isTablet = !isDesktop && !isMobile;

  useEffect(() => {
    dispatch(setMedia({ isDesktop, isMobile, isTablet }));
  }, [isDesktop, isMobile]);

  return (
    <nav className="main__nav">
      <div
        className="navbar__logo"
        onClick={() => {
          navigate("/search4games/");
        }}
      >
        Search<span className="for">4</span>Games
      </div>
      <div className="navbar__container">
        <FontAwesomeIcon icon={faSearch} className="navbar__icon" />
        <input
          placeholder="Search for games"
          type="search"
          className="navbar__input"
          ref={inputRef}
          onChange={(e) => {
            if (location.pathname.includes("details")) {
              navigate("/search4games/");
            }
            console.log(inputRef.current.value);
            dispatch(setPage(1));
            dispatch(setSearchInput(inputRef.current.value));
          }}
        />
      </div>
    </nav>
  );
}

export default Search;
