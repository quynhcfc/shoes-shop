import React, { Component } from "react";
import ItemSanPham from "./ItemSanPham";

export default class DanhSachSP extends Component {
  renderListShoes = () => {
    return this.props.dataShoes.map((product) => {
      return (
        <ItemSanPham
          item={product}
          handleChiTietSP={this.props.handleChiTietSP}
        />
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row mx-0">{this.renderListShoes()}</div>
      </div>
    );
  }
}
