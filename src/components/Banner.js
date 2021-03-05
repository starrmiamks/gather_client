import React from 'react';
// import { Jumbotron as Jumbo, Button, Container, Jumbotron } from 'reactstrap';
//import gatherImage from "../assets/gatherImage.jpeg";
import styled from 'styled-components';




const Background =  () => {
const Banner = styled.div`
    background-image: url("https://images.unsplash.com/photo-1511448598600-c01f02a2ee95?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
    width: 100vw;
    max-width: 100%;
    height: 125px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 44%;
    `;

  return (
    
      <Banner style={{padding: "0px"}} id='jumboCss'/>
         
      
    
  );
};

export default Background;