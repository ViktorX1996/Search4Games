import React, { useRef, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setPage, setSearchInput } from "../../Redux/gameReducer";
import { useNavigate, useLocation } from "react-router-dom";
import useMediaQuery from "./../../hooks/useMediaQuery";
import { setMedia } from "../../Redux/mediaReducer";
import debounce from "lodash.debounce";
import { MainNav, MainNavLogo, MainNavSearch } from "./searchStyled";
import { SearchInput } from "./SearchInput";
import { MainNavLogoWrapper } from "./MainNavLogoWrapper";
function Search(props) {
  const dispatch = useDispatch();
  const inputRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const debouncedChangeHandler = debounce(() => {
    if (location.pathname.includes("details")) {
      navigate("/search4games/");
    }
    dispatch(setPage(1));
    dispatch(setSearchInput(inputRef.current.value));
  }, 1000);
  const jumpToHome = () => {
    navigate("/search4games/");
  };

  return (
    <MainNav>
      <MainNavLogoWrapper jumpToHome={jumpToHome} />
      <MainNavSearch>
        <FontAwesomeIcon icon={faSearch}/>
        <SearchInput
          inputRef={inputRef}
          debouncedChangeHandler={debouncedChangeHandler}
        />
      </MainNavSearch>
    </MainNav>
  );
}

export default Search;



