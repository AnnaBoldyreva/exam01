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

  increment = (currentValue) => {
    let newValue = currentValue + 1;
      this.setState({
        currentValue: newValue
      })

  };

  reset = () => {
    this.setState({
      currentValue: this.state.initialVal
        }
    )
  };



  render = () => {

    return (
        <div className='App'>
          <Screen data={this.state}/>
          <Increment increment={this.increment} data={this.state}/>
          <Reset reset={this.reset}/>

        </div>
    );
  }

}

export default App;
