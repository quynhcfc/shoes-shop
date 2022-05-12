import React, { Component } from "react";

export default class ModalDetailSP extends Component {
  render() {
    let { name, alias, description, quantity, image, id } =
      this.props.dataChiTietSP;
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            role="document"
            style={{ maxWidth: "70vw" }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title" id="exampleModalLabel">
                  Product details
                </h2>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i
                      className="fa-solid fa-rectangle-xmark"
                      style={{ color: "red", fontSize: "30px" }}
                    />
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-5">
                    <img
                      src={image}
                      alt={alias}
                      style={{ width: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-7">
                    <table className="table">
                      <tr>
                        <td className="font-weight-bold">ID:</td>
                        <td className="">{id}</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">Name:</td>
                        <td className="">{name}</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">Description:</td>
                        <td className="">{description}</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">Quantity:</td>
                        <td className="">{quantity}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary">
                  Add to cart
                  <span className="ml-2">
                    <i className="fa-solid fa-cart-plus" />
                  </span>
                </button>
                <button type="button" className="btn btn-danger">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
