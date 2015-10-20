import React, {Component} from 'react';

// public (common, shared) components
import SearchBar from '../SharedComponents/SearchBar'
import CheckBox from '../SharedComponents/CheckBox'



//product content wrapper
class ProductContent extends Component {
  render() {
    return (
      <div className="product-content-wrapper">
        <div className="product-content">
          <ProductFilter filterNames={this.props.productByCategory}/>
          <Products filterNames={this.props.productByCategory} products={this.props.products}/>
        </div>
      </div>
    )
  }
}

//filter filtering the products
class ProductFilter extends Component {
  componentDidMount() {
    $(document).ready(function(){
      $('.filter-wrapper').sticky({topSpacing:60});
    });
  }
  render() {
    var filterName = this.props.filterNames.map(function(filter, index){
      return (
        <li key = {index} className="filter-title">
          <CheckBox id= {"filter-" + index} defaultChecked={true}>
                      {filter.name}
                    </CheckBox>
        </li>
      )
    });
    return (
      <div className="filter-wrapper">
        <ul className="product-filter">
          <li className="filter-title">
            <h3>Search</h3>
          </li>
          <li className="filter-search">
            <SearchBar/>
          </li>
          <li className="filter-title">
            <h3>Category</h3>
          </li>
          {filterName}
        </ul>
      </div>
    )
  }
}

//all the product display
class Products extends Component {
  render() {
    var allProducts = this.props.products;
    var productByCategory = this.props.filterNames.map(function(filter, index){
      var products = allProducts.map(function(product, index){
        return (
          product.category_id === filter.id?
          <li key={product.id} className="product-cell">
            <ItemImg productName={product.name}/>
            <a href="#"><h5>{product.name}</h5></a>
          </li>
          : null
        )
      });
      return (
        <ul key = {index} className="product-row">
          <li className="product-title">
            <h3>{filter.name.toUpperCase()}</h3>
          </li>
          {products}
        </ul>
      )
    });
    return (
      <div className="products">
        <div className="products-by-category">
          {productByCategory}
        </div>
      </div>
    )
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
      <a href="/product"><img src={this.props.imgSrc} style={style} title= {this.props.productName + "descriptions"}/></a>
    )
  }
}

export default ProductContent;
