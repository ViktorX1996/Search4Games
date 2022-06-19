import styled from "styled-components";

export const GameAboutContentStyled = styled.div`
    padding: 10px;
    border: 1px solid var(--text);
    border-radius: 10px;
    & span{
                position: absolute;
                transform: translateY(-37px);
                margin-left: 5%;
                margin-top: 15px;
                background-color: black;
                border-left: 1px solid var(--text);
                border-right: 1px solid var(--text);
                font-weight: 700;
                letter-spacing: 3px;
    }
    & b,p {
      margin: 15px 0 15px 0;
    }
`;