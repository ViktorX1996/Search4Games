import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  word-wrap: break-word;
  text-align: center;
  border: 5px solid #00c3ff;
  border-radius: 5px;
  margin: 30vh auto;
  height: 20vh;
  width: 50vw;
  & b {
  font-weight: bold;
  color: #ffc400;
  text-decoration: underline;
  } :hover {
    cursor: pointer;
  }
`;