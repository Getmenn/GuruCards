import styled, { createGlobalStyle } from "styled-components";

export const StyledSpan = styled.span`
  color: #00A0AB;
  cursor: pointer;
  margin: 0 5px 0 0px;
`;

export const Image = styled.img`
    border-radius: 8px 8px 0px 0px;
    width: 224px;
    height: 260px;

    @media (max-width: 370px) {
        width: 200px;
        height: 240px;
    }
`

export const AppWrapper = styled.div`
    width:100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
`

//глобальные стили
export const Global = createGlobalStyle` 
  *{
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    box-sizing: border-box;
  }

`