import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header';

function App() {
  const darkMode = false;
  
  return (
    <div className="app">
     <Header darkMode={darkMode} title='React 2.0' />
    </div>
  );
}

export default App;
