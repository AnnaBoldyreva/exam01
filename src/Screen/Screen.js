import React from 'react';
import styles from './Screen.module.css'


class Screen extends React.Component{
  render = () => {
    return (
        <div className={styles.screen}>
        <div>  {this.props.data.currentValue}</div>

        </div>
    );
  }

}

export default Screen;
