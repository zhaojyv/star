import React, { Component } from "react";
import "./index.scss";
import Head from "../../components/head/index";
import UsdtImg from "../../static/img/icon-usdt.png";
import XtImg from "../../static/img/logo.png";
import RightImg from "../../static/img/icon_right.png";
import ExchangeImg from "../../static/img/exchange.png";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      num1: "",
      num2: "",
      pageTitle: "兑换",
    };
  }
  componentDidMount() {
    document.title = this.state.pageTitle;
  }
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      name: e.target.value,
    });
  };
  render() {
    return (
      <div className="main exchange">
        <Head title={this.state.pageTitle}></Head>
        <div className="tip">推荐价格：1XT=2.488 USDT</div>
        <div className="change">
          <div className="changeImg">
            <img className="changeImg" src={ExchangeImg} alt="" />
          </div>
          <div className="part">
            <div className="name">
              <img className="logo" src={UsdtImg} alt="" />
              <span>USDT</span>
              <img className="icon" src={RightImg} alt="" />
            </div>
            <div className="input">
              <p>余额</p>
              <input type="text" placeholder="输入数量" />
            </div>
          </div>
          <div className="part">
            <div className="name">
              <img className="logo" src={XtImg} alt="" />
              <span>XT</span>
              <img className="icon" src={RightImg} alt="" />
            </div>
            <div className="input">
              <p>收到</p>
              <input type="text" placeholder="输入数量" />
            </div>
          </div>
        </div>
        <div className="submit">
          <button
            disabled={
              !(this.state.num1.length > 0 && this.state.num1.length > 0)
            }
          >
            预约
          </button>
        </div>
      </div>
    );
  }
}
