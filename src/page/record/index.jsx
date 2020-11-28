import React, { Component } from "react";
import Head from "../../components/head/index";

import "./index.scss";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      tab: [
        { title: "全部", key: 0 },
        { title: "充币", key: 1 },
        { title: "提币", key: 2 },
        { title: "释放", key: 3 },
        { title: "奖励", key: 4 },
      ],
    };
  }
  componentDidMount() {
    console.log("componentDidMount-首页");
  }
  tabChange = (key) => {
    if (key === this.state.current) {
      return;
    }
    this.setState({
      current: key,
    });
  };
  render() {
    return (
      <div className="main record">
        <Head title={"兑换历史"} hideBack={true}></Head>
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
          <div className="bg"></div>
        </div>
        <div className="tabBox">
          <div className="list">
            <div className="item">
              <div className="top flex">
                <div className="name">USDT指导兑换</div>
                <div className="count">0.19</div>
              </div>
              <div className="info flex">
                <div className="str">TT9ekQ2o7e5kqs3GR3VSctY1gZRjqn9GEv</div>
                <div className="btn">查看</div>
              </div>
              <div className="result flex">
                <div>2020-11-15 12:16</div>
                <div>提币成功</div>
              </div>
            </div>
            <div className="item">
              <div className="top flex">
                <div className="name">USDT指导兑换</div>
                <div className="count fall" >-0.19</div>
              </div>
              <div className="info flex">
                <div className="str">TT9ekQ2o7e5kqs3GR3VSctY1gZRjqn9GEv</div>
                <div className="btn">查看</div>
              </div>
              <div className="result flex">
                <div>2020-11-15 12:16</div>
                <div>提币成功</div>
              </div>
            </div>
            <div className="item">
              <div className="top flex">
                <div className="name">USDT指导兑换</div>
                <div className="count rise">+0.19</div>
              </div>
              <div className="info flex">
                <div className="str">TT9ekQ2o7e5kqs3GR3VSctY1gZRjqn9GEv</div>
                <div className="btn">查看</div>
              </div>
              <div className="result flex">
                <div>2020-11-15 12:16</div>
                <div>提币成功</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
