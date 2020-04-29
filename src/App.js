import React from 'react';
import './App.css';
import NavBar from './components/NavBarM/NavBar';
import Conversations from './components/Conversations/Conversations';


function App() {
  const convs = [
    {
      name: 'Antosha',
      id: 1
    },
    {
      name: 'Vasya',
      id: 2
    },
    {
      name: 'Mom',
      id: 3
    }
  ]
    return (
    <>
    <NavBar/>
    <Conversations conversations={convs}/>
    </>
  );
}

export default App;
