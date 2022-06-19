import React from "react";
import { GameLinksContentStyled } from "./gameLinksStyled";

function GameLinksContent({ website, reddit_url }) {
  return (
    <GameLinksContentStyled>
      {website && (
        <>
          <h4>Website: </h4>
          <h4>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="desc__link"
              href={website}
            >
              {website}
            </a>
          </h4>
        </>
      )}

      {reddit_url && (
        <>
          {" "}
          <h4>Reddit: </h4>
          <h4>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="desc__link"
              href={reddit_url}
            >
              {reddit_url}
            </a>
          </h4>
        </>
      )}
    </GameLinksContentStyled>
  );
}

export default GameLinksContent;
