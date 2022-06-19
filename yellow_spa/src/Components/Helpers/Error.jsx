import React from "react";
import { ErrorContainer } from "./errorStyled";

export function Error({ fetchDescData }) {
  return (
    <ErrorContainer>
      <div>
        Something went wrong, please{" "}
        <b
          onClick={() => {
            fetchDescData();
          }}
        >
          restart
        </b>{" "}
        the page
      </div>
    </ErrorContainer>
  );
}
