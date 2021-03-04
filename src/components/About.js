import React from 'react';
// import { Jumbotron as Jumbo, Button, Container, Jumbotron } from 'reactstrap';
//import gatherImage from "../assets/gatherImage.jpeg";
import styled from 'styled-components';




const About =  () => {
const Banner = styled.div`
    background-image: url("https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2110&q=80");
    width: 100vw;
    max-width: 100%;
    height: 125px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 44%;
    `;

    const Text = styled.div`
        position: relative;
        text-align: left;
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        color: black;
        padding-right:200px;
        padding-top: 150px;
        padding-bottom: 150px;
        margin-left: 10em
        `;
    const Header = styled.h2`
        font-family: 'Julius Sans One', sans-serif;
        font-size: 40px;
        text-align: center;
        padding: 15px;
        `;

  return (
    
      <Banner style={{padding: "0px"}}>
      <Text>
      <Header>Gather</Header>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      
      </Text>  
         
      </Banner>
    
  );
};

export default About;