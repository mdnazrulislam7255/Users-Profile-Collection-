import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Profile from './Profile/Profile';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Profile></Profile>
    </div>
  );
}

export default App;
