import React, {Component} from 'react';
import AppStore from '../../stores/app-store';

import styles from './HomePage.css';
import withStyles from '../../decorators/withStyles';

// private components
import ProductContent from './ProductContent'

@withStyles(styles)

// class HomePage extends Component {
//   handleClick(){
//     AppStore.addItem('{id:1, name: "item1"}');
//   }
//   render(){
//     return (
//       <div>
//         <h1 className="HomePage-h1" onClick={this.handleClick}>HomePage fewf</h1>
//         <SubHeader/>
//       </div>
//     )
//   }
// }
//
class HomePage extends Component {
  // constructor(props) {
  //
  // }
  static propTypes = {
    currentWorld: React.PropTypes.string,
    bannerImgSrc: React.PropTypes.string,
    panelImg: React.PropTypes.array,
    productByCategory: React.PropTypes.array,
    products: React.PropTypes.array
  };
  static defaultProps = {
    currentWorld: "current-world",
    bannerImg: require('../../public/images/banner.png'),
    panelImgs: [ // panel in banner
      require('../../public/images/male_plus.png'),
      require('../../public/images/tutorial-1.png'),
      require('../../public/images/enter.png'),
      require('../../public/images/my_course.png')
    ],
    productByCategory: [
      {id: "1", name: "category_01"}
    ],
    products: [
      {
        category_id: 1,
        created_at: "2015-10-06T02:41:52.095Z",
        description: "asdfaas jasdif aslo asdjfioasjfo",
        id: 1,
        name: "product_1_c_1"
      }
    ]
  };
  render() {
    return (
      <div className="homepage-wrapper">
        <ContinueGame world={this.props.currentWorld} />
        <MainBanner bannerImg={this.props.bannerImg} panelImgs={this.props.panelImgs}/>
        <ProductContent productByCategory={this.props.productByCategory} products={this.props.products}/>
      </div>
    )
  }
}

class ContinueGame extends Component {
  render() {
    return (
      <div className="continue-game">
        <h4>Continue game in {this.props.world}</h4>
      </div>
    )
  }
}

class MainBanner extends Component {
  render() {
    return (
      <div className="main-banner">
        <div className="main-panel">
          <img className="main-banner-background" src={this.props.bannerImg}></img>
          <FeaturePanel panelImgs={this.props.panelImgs} />
        </div>
      </div>
    )
  }
}

class FeaturePanel extends Component {
  render() {
    return (
      <ul className="feature-panel">
        <li><img src={this.props.panelImgs[0]} /><h4>Join a Course</h4></li>
        <li><a href="/tutorials"><img src={this.props.panelImgs[1]} /><h4>Tutorials</h4></a></li>
        <li><img src={this.props.panelImgs[2]} /><h4>Create Course</h4></li>
        <li><img src={this.props.panelImgs[3]} /><h4>My Courses</h4></li>
      </ul>
    )
  }
}



export default HomePage;
