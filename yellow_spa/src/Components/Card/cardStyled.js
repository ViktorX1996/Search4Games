import styled from "styled-components";
import { device } from "../mediaStyled";
import { size } from '../mediaStyled';

export const CardWrapper = styled.div`
opacity: ${props => props.opacityActive ? 0.5 : 1};
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
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
    box-shadow: 1px 1px 5px 1px #00c3ff;
  }
`;
export const CardImage = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
    height: 25vh;
    width: 100%; 
    display: block;
`;
export const CardTitle = styled.h2`
  color: white;
  margin: 0;
  padding: 10px;
  word-wrap: break-word;
  font-weight: 600;
`;
export const CardRatingDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: auto;
  flex-grow: 1;
  align-items: flex-end;
  & > span {
    margin:  0 10px 0 10px;
    border-top: #00c3ff solid 3px;
  }
`;
