import React, { Component } from "react";
import ProductList from "./ProductList";
import ProductModalCart from "./ProductModalCart";
import ProductModalDetail from "./ProductModalDetail";

export default class ShowProducts extends Component {
  render() {
    return (
      <div>
        <h1 className="display-2 my-3">Basic Shopping Cart</h1>
        <ProductModalCart />
        <ProductList />
        <ProductModalDetail />
      </div>
    );
  }
}
