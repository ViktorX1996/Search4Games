import styled from "styled-components";
import { device, size } from './../../mediaStyled';

export const GameTitleDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
`;
export const GameTitleText = styled.h2`
    color: var(--text);
    letter-spacing: 0.1em;;
    &:hover img{
 filter: invert(49%) sepia(43%) saturate(2308%) hue-rotate(185deg) brightness(98%) contrast(87%);
transition: 0.3s;
}
`;
export const Container = styled.div`
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
  grid-template-columns: 1fr; 
  grid-template-rows: auto;
  grid-template-areas: 
    "SliderMain"
    "GameInfo"
    "AboutInfo"
    "LinksInfo"
}
  word-break: break-word;
  display: grid;
  grid-template-columns: 0.7fr 1fr 0.7fr;
  grid-template-rows: auto auto;
  gap: 0px 0px;
  row-gap: 10px;
  grid-auto-flow: row;
  grid-template-areas: ${props => props.aboutFullWidth ? 
  `
    "GameInfo SliderMain SliderMain"
    "AboutInfo AboutInfo AboutInfo"` : 
    `
    "GameInfo SliderMain SliderMain"
    "AboutInfo AboutInfo LinksInfo";`
    };
  /* height: 80vh; */
`;
export const GameInfo = styled.div`
  grid-area: GameInfo;
  padding: 0 10px 0 10px;
  /* border: 1px solid red; */
`;
export const SliderMain = styled.div`
  grid-area: SliderMain;
  /* border: 1px solid blue; */
`;
export const AboutInfo = styled.div`
@media (max-width: ${size.tabletM}) {
  padding-right: 10px;
  padding-bottom: 0;
}
  grid-area: AboutInfo;
  padding-left: 10px;
  padding-bottom: 10px;
  /* border: 1px solid yellow; */
`;
export const LinksInfo = styled.div`
    grid-area: LinksInfo;
    padding: 0 10px 0 10px;
    padding-bottom: 10px;
    /* border: 1px solid green; */
`;
