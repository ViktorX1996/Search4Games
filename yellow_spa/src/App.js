import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import "./index.css";
import "./test.css"
import useMediaQuery from "./hooks/useMediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowUp, faArrowDown, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import imgAvatar from '../src/common/images/img_avatar.png'
import DescriptionPage from "./Components/DescriptionPage";
import { getAllGames } from './Redux/gameReducer';
import Card from './Components/Card/Card';
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  // You can use any @media property
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const isMobile = useMediaQuery('(max-width: 599px)');
  const isTablet = !isDesktop && !isMobile;
  // const gamesList = useSelector(state => state.gameSlice.gamesList);
  const gamesList = useSelector(state => state.game.gamesList);
    const dispatch = useDispatch()
  
    useEffect(() => {
        dispatch(getAllGames({page:2, pageSize: 10}))
    }, [dispatch])

  return (
    <div className="App">
      {/* <Navbar isDesktop={isDesktop} isMobile={isMobile} isTablet={isTablet} /> */}
      <nav className="main__nav">
        <div
          className="navbar__logo"
        >RAWG</div>
        <div className="navbar__container">
          <FontAwesomeIcon icon={faSearch} className="navbar__icon" />
          <input placeholder="Search for games" type="search" className="navbar__input" />
        </div>
      </nav>

      <section className="filter__container__section">

        <div className="filter__container">
          <div className="dropdown">
            <button className="dropbtn">Order by: Date
              <FontAwesomeIcon icon={faAngleDown} className="dropbtn__arrow" />
            </button>
            <div className="dropdown-content">
              <a href="#">Rating <FontAwesomeIcon icon={faArrowUp} /></a>
              <a href="#">Rating <FontAwesomeIcon icon={faArrowDown} /></a>
              <a href="#">Date <FontAwesomeIcon icon={faArrowUp} /></a>
              <a href="#">Date <FontAwesomeIcon icon={faArrowDown} /></a>
            </div>
          </div>
        </div>

        <div className="filter__container">
          <div className="dropdown">
            <button className="dropbtn">Platform: All
              <FontAwesomeIcon icon={faAngleDown} className="dropbtn__arrow" />
            </button>
            <div className="dropdown-content">
              <a href="#">PC </a>
              <a href="#">PlayStation  </a>
              <a href="#">Xbox  </a>
              <a href="#">iOS </a>
            </div>
          </div>
        </div>

      </section>

      <main>
        {/* <section className="global__card__container">
          <div className="card">
            <img src={imgAvatar}
              alt="Avatar"
              className="card__img"
              />
            <div className="card__container">
              <h2><b>Title</b></h2>
              <div className="card__rating__date">
                <span>5.22</span>
                <span>02.05.2022</span>
              </div>
            </div>
          </div>
        </section> */}
        <section
          className="global__card__container"
        >
          {/* <div className="card__tablet"> */}
          <div className="Gallery">

            {/* <div className="card__container"> */}
            {gamesList.map(item => 
            <Card
            title={item.name}
            rating={item.rating}
            avatar={item.background_image}
            timeStamp={item.released}
            />
            )}
          </div>

      </section>

    </main>

      {/* <DescriptionPage /> */ }

    </div >
  );
}

// Navbar component

// const Navbar = ({isDesktop, isTablet, isMobile}) => (
//   <nav className={
//     `base${isMobile ? ' mobile' : ''}${isTablet ? ' tablet' : ''}${isDesktop ? ' desktop' : ''}`
//   }>
//   </nav>
// );




export default App;