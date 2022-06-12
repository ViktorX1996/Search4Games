import  styled  from 'styled-components';

export const RainbowTitle = styled.h4`
    font-size: 1.5rem;
    display: inline-block;
    margin-top: 1rem;
    text-shadow: 2px 2px 4px #000000;
    -webkit-animation: rainbow 5s infinite; 
    display: block;
    text-align: center;
    border-top: 1px solid cyan;
    border-bottom: 1px solid cyan;
    font-weight: 800;

    @keyframes rainbow{
    0%{color: orange;}  
    10%{color: purple;} 
    20%{color: red;}
    30%{color: CadetBlue;}
    40%{color: yellow;}
    50%{color: coral;}
    60%{color: green;}
    70%{color: cyan;}
    80%{color: DeepPink;}
    90%{color: DodgerBlue;}
    100%{color: orange;}
  }
`;
