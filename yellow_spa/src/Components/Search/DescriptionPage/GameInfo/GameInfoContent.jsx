import { Rating } from "./Rating";
import React from "react";
import { GameInfoContentStyled } from "./gameInfoStyled";
import ParentPlatforms from "./ParentPlatforms";
function GameInfoContent({
  released,
  developers_name,
  genres_name,
  esrb_rating_name,
  rating,
  metacritic,
  parentPlatforms,
  playtime,
}) {
  return (
    <GameInfoContentStyled>
      {released && (
        <p>
          Released: <span>{released}</span>
        </p>
      )}
      <p>
        Developer: <span>{developers_name}</span>
      </p>
      {genres_name && (
        <p>
          Genre: <span>{genres_name}</span>
        </p>
      )}
      {esrb_rating_name && (
        <p>
          Age rating: <span>{esrb_rating_name}</span>
        </p>
      )}
      <Rating rating={rating} />
      {metacritic && (
        <p>
          Metacritic: <span>{metacritic}</span>
        </p>
      )}
      <p>
        Available on: <ParentPlatforms parentPlatforms={parentPlatforms} />
      </p>
      {playtime !== 0 && (
        <p>
          Playtime: <span>{playtime}h</span>
        </p>
      )}
    </GameInfoContentStyled>
  );
}

export default GameInfoContent;
