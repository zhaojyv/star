import React from "react";
// import { TabBar } from "antd-mobile";

import home from "../../static/img/home.png";
import home_fill from "../../static/img/home_fill.png";
import zichan from "../../static/img/zichan.png";
import zichan_fill from "../../static/img/zichan_fill.png";
import jiaoyi from "../../static/img/jiaoyi.png";
import jiaoyi_fill from "../../static/img/jiaoyi_fill.png";
import mine from "../../static/img/mine.png";
import mine_fill from "../../static/img/mine_fill.png";

import "./index.scss";

import Home from "../home/index";
import Assets from "../assets/index";
import Transaction from "../transaction/index";
import Mine from "../mine/index";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 1,
      hidden: false,
      fullScreen: false,
      bar: [
        {
          id: 1,
          icon: home,
          selectIcon: home_fill,
          text: "首页",
        },
        {
          id: 2,
          icon: zichan,
          selectIcon: zichan_fill,
          text: "资产",
        },
        {
          id: 3,
          icon: jiaoyi,
          selectIcon: jiaoyi_fill,
          text: "交易",
        },
        {
          id: 4,
          icon: mine,
          selectIcon: mine_fill,
          text: "我的",
        },
      ],
    };
  }
  tabChange = (id) => {
    this.setState({
      selectedTab: id,
    });
    localStorage.setItem('tab',id)
  };
  render() {
    let CurrentBox = null;
    if (this.state.selectedTab === 1) {
      CurrentBox = Home;
    } else if (this.state.selectedTab === 2) {
      CurrentBox = Assets;
    } else if (this.state.selectedTab === 3) {
      CurrentBox = Transaction;
    } else {
      CurrentBox = Mine;
    }
    return (
      <div className="main">
        <div className="tanContent">
          <CurrentBox  history={this.props.history}></CurrentBox>
        </div>
        <div className="bar">
          {this.state.bar.map((item, index) => {
            return (
              <div
                className="item"
                key={index}
                onClick={() => this.tabChange(item.id)}
              >
                <div className="img">
                  {this.state.selectedTab === item.id ? (
                    <img src={item.selectIcon} alt="" />
                  ) : (
                    <img src={item.icon} alt="" />
                  )}
                </div>
                {this.state.selectedTab === item.id ? (
                  <p className="active">{item.text}</p>
                ) : (
                  <p>{item.text}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Index;
