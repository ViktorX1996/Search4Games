import styled from "styled-components";


export const GameInfoContentStyled = styled.div`
    /* border: 1px solid red; */
    
    border-radius: 10px;
    background-color: var(--info);
    /* background: #55555582; */
    height: 100%;
    & > p {
        margin: 0;
        padding: 10px;
        color: var(--desc_text_grey);
        font-weight: 500;
        word-wrap: break-word;
    }

 `;

