import React, { Component } from "react";
import { Icon } from "antd-mobile";
import Logo from "../../static/img/logo.png";
import RightIcon from "../../static/img/icon_right.png";
import TeamIcon from "../../static/img/icon_team.png";
import SetIcon from "../../static/img/icon_set.png";
import JiaoyiIcon from "../../static/img/icon_jiaoyi.png";
import YaoqingIcon from "../../static/img/icon_yaoqing.png";
import BgImg from "../../static/img/bg.png";
import "./index.scss";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      pageTitle: "我的",
    };
  }
  componentDidMount() {
    document.title = this.state.pageTitle;
    console.log("componentDidMount-我的");
  }
 
  linkHandle = (url) => {
    this.props.history.push(url);
  };
  render() {
    return (
      <div className="main mine">
        <div
          className="info"
          style={{ backgroundImage: `url(${BgImg})` }}
          onClick={() => this.linkHandle("/userInfo")}
        >
          <div className="img">
            <img src={Logo} alt="" />
          </div>
          <div className="name">
            <div className="nickName">用户名称</div>
            <div className="phone">152****3696</div>
          </div>
          <div className="icon">
            <Icon type="right" size="32" color="#ffffff" />
          </div>
        </div>
        <div className="list">
          <div className="item" onClick={() => this.linkHandle('/team')}>
            <div className="img">
              <img src={TeamIcon} alt="" />
            </div>
            <div className="text">团队</div>
            <div className="icon">
              <img src={RightIcon} alt="" />
            </div>
          </div>
          <div className="item" onClick={() => this.linkHandle("/history")}>
            <div className="img">
              <img src={JiaoyiIcon} alt="" />
            </div>
            <div className="text">交易记录</div>
            <div className="icon">
              <img src={RightIcon} alt="" />
            </div>
          </div>
          <div className="item" onClick={() => this.linkHandle("/invation")}>
            <div className="img">
              <img src={YaoqingIcon} alt="" />
            </div>
            <div className="text">邀请好友</div>
            <div className="icon">
              <img src={RightIcon} alt="" />
            </div>
          </div>
          <div className="item" onClick={() => this.linkHandle("/set")}>
            <div className="img">
              <img src={SetIcon} alt="" />
            </div>
            <div className="text">设置</div>
            <div className="icon">
              <img src={RightIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
