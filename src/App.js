import React from 'react';
import './App.css';
import Increment from "./Increment/Increment";
import Reset from "./Reset/Reset";
import Screen from "./Screen/Screen";


class App extends React.Component{

  state = {
    currentValue: 0,
    maxValue: 5,
    initialVal: 0
  };


  render = () => {
    return (
        <div className='App'>
          <Screen data={this.state}/>
          <Increment/>
          <Reset/>

        </div>
    );
  }

}

export default App;
