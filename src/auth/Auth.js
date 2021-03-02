import React from 'react'
// import { Col, Button, Card} from 'reactstrap';     
import Login from "./Login";
import Register from "./Register";
import { useState, useEffect } from "react";



const Auth = (props) => {
  const [toggle, setToggle] = useState(false);
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState
  ("password");

  // const handleSubmit = () => {
  // console.log(email, password);
  // };

 
    return(
      <div id='auth'>
           
            {toggle ? (
            
                // <Col md="6" className="login-col">
                    <Login updateToken={props.updateToken}
                    setPassword={setPassword}
                    setUsername={setEmail}
                    username={email}
                    password={password}/>
                // </Col> 
                ):      
                (
                // <Col md="6">
                    <Register updateToken={props.updateToken}
                    setPassword={setPassword}
                    setUsername={setEmail}
                    username={email}
                    password={password}
                    />
                // </Col>
                ) }
                {/* <Button className="btn" color="success" size="small" onClick={toggle ? handleSubmit: handleHotdog}>Submit</Button> */}

                <a href className={toggle ? "link" : ""} onClick={() => setToggle(!toggle)}>
                  {toggle
                    ? "I do not have an account. Register here."
                    : "I already have an account. Login here."}
                </a>
            
              </div> 
    
    );
}

export default Auth;