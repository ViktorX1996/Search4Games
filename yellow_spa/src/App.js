import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./index.css";
import "./test.css"
import useMediaQuery from "./hooks/useMediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DescriptionPage from "./Components/DescriptionPage";
import { getAllGames, setPage } from './Redux/gameReducer';
import Card from './Components/Card/Card';
import InfiniteScroll from "react-infinite-scroll-component";
import Search from './Components/Search/Search';
import Filters from './Components/Filters/Filters';

function App() {
  // You can use any @media property

  // const gamesList = useSelector(state => state.gameSlice.gamesList);
  const gamesList = useSelector(state => state.game.gamesList);
  const searchInput = useSelector(state => state.game.searchInput);
  const page = useSelector(state => state.game.page);
  const count = useSelector(state => state.game.count);
  const isEndOfList = useSelector(state => state.game.isEndOfList);
  const selectedPlatform = useSelector(state => state.game.selectedPlatform)
  const selectedSort = useSelector(state => state.game.selectedSort)
  const dispatch = useDispatch()
  // const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(17) 

  useLayoutEffect(() => {
    dispatch(getAllGames({ page: page, pageSize: pageSize, search: searchInput }))
    dispatch(setPage(page + 1))
  }, [dispatch, searchInput,selectedPlatform,selectedSort])
  console.log(page);
  
  return (
    <div className="App">
      
      <Filters />
      <main>
        <section
          className="global__card__container"
        >
          <InfiniteScroll
            dataLength={gamesList.length}
            next={() => {
              dispatch(setPage(page + 1));
              dispatch(getAllGames({ page: page, pageSize: pageSize, search: searchInput }))
            }}
            hasMore={!isEndOfList}
            loader={(count < 1) ? <h4 className='rainbow'>⚠ Games not found ⚠	</h4> : <h4 className='rainbow'>Loading...</h4>} 
            endMessage={<h4 className='rainbow'>🚧 END OF LIST 🚧</h4>}
          >
            <div className="Gallery">

              {gamesList.map((item,i) =>
                <Card
                  key={i}
                  id={item.id}
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