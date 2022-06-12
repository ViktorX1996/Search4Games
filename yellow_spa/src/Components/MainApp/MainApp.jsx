import React from "react";
import  styled  from 'styled-components';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
overflow: hidden;
transition: all 3s;
`;
const MainApp = (props) => {
    const gamesList = useSelector(state => state.game.gamesList);
    return (<CardContainer>
        {gamesList.map((item, i) => <Card key={i} id={item.id} title={item.name} rating={item.rating} avatar={item.background_image} timeStamp={item.released} />)}
    </CardContainer>);
}

export default MainApp;