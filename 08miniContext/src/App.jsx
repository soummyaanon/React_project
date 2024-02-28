/* eslint-disable no-unused-vars */
import React from 'react';
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";
import './App.css'; // Import the CSS file

function App() {
  return (
    <UserContextProvider>
      <div className="app">
        <h1>Mini Context</h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
