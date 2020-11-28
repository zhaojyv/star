import React, { Component } from "react";
import "./index.scss";
import Head from "../../components/head/index";
import CodeImg from "../../static/img/code.png";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      pageTitle: "充币",
    };
  }
  componentDidMount() {
    document.title = this.state.pageTitle;
  }
  render() {
    return (
      <div className="main charge">
        <Head title={this.state.pageTitle}></Head>
        <div className="count">
          <p>充值币种</p>
          <div className="num">USDT</div>
        </div>
        <div className="codeBox">
          <div className="code">
            <img src={CodeImg} alt="" />
            <div className="tip">长按保存到相册</div>
            <div>
              <p>充币地址</p>
              <div className="link">TT9ekQ2o7e5kqs3GR3VSctY1gZRjqn9GEv</div>
              <button>复制</button>
            </div>
          </div>
          <div className="dsc">
          请勿向上述地址充值任何非TRC20-USDT资产， 否则资产将不可找回。您充值至上述地址后，需要整个网络节点确认，交易所汇出完成后，请点击“我已完成充值”。
          </div>
        </div>
        <div className="submit">
          <button>我已完成充值</button>
        </div>
      </div>
    );
  }
}
