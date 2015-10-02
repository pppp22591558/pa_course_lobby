/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import Navigation from '../Navigation';

@withStyles(styles)
class Header extends Component {
  render() {
    return (
      <div className="main-nav">
        <div className="nav-content">
          <RoleOptions/>
          <div className="nav-logo">
            <a href="/"><img src={require('../../public/images/courses_lobby_logo.png')} alt="PaGamO logo"/></a>
          </div>
          <UserPanel/>
          <HiddenSideBar/>
        </div>
      </div>
    )
  }
}

class RoleOptions extends Component {
  state = {
    activeRole: 'Student'
  }
  componentDidMount(){
    console.log(this.state.activeRole);
  }
  render() {
    return(
      <ul className="role-options">
        <li><a href="#"><img onClick={this.handleClick} src={require('../../public/images/role1.png')}/></a></li>
        <li><a href="#"><img onClick={this.handleClick} src={require('../../public/images/role2.png')}/></a></li>
        <li><h5><span className="role">Role:</span> {this.state.activeRole}</h5></li>
      </ul>
    )
  }
}

class UserPanel extends Component {
  render(){
    return(
      <ul className="user-panel">
        <li><a href="#"><img src={require('../../public/images/list.svg')}/></a></li>
        <li className="purchase-cart">
          <a href="#"><img src={require('../../public/images/cart.svg')}/></a>
          <div className="cart-popup"></div>
        </li>
        <li><h5><a href="#">Hi, Neil</a></h5></li>
      </ul>
    )
  }
}

class HiddenSideBar extends Component {
  render(){
    return(
      <div style={{display:'none'}} className="hidden-sidebar">
        <ul>
          <li>list item 1</li>
          <li>list item 2</li>
          <li>list item 3</li>
          <li>list item 4</li>
          <li>list item 5</li>
        </ul>
      </div>
    )
  }
}

export default Header;
