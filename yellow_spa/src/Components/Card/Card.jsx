import React from "react";
import { useNavigate } from "react-router-dom";
import { CardImage, CardWrapper, CardTitle, CardRatingDate } from './cardStyled';

function Card(props) {
  const navigate = useNavigate();

  function jumptoDetails() {
    navigate(`/details/${props.id}`);
  }

  return (
    <CardWrapper onClick={jumptoDetails}>
      <CardImage src={props.avatar} alt="Avatar"/>
      <CardTitle>{props.title}</CardTitle>
      <CardRatingDate>
        <span>{props.rating}</span>
        <span>{props.timeStamp}</span>
      </CardRatingDate>
    </CardWrapper>
  );
}

export default Card;
