import React from 'react';

function Card(props) {
    return (
            <div className="card">
              <img src={props.avatar}
                alt="Avatar"
                className="card__img"
              />
              <h2><b>{props.title}</b></h2>
              <div className="card__rating__date">
                <span>{props.rating}</span>
                <span>{props.timeStamp}</span>
              </div>
            </div>
    );
}

export default Card;