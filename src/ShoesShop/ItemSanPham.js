import React, { Component } from "react";

export default class ItemSanPham extends Component {
  render() {
    let { name, alias, image, price } = this.props.item;
    return (
      <div className="col-4 mb-5">
        <div className="card" style={{ overflow: "hidden" }}>
          <img
            className="card-img-top mx-auto hover-scale-img"
            src={image}
            alt={alias}
            style={{ cursor: "pointer", width: "80%", objectFit: "cover" }}
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={() => {
              this.props.handleChiTietSP(this.props.item);
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{price} $</p>
            <button className="btn btn-dark">
              Add to cart
              <span className="ml-2">
                <i className="fa-solid fa-cart-plus" />
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
