import React from 'react';
import styles from './Reset.module.css'


class Reset extends React.Component{

    onButtonClick = () => {
        this.props.reset()
    };

  render = () => {
    return (
        <div className={styles.reset}>
            <button onClick={this.onButtonClick}>Reset</button>

        </div>
    );
  }

}

export default Reset;
