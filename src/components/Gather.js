import React from 'react';
import styled from 'styled-components';





const Gather =  () => {
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
     <p>/ˈɡaT͟Hər/

            Verb	1. come together; assemble or accumulate.</p>

            <p>Here at gather we want to help you connect with your people.  Invite your friends and family to all participate in a dinner of your design.  Everyone can choose a dish to bring and Gather will provide the recipes.  </p>

            <p>Because life is great when we gather!</p>

      
      </Text>  
         
      </Banner>
    
  );
};

export default Gather;