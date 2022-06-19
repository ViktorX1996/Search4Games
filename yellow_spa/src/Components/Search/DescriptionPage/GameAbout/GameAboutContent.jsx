import React from 'react';
import parse from "html-react-parser";
import { GameAboutContentStyled } from './gameAboutStyled';
function GameAboutContent({description}) {
    return (
        <GameAboutContentStyled>
            <span >About</span>
            {parse(description)}
        </GameAboutContentStyled>
    );
}

export default GameAboutContent;