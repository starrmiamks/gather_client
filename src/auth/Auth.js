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
             <Register updateToken={props.updateToken}
             setPassword={setPassword}
             setUsername={setEmail}
             username={email}
             password={password}
             />     

                ):      
                (
                  <Login updateToken={props.updateToken}
                  setPassword={setPassword}
                  setUsername={setEmail}
                  username={email}
                  password={password}/>
                   
                
                ) }
                {/* <Button className="btn" color="success" size="small" onClick={toggle ? handleSubmit: handleHotdog}>Submit</Button> */}

                <a href className={toggle ? "link" : ""} onClick={() => setToggle(!toggle)}>
                  {toggle
                    ? "I already have an account. Login here."
                    : "I do not have an account. Register here."}
                </a>
            
              </div> 
    
    );
}

export default Auth;