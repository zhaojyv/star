import React, { Component } from "react";

import BgImg from "../../static/img/bg.png";
import Head from "../../components/head/index";

import "./index.scss";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      pageTitle: "资产",
    };
  }
  componentDidMount() {
    document.title = this.state.pageTitle;
  }
  infoHnadle = () => {
    console.log("infoHnadle");
  };
  linkHandle = () => {};
  render() {
    return (
      <div className="main assets">
        <Head
          title={this.state.pageTitle}
          bgColor={"transparent"}
          color={"#ffffff"}
        ></Head>
        <div
          className="info"
          style={{ backgroundImage: `url(${BgImg})` }}
          onClick={() => this.infoHnadle()}
        >
          <div className="tip">总资产</div>
          <div className="count">52000.00</div>
          <div className="operation">
            <button>充币</button>
            <button>提币</button>
            <button>兑换</button>
          </div>
        </div>
        <div className="total">
          <div className="count">
            <span>可用资产</span>
            <p>1000</p>
          </div>
          <div className="count">
            <span>储存资产</span>
            <p>1000</p>
          </div>
        </div>
        <div className="list">
          <div className="item">
            <div className="title">USDT</div>
            <div className="box">
              <div className="part">
                <label>可用</label>
                <p>100000</p>
              </div>
              <div className="part center">
                <label>冻结</label>
                <p>100000</p>
              </div>
              <div className="part">
                <label>折合(CNY)</label>
                <p>100000</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="title">USDT</div>
            <div className="box">
              <div className="part">
                <label>可用</label>
                <p>100000</p>
              </div>
              <div className="part center">
                <label>冻结</label>
                <p>100000</p>
              </div>
              <div className="part">
                <label>折合(CNY)</label>
                <p>100000</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="title">USDT</div>
            <div className="box">
              <div className="part">
                <label>可用</label>
                <p>100000</p>
              </div>
              <div className="part center">
                <label>冻结</label>
                <p>100000</p>
              </div>
              <div className="part">
                <label>折合(CNY)</label>
                <p>100000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
