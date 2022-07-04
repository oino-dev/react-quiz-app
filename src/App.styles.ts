import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}

body{
  background-color: azure;
  display: flex;
  justify-content: center;
}

*{
  box-sizing: border-box;
  font-family: 'Jost', sans-serif;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: 'Jost', sans-serif;

    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    outline: none;
    padding: 10px 25px;
    font-size: 18px;
    border: 2px solid #0085a3;
    background: steelblue;
    color: #fff;
    font-weight: 500;
    transition: ease-in-out all 0.3s;

    &:hover {
      background: transparent;
      color: #0085a3;
    }
  }
`;
