import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import styled, {createGlobalStyle} from "styled-components"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


//глобальные стили
const Global = createGlobalStyle` 
  *{
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    box-sizing: border-box;
  }

`

root.render(
  
    <>
      <Global />
      <App />
    </>
   
);