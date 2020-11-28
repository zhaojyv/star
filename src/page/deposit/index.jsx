import React, { Component } from "react";
import "./index.scss";
import Head from "../../components/head/index";
import TipImg from "../../static/img/tip.png";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: "定存",
    };
  }
  componentDidMount() {
    document.title = this.state.pageTitle;
  }
  render() {
    return (
      <div className="main deposit">
        <Head title={this.state.pageTitle}></Head>
        <div className="count">
          <p>余额</p>
          <div className="num">42.44000000XT</div>
        </div>
        <div className="list">
          <div className="item">
            <div className="label">定存天数</div>
            <div className="text">180天</div>
          </div>
          <div className="item">
            <div className="label">定存时间</div>
            <div className="text">2020-11-04</div>
          </div>
          <div className="item">
            <div className="label">到期时间</div>
            <div className="text">2021-05-03</div>
          </div>
          <div className="item">
            <div className="label">一键解锁</div>
            <div className="text">30%≈12.732</div>
          </div>
        </div>
        <div className="tip">
          <div className="left">备注：提前解锁需收手续费</div>
          <div className="right">定存规则<img src={TipImg} alt=""/></div>
        </div>
        <div className="submit">
              <button>确认</button>
          </div>
      </div>
    );
  }
}
