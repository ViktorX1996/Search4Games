import styled, { css } from "styled-components";
import { device } from "../../mediaStyled";
import { size } from './../../mediaStyled';

const reusableBackground = (aniType) => css`
  background: linear-gradient( to right, #4f4f4f, #494949 20%, #4f4f4f 80% );
  animation: ${aniType} 1.5s ease-in-out infinite;
`

export const SkeletonWrapper = styled.div`
opacity: 0.5;
transition: opacity 0.3s ease;
@media ${device.laptopL} {
    flex-basis: calc(100% / 5 - 20px);
}
@media ${device.laptop} and (max-width: ${size.laptopL}) {
    flex-basis: calc(100% / 4 - 20px);
}
@media ${device.tablet} and (max-width: ${size.laptop}) {
    flex-basis: calc(100% / 3 - 20px);
}
@media ${device.tabletM} and (max-width: ${size.tablet}) {
    flex-basis: calc(100% / 2 - 20px);
}
@media (max-width: ${size.tabletM}) {
    flex-basis: calc(100% - 20px);
}

  cursor: pointer;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #1f1f1f;
  margin: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 4 - 20px);
  flex-shrink: 0;
  &:hover {
    transition: all 0.3s ease-in-out;
    box-shadow: 1px 1px 5px 1px gray;
  }
  
  @keyframes shine {
  0% {
    background-position: -32px;
  }
  40%,
  100% {
    background-position: 208px;
  }
}
@keyframes shine-btm {
  0% {
    background-position: -12px;
  }
  40%,
  100% {
    background-position: 108px;
  }
}
`;



export const SkeletonImage = styled.div`
 ${reusableBackground 
  (props => props.aniType="shine")}

  border-radius: 10px 10px 0 0;
  object-fit: cover;
    height: 25vh;
    width: 100%; 
    display: block;
`;
export const SkeletonTitle = styled.h2`
  ${reusableBackground 
  (props => props.aniType="shine")}
  
  padding: 10px !important;
  margin: 10px;
  height: 15px;
  border-radius: 5px;
  display: block;
  /* color: white;
  margin: 0;
  padding: 10px;
  word-wrap: break-word;
  font-weight: 600; */
`;
export const SkeletonRatingDate = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: auto;
  flex-grow: 1;
  align-items: flex-end;
  & > span {
    ${reusableBackground 
  (props => props.aniType="shine-btm")}
  width: 100%;
  margin: 10px;
  height: 15px;
  border-radius: 5px;
  display: block;
  }
`;
