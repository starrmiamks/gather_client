import React, { useState, useEffect } from 'react';
import Sitebar from './home/Navbar';
import Auth from './auth/Auth'
// import Favorites from './components/Favorites'
import "./App.css"
import "./components/Search"
// import Search from './components/Search';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken)
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('')
  }

  
  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? 
      <Sitebar token={sessionToken} clickLogout={clearToken} />
    : 
    <Auth updateToken={updateToken} />
  }
  
  return (
    <div>
      {/* <Sitebar clickLogout={clearToken}/> */}
      {protectedViews ()}
      
    </div>
  );
}

export default App;