import React, { useState } from "react";
import {
  CardImage,
  CardWrapper,
  CardTitle,
  CardRatingDate,
} from "./cardStyled";
import { useSelector } from "react-redux";
import useJump from "../../hooks/useJump";
import SkeletonCard from './Skeleton/SkeletonCard';
function Card({ id, avatar, title, rating, timeStamp }) {
  const [loaded, setLoaded] = useState(false);
  const isOpen = useSelector((state) => state.game.isOpen);
  const jumpToDetails = useJump(id);
  const onLoad = () => setLoaded(() => true);
  return (
    <>
      <CardWrapper
        style={{
          display: loaded ? "flex" : "none",
        }}
        opacityActive={isOpen}
        onClick={jumpToDetails}
      >
        <CardImage src={avatar} alt="Avatar" onLoad={onLoad} />
        <CardTitle>{title}</CardTitle>
        <CardRatingDate>
          <span>{rating}</span>
          <span>{timeStamp}</span>
        </CardRatingDate>
      </CardWrapper>
      {!loaded && <SkeletonCard />}
    </>
  );
}

export default Card;
