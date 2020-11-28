import React, { Component } from "react";
import "./index.scss";
import Head from "../../components/head/index";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      pageTitle: "兑换历史",
    };
  }
  componentDidMount() {
    document.title = this.state.pageTitle;
  }
  render() {
    return (
      <div className="main history">
        <Head title={this.state.pageTitle}></Head>
        <div className="list">
          <div className="item">
            <div className="top">
              <span>USDT 转出至法币账户</span>
              <div className="count out">USDT-87.90366615</div>
            </div>
            <div className="time">2020-11-15 17:09</div>
          </div>
          <div className="item">
            <div className="top">
              <span>USDT 转出至法币账户</span>
              <div className="count in">USDT-87.90366615</div>
            </div>
            <div className="time">2020-11-15 17:09</div>
          </div>
          <div className="item">
            <div className="top">
              <span>USDT 转出至法币账户</span>
              <div className="count out">USDT-87.90366615</div>
            </div>
            <div className="time">2020-11-15 17:09</div>
          </div>
          <div className="item">
            <div className="top">
              <span>USDT 转出至法币账户</span>
              <div className="count in">USDT-87.90366615</div>
            </div>
            <div className="time">2020-11-15 17:09</div>
          </div>
          <div className="item">
            <div className="top">
              <span>USDT 转出至法币账户</span>
              <div className="count out">USDT-87.90366615</div>
            </div>
            <div className="time">2020-11-15 17:09</div>
          </div>
        </div>
      </div>
    );
  }
}
