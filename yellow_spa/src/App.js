import React from "react";
import "./index.css";
import useMediaQuery from "./hooks/useMediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowUp, faArrowDown, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import imgAvatar from '../src/common/images/img_avatar.png'
import DescriptionPage from "./Components/DescriptionPage";

function App() {
  // You can use any @media property
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const isMobile = useMediaQuery('(max-width: 599px)');
  const isTablet = !isDesktop && !isMobile;

  return (
    <div className="App">
      {/* <Navbar isDesktop={isDesktop} isMobile={isMobile} isTablet={isTablet} /> */}
      <nav>
        <div
          className="navbar__logo"
        >RAWG</div>
        <div className="navbar__container">
          <FontAwesomeIcon icon={faSearch} className="navbar__icon" />
          <input placeholder="Search for games" type="search" className="navbar__input" />
        </div>
      </nav>

      <section>

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
        <section className="global__card__container">
          <div class="card">
            <img src={imgAvatar}
              alt="Avatar"
              className="card__img"
              />
            <div class="card__container">
              <h2><b>Title</b></h2>
              <div className="card__rating__date">
                <span>5.22</span>
                <span>02.05.2022</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <DescriptionPage />

    </div>
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