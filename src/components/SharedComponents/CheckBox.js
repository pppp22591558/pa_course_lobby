import React, {Component} from 'react';

class CheckBox extends Component{
  render() {
    return (
      <div className="check-box">
        <input type="checkbox" id={"check-box-" + this.props.id} defaultChecked={this.props.defaultChecked}></input>
        <label htmlFor={"check-box-" + this.props.id}>
          <span className="check">
            <span className="check-icon">
              <i className="fa fa-check"></i>
            </span>
          </span>
          {this.props.children}
        </label>
      </div>
    )
  }
}

export default CheckBox;
