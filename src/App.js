import React from 'react';
import './App.css';
import Increment from "./Increment/Increment";
import Reset from "./Reset/Reset";
import Screen from "./Screen/Screen";


class App extends React.Component{
  render = () => {
    return (
        <div className='App'>
          <Screen/>
          <Increment/>
          <Reset/>

        </div>
    );
  }

}

export default App;
