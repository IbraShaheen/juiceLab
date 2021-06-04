// library
import {createGlobalStyle} from "styled-components";
import styled from "styled-components";


export const theme = {

    mainColor:"#F1FAEE",
    backgroundColor:"#B7D0E9",
    textColor:"#1a1a00"
 };
 

export const GlobalStyle = createGlobalStyle`

body{
background-color:${props=> props.theme.backgroundColor};}
`;

export const ProductsParent = styled.h1`
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 1.5%;
      
      //form centered-item
      align-items: center;
      text-align: center;

      p{
          font-size: 16px;
          font-weight:lighter;
      }
`;

export const CenteredItem = styled.div`
    align-items: center;
    text-align: center;
`;


export const JuiceItem = styled.img`
    width: 220px;
    height: 220px;
    border-radius: 10%;
    margin: 0 20px;
`;
