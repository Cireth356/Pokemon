import React from 'react';
import './App.css';
import List from './components/List';
import Details from './components/Details';
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <div className="topLeftBorder"></div>
          <div className="topCurve1"></div>
          <div className="topCurve2"></div>
          <div className="bottomLeftBorder"></div>
          <List></List>
        </div>
        <div className="rigth">
          <div className="topLeftBorderRigth"></div>
          <div className="topCurve2Rigth"></div>
          <div className="topCurve1Rigth"></div>
          <div className="bottomLeftBorderRigth"></div>
          <Details></Details>
        </div>
      </div>
    </div>
  );
}

export default App;
