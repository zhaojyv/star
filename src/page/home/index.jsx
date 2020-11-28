import React, { Component } from "react";
import BannerImg from "../../static/img/bg.png";
import BtcImg from "../../static/img/btc.png";
import UsdtImg from "../../static/img/usdt.png";
import EthImg from "../../static/img/eth.png";
import TrxImg from "../../static/img/trx.png";
import XtImg from "../../static/img/xt.png";
import BtnImg from "../../static/img/bottom.png";
import RedImg from "../../static/img/red.png";
import ChangeImg from "../../static/img/change.png";
import DingcunImg from "../../static/img/dingcun.png";
import LenglianbaoImg from "../../static/img/lenglianbao.png";
import GonglianImg from "../../static/img/gonglian.png";
import JiudianImg from "../../static/img/jiudian.png";
import YanglaoImg from "../../static/img/yanglao.png";

import "./index.scss";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      tab: [
        { title: "USDT", key: 0 },
        { title: "HUSD", key: 1 },
        { title: "BTC", key: 2 },
        { title: "ETH", key: 3 },
        { title: "HT", key: 4 },
        { title: "ALTS", key: 5 },
      ],
    };
  }
  componentDidMount() {
    console.log("componentDidMount-首页");
  }
  tabChange = (key) => {
    if(key === this.state.current){
      return
    }
    this.setState({
      current: key,
    });
  };
  render() {
    return (
      <div className="main home">
        <div className="banner">
          <div className="bg">
            <img src={BannerImg} alt="" />
          </div>
          <div className="info">
            <div className="title">
              <p>
                以星为引<i></i>鸿业远图
              </p>
              <span>
                以梦为马<i></i>不负韶华
              </span>
            </div>
            <div className="list">
              <div className="item">
                <div className="icon">
                  <img src={BtcImg} alt="" />
                </div>
                <p>BTC</p>
              </div>
              <div className="item">
                <div className="icon">
                  <img src={UsdtImg} alt="" />
                </div>
                <p>USDT</p>
              </div>
              <div className="item">
                <div className="icon">
                  <img src={XtImg} alt="" />
                </div>
                <p>XT</p>
                <div className="btm">
                  <img src={BtnImg} alt="" />
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  <img src={EthImg} alt="" />
                </div>
                <p>ETH</p>
              </div>
              <div className="item">
                <div className="icon">
                  <img src={TrxImg} alt="" />
                </div>
                <p>TRX</p>
              </div>
            </div>
          </div>
          <div className="new">
            <div className="price">今日价格：2.111</div>
            <div className="num">
              总发行量：<span>3000</span>万
            </div>
          </div>
        </div>
        <div className="part">
          <div className="list">
            <div className="item">
              <div className="icon">
                <img src={DingcunImg} alt="" />
              </div>
              <p>BTC</p>
            </div>
            <div className="item">
              <div className="icon">
                <img src={LenglianbaoImg} alt="" />
              </div>
              <p>USDT</p>
            </div>
            <div className="item">
              <div className="icon">
                <img src={GonglianImg} alt="" />
              </div>
              <p>XT</p>
            </div>
            <div className="item">
              <div className="icon">
                <img src={JiudianImg} alt="" />
              </div>
              <p>ETH</p>
            </div>
            <div className="item">
              <div className="icon">
                <img src={YanglaoImg} alt="" />
              </div>
              <p>ETH</p>
            </div>
          </div>
          <div className="text">
            <img src={RedImg} alt="" />
            <p>关于调整星图币交易区普通用户单笔最高限额数量的…</p>
          </div>
        </div>
        <div className="container">
          <div className="tab">
            <div className="list">
              {this.state.tab.map((item, index) => {
                return (
                  <div
                    className={[
                      item.key === this.state.current ? "active" : "",
                      "item",
                    ].join(" ")}
                    key={item.key}
                    onClick={(e) => this.tabChange(item.key)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
            <div className="change">
              <div className="part left">
                <div className="class">
                  <span>名称</span>
                  <img src={ChangeImg} alt="" />
                </div>
                <i>/</i>
                <div className="class">
                  <span>24H额</span>
                  <img src={ChangeImg} alt="" />
                </div>
              </div>
              <div className="part right">
                <div className="class new">
                  <span>最新价</span>
                  <img src={ChangeImg} alt="" />
                </div>
                <div className="class precent">
                  <span>涨跌幅</span>
                  <img src={ChangeImg} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="tabBox">
            <div className="list">
              <div className="item">
                <div className="info">
                  <div className="top">
                    <div className="left">
                      <span className="name">BTC</span>
                      <div className="text">/USDT</div>
                      <div className="bardge">5X</div>
                    </div>
                    <div className="right">150000</div>
                  </div>
                  <div className="btm">
                    <div className="total">24H额 ￥33366666</div>
                    <div className="count">￥33366666</div>
                  </div>
                </div>
                <div className="right">
                  <button className="rise">+1.43%</button>
                </div>
              </div>
              <div className="item">
                <div className="info">
                  <div className="top">
                    <div className="left">
                      <span className="name">BTC</span>
                      <div className="text">/USDT</div>
                      <div className="bardge">5X</div>
                    </div>
                    <div className="right">150000</div>
                  </div>
                  <div className="btm">
                    <div className="total">24H额 ￥33366666</div>
                    <div className="count">￥33366666</div>
                  </div>
                </div>
                <div className="right">
                  <button className="fall">+1.43%</button>
                </div>
              </div>
              <div className="item">
                <div className="info">
                  <div className="top">
                    <div className="left">
                      <span className="name">BTC</span>
                      <div className="text">/USDT</div>
                      <div className="bardge">5X</div>
                    </div>
                    <div className="right">150000</div>
                  </div>
                  <div className="btm">
                    <div className="total">24H额 ￥33366666</div>
                    <div className="count">￥33366666</div>
                  </div>
                </div>
                <div className="right">
                  <button className="rise">+1.43%</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
