import React from 'react';
import styles from './Increment.module.css';

class Increment extends React.Component{

    onButtonClick = () => {

            this.props.increment(this.props.data.currentValue);

    };
  render = () => {
      let disabled = this.props.data.currentValue === this.props.data.maxValue;
    return (
        <div className={styles.increment}>
            <button onClick={this.onButtonClick} disabled={disabled}>Inc</button>

        </div>
    );
  }

}

export default Increment;
