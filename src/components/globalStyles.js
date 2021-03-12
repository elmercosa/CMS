import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  div{
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  html{
    scroll-behavior:smooth;
  }
  `;
