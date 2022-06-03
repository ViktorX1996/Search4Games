import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import Search from './Components/Search/Search';
import Filters from './Components/Filters/Filters';

function App() {
  // You can use any @media property
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const isMobile = useMediaQuery('(max-width: 599px)');
  const isTablet = !isDesktop && !isMobile;
  // const gamesList = useSelector(state => state.gameSlice.gamesList);
  const gamesList = useSelector(state => state.game.gamesList);
  const searchInput = useSelector(state => state.game.searchInput);
  const dispatch = useDispatch()
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    dispatch(getAllGames({ page: page, pageSize: pageSize, search: searchInput }))
    setPage(page + 1)
  }, [dispatch,searchInput])
  console.log(page);
  
  return (
    <div className="App">
      <Search />
      <Filters />
      <main>
        <section
          className="global__card__container"
        >
          <InfiniteScroll
            dataLength={gamesList.length}
            next={() => {
              setPage(page + 1)
              dispatch(getAllGames({ page: page, pageSize: pageSize, search: searchInput }))
            }}
            hasMore={true}
            loader={<h1 className='rainbow-text-loop'>Loading...</h1>}
          >
            <div className="Gallery">

              {gamesList.map((item,i) =>
                <Card
                  key={i}
                  title={item.name}
                  rating={item.rating}
                  avatar={item.background_image}
                  timeStamp={item.released}
                />
              )}
            </div>
          </InfiniteScroll>
        </section>
      </main>

      {/* <DescriptionPage /> */}

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