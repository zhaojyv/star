import React from "react";
import { TabBar } from "antd-mobile";

import home from "../../static/img/home.png";
import home_fill from "../../static/img/home_fill.png";
import zichan from "../../static/img/zichan.png";
import zichan_fill from "../../static/img/zichan_fill.png";
import jiaoyi from "../../static/img/jiaoyi.png";
import jiaoyi_fill from "../../static/img/jiaoyi_fill.png";
import mine from "../../static/img/mine.png";
import mine_fill from "../../static/img/mine_fill.png";

import "./index";
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

  render() {
    return (
      <div className="main">
        <div className="bar">
          {this.state.bar.map((item, index) => {
            return (
              <div className="item" key={index}>
                <div className="img">
                  {this.state.selectedTab === item.id ? (
                    <img src={item.selectIcon} alt="" />
                  ) : (
                    <img src={item.icon} alt="" />
                  )}
                </div>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Index;
