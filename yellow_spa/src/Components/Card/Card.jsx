import React from "react";
import { CardImage, CardWrapper, CardTitle, CardRatingDate } from './cardStyled';
import { useSelector } from 'react-redux';
import useJump from '../../hooks/useJump';

function Card({id,avatar,title,rating,timeStamp}) {
  const isOpen = useSelector(state => state.game.isOpen);
 const jumpToDetails = useJump(id)
  return (
    <CardWrapper opacityActive={isOpen} onClick={jumpToDetails}>
      <CardImage src={avatar} alt="Avatar"/>
      <CardTitle>{title}</CardTitle>
      <CardRatingDate>
        <span>{rating}</span>
        <span>{timeStamp}</span>
      </CardRatingDate>
    </CardWrapper>
  );
}

export default Card;
