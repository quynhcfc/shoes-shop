import React, { Component } from "react";
import { connect } from "react-redux";

class ProductModalDetail extends Component {
  render() {
    let { id, name, image, quantity, description } = this.props.detailsProduct;

    return (
      <div>
        <div>
          <div
            className="modal fade"
            id="exampleModalDetail"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-width-custom" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Product details
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
                  <div className="row mx-0">
                    <div className="col-5">
                      <img
                        src={image}
                        alt=""
                        style={{ width: "80%", objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-7">
                      <table className="table">
                        <tr>
                          <td className="font-weight-bold text-left">ID:</td>
                          <td>{id}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold text-left">Name:</td>
                          <td>{name}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold text-left">
                            Description:
                          </td>
                          <td>{description}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold text-left">
                            Quantity:
                          </td>
                          <td>{quantity}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
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
    detailsProduct: state.product.details,
  };
};

export default connect(mapStateToProps)(ProductModalDetail);
