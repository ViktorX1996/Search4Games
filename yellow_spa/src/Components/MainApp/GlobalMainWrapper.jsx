import React from "react";
import InfiniteScroll  from "react-infinite-scroll-component";
import MainApp from "./MainApp";
import RainbowTitleMain from './RainbowTitleMain';
import { useSelector } from 'react-redux';

export function GlobalMainWrapper({ nextAction, isEndOfList, count }) {
    const gamesList = useSelector(state => state.game.gamesList);
  return (
    <>
      <InfiniteScroll
        dataLength={gamesList.length}
        next={nextAction}
        hasMore={!isEndOfList}
        loader={
          <RainbowTitleMain
            text={count < 1 ? "No games found" : "Loading..."}
          />
        }
        endMessage={<RainbowTitleMain text="🚧 END OF LIST 🚧" />}
      >
        <MainApp />
      </InfiniteScroll>
    </>
  );
}
