import styled from "styled-components";
// import { device } from "../mediaStyled";
import { device, size } from './../mediaStyled';

export const MainNav = styled.nav`
    @media  (max-width: ${size.mobileL}) {
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

export const MainNavLogo = styled.div`
        cursor: pointer;
        color: white;
        font-weight: 700;
        font-size: 1.5rem;
        font-weight: bold;
        text-decoration: none;
        text-transform: uppercase;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        & > span {
            color: var(--text);
            animation: rotating 3s linear infinite;
            @keyframes rotating{
                from {
                    -ms-transform: rotate(0deg);
                    -moz-transform: rotate(0deg);
                    -webkit-transform: rotate(0deg);
                    -o-transform: rotate(0deg);
                    transform: rotate(0deg);
                }
                to {
                    -ms-transform: rotate(360deg);
                    -moz-transform: rotate(360deg);
                    -webkit-transform: rotate(360deg);
                    -o-transform: rotate(360deg);
                    transform: rotate(360deg);
                }
            }
        }
`;
export const MainNavSearch = styled.div`
@media ${device.laptopL} {
    width: 30%;
    justify-content: start;
}
@media ${device.laptop} and (max-width: ${size.laptopL}) {
    width: 35%;
    justify-content: start;
}
@media ${device.tablet} and (max-width: ${size.laptop}) {
    width: 35%;
    justify-content: start;
}
@media ${device.tabletM} and (max-width: ${size.tablet}) {
    width: 35%;
    justify-content: start;
}
@media (max-width: ${size.mobileS}) {
    box-sizing: border-box;
    justify-content: start;
    overflow: hidden;
    gap: 0px;
}
    display: grid;
    grid-template-columns: auto 1fr;  
    grid-template-rows: 1fr;
    gap: 12px;
    border-radius: 32px;
    background: #fafafa;
    padding: 6px;
    color: #a3a3a3;
    cursor: text;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4a4a4a !important;
    & > input {
    @media ${device.laptop} {
        width:100%;
    }
    @media (max-width: ${size.mobileL}) {
        width:100%;
    }
    @media ${device.mobileS}{
        box-sizing: border-box;
    }
    outline: none;
    border: none;
    background: transparent;
    border-radius: 30px;
      height: 25px;
      border: var(--dark);
    color: white;
    }
    & > input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    background: red;
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    }
    & > svg {
        padding-left: 10px;
    }
`;