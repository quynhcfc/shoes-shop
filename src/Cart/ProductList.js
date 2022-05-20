import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  renderProductList = () => {
    return this.props.listProducts?.map((item, index) => {
      return <ProductItem product={item} key={index} />;
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row mx-0">{this.renderProductList()}</div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    listProducts: state.product.data,
  };
};

export default connect(mapStateToProps)(ProductList);
