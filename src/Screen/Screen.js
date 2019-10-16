import React from 'react';
import styles from './Screen.module.css'


class Screen extends React.Component{
  render = () => {
    return (
        <div className={styles.screen}>
        <div> count: {this.props.data.initialVal}</div>

        </div>
    );
  }

}

export default Screen;
