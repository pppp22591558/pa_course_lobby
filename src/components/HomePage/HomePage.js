import React, { PropTypes, Component } from 'react';
// import styles from './HomePage.css';
import withStyles from '../../decorators/withStyles';

// @withContext
// @withStyles(styles)
class HomePage extends Component {
  render(){
    return(
      <div className="homepage-wrapper">
        <h1>This is homepage wrapper</h1>
      </div>
    )
  }
}

export default HomePage;
