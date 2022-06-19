import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setSearchInput } from "../../Redux/gameReducer";
import { useLocation } from "react-router-dom";
import debounce from "lodash.debounce";
import { MainNav, MainNavSearch } from "./searchStyled";
import { SearchInput } from "./SearchInput";
import { MainNavLogoWrapper } from "./MainNavLogoWrapper";
import { ScreenRes } from "./../../hooks/ScreenRes";
import useJump from '../../hooks/useJump';
function Search(props) {
  const dispatch = useDispatch();
  const inputRef = useRef("");
  const location = useLocation();
  const { searchInput } = useSelector((state) => state.game);
  const jumpToHome = useJump();
  const debouncedChangeHandler = debounce(() => {
    if (inputRef.current.value !== searchInput) {
      if (location.pathname.includes("details")) {
        jumpToHome();
      }
      dispatch(setPage(1));
      dispatch(setSearchInput(inputRef.current.value));
    }
  }, 1000);
  ScreenRes(dispatch);
  return (
    <MainNav>
      <MainNavLogoWrapper jumpToHome={jumpToHome} />
      <MainNavSearch>
        <FontAwesomeIcon icon={faSearch} />
        <SearchInput
          inputRef={inputRef}
          debouncedChangeHandler={debouncedChangeHandler}
        />
      </MainNavSearch>
    </MainNav>
  );
}

export default Search;
