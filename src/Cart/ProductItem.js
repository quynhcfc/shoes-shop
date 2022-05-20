import React, { Component } from "react";
import { connect } from "react-redux";
import { CHI_TIET_SAN_PHAM, THEM_SAN_PHAM } from "./redux/constants/constants";

class ProductItem extends Component {
  render() {
    let { name, price, image } = this.props.product;
    return (
      <div className="col-3 mb-4">
        <div className="card">
          <img
            className="card-img-top img-rotate"
            src={image}
            alt="Card cap"
            data-toggle="modal"
            data-target="#exampleModalDetail"
            onClick={() => {
              this.props.handleProductDetail(this.props.product);
            }}
          />
          <div className="card-body cart-body-custom">
            <h5 className="card-title card-title-custom">{name}</h5>
            <p className="card-text">{price} $</p>
            <button
              className="btn btn-primary mr-1 btn-custom"
              data-toggle="modal"
              data-target="#exampleModalDetail"
              onClick={() => {
                this.props.handleProductDetail(this.props.product);
              }}
            >
              See detail
              <span>
                <i className="fa-solid fa-eye ml-1" />
              </span>
            </button>
            <button
              className="btn btn-danger ml-1 btn-custom"
              onClick={() => {
                this.props.handleAddProductToCart(this.props.product);
              }}
            >
              Add to cart
              <span>
                <i className="fa-solid fa-cart-plus ml-1"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleProductDetail: (product) => {
      dispatch({
        type: CHI_TIET_SAN_PHAM,
        payload: product,
      });
    },

    handleAddProductToCart: (product) => {
      dispatch({
        type: THEM_SAN_PHAM,
        payload: product,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);
