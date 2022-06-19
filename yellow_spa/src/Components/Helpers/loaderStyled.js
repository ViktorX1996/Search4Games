import  styled  from 'styled-components';

export const LoaderContainerStyled = styled.div`

display: flex;
justify-content: center;
align-items: center;

@media (min-width: 2560px) {
        height: 850px;
    }

@media (min-width: 1440px) and (max-width: 2560px) {
        height: 650px;
}

@media (min-width: 1024px) and (max-width: 1440px) {
        height: 650px;
}

@media (min-width: 768px) and (max-width: 1024px) {
        height: 600px;
}

@media (min-width: 425px) and (max-width: 768px) {
        height: 500px;
}

@media (min-width: 375px) and (max-width: 425px) {
        height: 450px;
}

@media (min-width: 320px) and (max-width: 375px) {
        height: 380px;
}

@media (max-width: 320px) {
        height: 310px;
}`;

export const Loader = styled.div`
  border: 1px solid red;
  border: ${props => props.isGray ? "0.8rem solid gray" : "0.8rem solid var(--text)"};
  border-top: 0.8rem solid transparent;
  border-bottom: 0.8rem solid transparent;
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  animation: spin 1.5s linear infinite;
  margin: ${props => props.isGray ? "0 auto" : "40vh auto"};
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(-60deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
`;