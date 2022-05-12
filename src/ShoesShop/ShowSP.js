import React, { Component } from "react";
import DanhSachSP from "./DanhSachSP";
import { dataShoes } from "./DataSP";
import ModalDetailSP from "./ModalDetailSP";

export default class ShowSP extends Component {
  state = {
    data: dataShoes,
    chiTietSP: dataShoes[0],
  };

  handleChiTietSP = (sanPham) => {
    this.setState({
      chiTietSP: sanPham,
    });
  };

  render() {
    return (
      <div>
        <h1 className="">Shoes Shop</h1>
        <DanhSachSP
          dataShoes={dataShoes}
          handleChiTietSP={this.handleChiTietSP}
        />
        <ModalDetailSP dataChiTietSP={this.state.chiTietSP} />
      </div>
    );
  }
}
