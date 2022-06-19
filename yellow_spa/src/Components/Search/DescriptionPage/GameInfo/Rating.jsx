import React from "react";
import styled from "styled-components";

export const RatingStyled = styled.p`
  /* & span:nth-child(1){
    padding-left:10px ;
    color: var(--desk-text-gray);
  } */
  & span {
    color: ${(props) => props.rating > 4 && "green"};
    color: ${(props) => props.rating <= 4 && props.rating >= 3 && "orange"};
    color: ${(props) => props.rating <= 2.9 && "red"};
  }
`;
export function Rating({ rating }) {
  return (
    <RatingStyled rating={rating}>
      Rating: <span>{rating}</span>
    </RatingStyled>
  );
}
