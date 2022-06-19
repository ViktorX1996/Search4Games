import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { CardContainer } from "./CardContainer";
const MainApp = (props) => {
  const gamesList = useSelector((state) => state.game.gamesList);
  return (
    <CardContainer>
      {gamesList.map((item, i) => (
        <Card
          key={i}
          id={item.id}
          title={item.name}
          rating={item.rating}
          avatar={item.background_image}
          timeStamp={item.released}
        />
      ))}
    </CardContainer>
  );
};

export default MainApp;
