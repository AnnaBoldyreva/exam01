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
          <div className='wrapper'>
          <Screen data={this.state}/>
            <div className='buttonWrapper'>
          <Increment increment={this.increment} data={this.state}/>
          <Reset reset={this.reset}/>
            </div>
          </div>

        </div>
    );
  }

}

export default App;
