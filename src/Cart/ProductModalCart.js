import React, { Component } from "react";
import { connect } from "react-redux";
import { THAY_DOI_SO_LUONG } from "./redux/constants/constants";
const dowProduct = -1;
const upProduct = 1;

class ProductModalCart extends Component {
  renderProductListCart = () => {
    return this.props.cart.map((product) => {
      return (
        <tr>
          <td className="col-1">{product.id}</td>
          <td className="col-2">{product.name}</td>
          <td className="col-3">
            <img
              src={product.image}
              alt=""
              style={{ width: "70%", objectFit: "cover" }}
            />
          </td>
          <td className="col-2">{product.price}</td>
          <td className="col-2">
            <button
              className="btn btn-danger btn-custom mr-1"
              onClick={() => {
                this.props.handleChanngeQuantity(product.id, dowProduct);
              }}
            >
              -
            </button>
            {product.quantityProduct}
            <button
              className="btn btn-success btn-custom ml-1"
              onClick={() => {
                this.props.handleChanngeQuantity(product.id, upProduct);
              }}
            >
              +
            </button>
          </td>
          <td className="col-2">{product.price * product.quantityProduct}</td>
        </tr>
      );
    });
  };

  renderTotalQuantity = () => {
    let totalQuantity = this.props.cart.reduce((total, product) => {
      return (total += product.quantityProduct);
    }, 0);
    return totalQuantity;
  };

  render() {
    return (
      <div>
        <div className="my-3">
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Cart
            <div className="rounded bg-danger d-inline-block ml-1 px-1">
              {this.renderTotalQuantity()}
            </div>
          </button>
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-width-custom" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Carts
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">
                      <i className="fa-solid fa-rectangle-xmark text-danger"></i>
                    </span>
                  </button>
                </div>
                <div className="modal-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <td className="col-1 font-weight-bold">ID</td>
                        <td className="col-2 font-weight-bold">Name</td>
                        <td className="col-3 font-weight-bold">Image</td>
                        <td className="col-2 font-weight-bold">Price ($)</td>
                        <td className="col-2 font-weight-bold">Quantity</td>
                        <td className="col-2 font-weight-bold">Total ($)</td>
                      </tr>
                    </thead>
                    <tbody>{this.renderProductListCart()}</tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-dismiss="modal"
                  >
                    See more
                    <span>
                      <i className="fa-solid fa-eye ml-1" />
                    </span>
                  </button>
                  <button type="button" className="btn btn-danger">
                    Buy now
                    <span>
                      <i className="fa-solid fa-cart-plus ml-1"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cart: state.product.cart,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleChanngeQuantity: (idProduct, value) => {
      dispatch({ type: THAY_DOI_SO_LUONG, idProduct: idProduct, value: value });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductModalCart);
