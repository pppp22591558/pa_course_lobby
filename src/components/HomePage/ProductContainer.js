import React, {Component} from 'react';

// public (common, shared) components
import SearchBar from '../SharedComponents/SearchBar'
import CheckBox from '../SharedComponents/CheckBox'



//product content wrapper
class ProductContainer extends Component {
  static defaultProps = {
    productRankings: [
      {
        title: "Top 10 Free",
        list: [
          {name: "小六康軒數學", publisher: "康軒文教"},
          {name: "小六康軒國文", publisher: "康軒文教"},
          {name: "小六康軒英文", publisher: "康軒文教"},
          {name: "小六康軒自然", publisher: "康軒文教"},
          {name: "小六康轩社会", publisher: "康轩文教"},
          {name: "University Calculus, Early Transcendentals Plus MyMathLab", publisher: "Pearson"},
          {name: "University Calculus, Early Transcendentals Plus MyMathLab", publisher: "Pearson aisdfjoasdjf asiodfjao jdsaf asjofijas oidsajf aosidj foais "},
          {name: "University Calculus, Early Transcendentals Plus MyMathLab", publisher: "Pearson"},
          {name: "University Calculus, Early Transcendentals Plus MyMathLab", publisher: "Pearson"},
          {name: "University Calculus, Early Transcendentals Plus MyMathLab", publisher: "Pearson"},
        ]
      }, {
        title: "Top 10 Paid",
        list: [
          {name: "小一康軒數學", image: require('../../public/images/male_plus.png')},
          {name: "小一康軒數學", image: require('../../public/images/male_plus.png')},
          {name: "小一康軒數學", image: require('../../public/images/male_plus.png')},
          {name: "小一康軒數學", image: require('../../public/images/male_plus.png')},
        ]
      }
    ],
    productByCategory: [
      {id: "1", name: "category_01"},
      {id: "2", name: "category_02"},
      {id: "3", name: "數學"},
    ],
    products: [
      {
        title: "popular bundles",
        type: "textbookBundle",
        products: [
          {
            name: "小六康軒全科",
            image: require('../../public/images/male_plus.png')
          }, {
            name: "University Calculus",
            image: require('../../public/images/my_course.png')
          }
        ]
      }, {
        title: "popular textbooks",
        type: "textbook",
        products: [
          {
            name: "小六康軒數學",
            publisher: "康軒文教",
            image: require('../../public/images/male_plus.png')
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
        ]
      }
    ]
  };
  render() {
    return (
      // <div className="product-content-wrapper">
        <div className="product-container">
          <ProductSidebar filterNames={this.props.productByCategory} productRankings={this.props.productRankings} />
          <ProductContent products={this.props.products} />
        </div>
      // </div>
    )
  }
}

//filter filtering the products
class ProductSidebar extends Component {
  componentDidMount() {
    // $(document).ready(function(){
    //   $('.filter-wrapper').sticky({topSpacing:60}); //TODO: remove this?
    // });
  }
  render() {
    var filterName = this.props.filterNames.map(function(filter, index){
      return (
        <li key={index} className="filter-title">
          <CheckBox id={"filter-" + index} defaultChecked={true}>
            {filter.name}
          </CheckBox>
        </li>
      )
    });
    return (
      <div className="product-sidebar-wrapper">
        <ul className="product-sidebar-ul">
          <li className="product-search product-sidebar-row">
            <h3 className="product-sidebar-title">Search</h3>
            <SearchBar/>
          </li>
          <li className="product-categories product-sidebar-row">
            <h3 className="product-sidebar-title">Categories</h3>
            <ul>
              {filterName}
            </ul>
          </li>
          <li>
            <ProductRankings productRankings={this.props.productRankings} />
          </li>
        </ul>
      </div>
    )
  }
}

class ProductRankings extends Component {
  render() {
    var rankings = this.props.productRankings.map(function(ranking, index){
      var singleRankingListContent = ranking.list.map(function(product, index2){
        return (
          <li key={index2} className="product-ranking-product-row">
            <div className="product-ranking-product-index">{index2 + 1}</div>
            <div className="product-ranking-product-wrapper">
              <h4 className="product-ranking-product-name" title={product.name}>{product.name}</h4>
              <h5 className="product-ranking-product-publisher" title={product.publisher}>{product.publisher}</h5>
            </div>
          </li>
        )
      });
      return (
        <li className="product-sidebar-row" key={index}>
          <h3 className="product-sidebar-title">{ranking.title}</h3>
          <ul>
            {singleRankingListContent}
          </ul>
        </li>
      );
    });

    return (
      <ul className="product-rankings">
        {rankings}
      </ul>
    )
  }
}

//all the product display
class ProductContent extends Component {
  componentDidMount() {
    // var containerWidth = this.refs.productContent.clientWidth;
    // console.log(containerWidth);
  }
  render() {
    var productsDisplay = this.props.products.map(function(productRow, index){
      switch(productRow.type) {
        case "textbookBundle":
          return (
            <li className="product-content-row" key={index}>
              <h3 className="product-content-title">{productRow.title}</h3>
              <ul>
                {
                  productRow.products.map(function(textbookBundle, index2){
                    return (
                      <li className="product-content-textbook-bundle-wrapper" key={index2}>
                        <TextbookBundleCell textbookBundle={textbookBundle}/>
                      </li>
                    )
                  })
                }
              </ul>
            </li>
          );
          break;

        case "textbook":
          return (
            <li className="product-content-row" key={index}>
              <h3 className="product-content-title">{productRow.title}</h3>
              <ul>
                {
                  productRow.products.map(function(textbook, index2){
                    return (
                      <li className="product-content-textbook-wrapper" key={index2}>
                        <TextbookCell textbook={textbook}/>
                      </li>
                    )
                  })
                }
              </ul>
            </li>
          );
          break;

        default:
          return <li>wrong</li>;
      }
    });
    return (
      <div className="product-content">
        <ul ref="productContent">
          {productsDisplay}
        </ul>
      </div>
    )
  }
}

class TextbookCell extends Component {
  render() {
    var tb = this.props.textbook;
    return (
      <div className="textbook-cell">
        <img src={tb.image} className="textbook-cell-img"/>
        <h5 className="textbook-cell-name" title={tb.name}>{tb.name}</h5>
        <h6 className="textbook-cell-publisher" title={tb.publisher}>{tb.publisher}</h6>
      </div>
    );
  }
}

class TextbookBundleCell extends Component {
  render() {
    var tbb = this.props.textbookBundle;
    return (
      <div className="textbook-bundle-cell">
        <img src={tbb.image} className="textbook-bundle-cell-img" title={tbb.name}/>
      </div>
    );
  }
}

class ItemImg extends Component {
  render() {
    var style = {
      width: '100px',
      height: '100px',
      borderRadius: '10px'
    };
    return (
      <a href="/product"><img src={this.props.imgSrc} style={style} title={this.props.productName + "descriptions"}/></a>
    )
  }
}

export default ProductContainer;
