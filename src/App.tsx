import React from 'react';
import logo from './logo.svg';
import './App.css';
import CompSatu from "./Components/authComp/inOne.Comp"

function App() {
  return (
    <div className="">
    {/* <div className="App"> */}

      <div className="App h-screen flex justify-center items-center bg-gray-100">
        <CompSatu textProp={"prop Pertama"} helloInput={"ini-prop-yang-diubah-jadi-state"} />
      </div>
      
    </div>
  );
}

export default App;
