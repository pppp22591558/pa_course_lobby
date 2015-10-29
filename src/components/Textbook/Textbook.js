/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
// import AppStore from '../../stores/app-store';
import styles from './Textbook.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)

class Textbook extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    textbook: {
      id: 1423,
      name: "國小國語六上",
      image: require('../../public/images/item1.png'),
      publisher: {
        id: 2,
        name: "康軒文教 Kang Hsuan",
      },
      publish_year: "2014",
      publish_date: "yyyymmdd",
      description: "國小通用版題庫：康軒、適翰版、適南版、何嘉仁的國英數字社五科題目唷！康軒授權碼使用方式：2015年9月1日起至9月30日止，進入PaGamO 國小課程可享免費體驗至2015年11月30日止！請拿到授權碼的同學們9月1日記得輸入唷！",
      language: "中文",
      rating: 3.74,
      ratingUserCount: 23,
      recommendedTextbooks: [
        {
          name: "小六康軒數學",
          publisher: "康軒文教",
          image: require('../../public/images/item1.png')
        }, {
          name: "University Calculus I: jeaosufisifhoehsa dsaf sd ",
          publisher: "Pearson",
          image: require('../../public/images/my_course.png')
        }, {
          name: "University Calculus II: ajsdiofjasd9ofj sadjf9pas sadfa",
          publisher: "Pearson asdiof aosdf aoisu hsaiduoh aoiuhaosdif",
          image: require('../../public/images/my_course.png')
        }, {
          name: "小六康軒數學",
          publisher: "康轩文教",
          image: require('../../public/images/male_plus.png')
        }, {
          name: "University Calculus II: ajsdiofjasd9ofj sadjf9pas sadfa",
          publisher: "Pearson asdiof aosdf aoisu hsaiduoh aoiuhaosdif",
          image: require('../../public/images/my_course.png')
        }, {
          name: "小六康軒數學",
          publisher: "康轩文教",
          image: require('../../public/images/male_plus.png')
        }, {
          name: "University Calculus II: ajsdiofjasd9ofj sadjf9pas sadfa",
          publisher: "Pearson asdiof aosdf aoisu hsaiduoh aoiuhaosdif",
          image: require('../../public/images/my_course.png')
        }, {
          name: "小六康軒數學",
          publisher: "康轩文教",
          image: require('../../public/images/male_plus.png')
        }, {
          name: "University Calculus II: ajsdiofjasd9ofj sadjf9pas sadfa",
          publisher: "Pearson asdiof aosdf aoisu hsaiduoh aoiuhaosdif",
          image: require('../../public/images/my_course.png')
        }
      ],
    }
  };

  render() {
    return (
      <div className="textbook-detail-container">
        <div className="textbook-detail-header">
          <div className="textbook-detail-header-left">
            <img src={this.props.textbook.image} className="textbook-img" />
          </div>
          <div className="textbook-detail-header-main">
            <h3 className="textbook-name">{this.props.textbook.name}</h3>
            <h4 className="textbook-publisher">{this.props.textbook.publish_year}, {this.props.textbook.publisher.name}</h4>
            <TextbookActions />
          </div>
        </div>
        <div className="textbook-detail-description">
          <h3 className="textbook-detail-block-title">Descriptions</h3>
          <p>{this.props.textbook.description}</p>
        </div>
        <div className="textbook-detail-details">
          <h3>Details</h3>

        </div>
        <div className="textbook-detail-recommendation">
          <h3>You might also like</h3>
          <RecommendedTextbooks recommendedTextbooks={this.props.textbook.recommendedTextbooks}/>
        </div>
      </div>
    );
  }

}

class TextbookActions extends Component {
  render() {
    return (
      <div className="textbook-actions">
        <a href="">
          <i className="fa fa-credit-card" />
          <span className="textbook-action-buy-now-text">Buy Now</span>
        </a>
        <a href="">
          <i className="fa fa-shopping-cart" />
          <span className="textbook-action-add-cart-text">Add to Cart</span>
        </a>
        <a href="">
          <i className="fa fa-share-alt" />
          <span className="textbook-action-share-text">Share</span>
        </a>
      </div>
    );
  }
}

class RecommendedTextbooks extends Component {
  render() {
    var recTbs = this.props.recommendedTextbooks;
    var tbCells = recTbs.map(function(tb, index){
      return (
        <li key={index} className="textbook-cell-wrapper">
          <div className="textbook-cell">
            <img src={tb.image} className="textbook-cell-img"/>
            <h5 className="textbook-cell-name" title={tb.name}>{tb.name}</h5>
          </div>
        </li>
      );
    });
    return (
      <div className="recommended-textbooks-wrapper">
        <ul>
          {tbCells}
        </ul>
      </div>
    );
  }
}

export default Textbook;
