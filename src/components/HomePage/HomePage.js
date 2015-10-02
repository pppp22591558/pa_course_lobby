import React, {Component} from 'react';
import styles from './HomePage.css';
import withStyles from '../../decorators/withStyles';
import SubHeader from './SubHeader';
import AppStore from '../../stores/app-store';

@withStyles(styles)


class HomePage extends Component {
  handleClick(){
    AppStore.addItem('{id:1, name: "item1"}');
  }
  render(){
    return(
      <div>
        <h1 className="HomePage-h1" onClick={this.handleClick}>HomePage fewf</h1>
        <SubHeader/>
      </div>
    )
  }
}

export default HomePage;
