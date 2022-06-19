import styled from "styled-components";
import { size } from './../mediaStyled';

export const FilterSection = styled.section`
@media (max-width: ${size.mobileS}) {
    flex-direction: column;
}
      width: 95%;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      transition: all 1s;
      align-items: center;
`;