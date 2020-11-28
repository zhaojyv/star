import React, { Component } from "react";
import "./index.scss";
import Logo from "../../static/img/logo.png";
import RightIcon from "../../static/img/icon_right.png";
import Head from '../../components/head/index'
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: "个人信息",
    };
  }
  componentDidMount() {
    document.title = this.state.pageTitle;
  }
  linkHandle = (url) => {
    this.props.history.push(url);
  };
  render() {
    return (
      <div className="main usreInfo">
        <Head title={this.state.pageTitle}></Head>
        <div className="list">
          <div className="item" onClick={() => this.linkHandle()}>
            <div className="text">
              <div className="left">头像</div>
              <div className="right">
                <img src={Logo} alt=""/>
              </div>
            </div>
            <div className="icon">
              <img src={RightIcon} alt="" />
            </div>
          </div>
          <div className="item" onClick={() => this.linkHandle('/editname')}>
            <div className="text">
              <div className="left">昵称</div>
              <div className="right">用户昵称</div>
            </div>
            <div className="icon">
              <img src={RightIcon} alt="" />
            </div>
          </div>
          <div className="item" onClick={() => this.linkHandle('/editmobile')}>
            <div className="text">
              <div className="left">手机号</div>
              <div className="right">152***9996</div>
            </div>
            <div className="icon">
              <img src={RightIcon} alt="" />
            </div>
          </div>
          <div className="item" onClick={() => this.linkHandle('/editLoginPassword')}>
            <div className="text">
              <div className="left">修改登录密码</div>
              <div className="right"></div>
            </div>
            <div className="icon">
              <img src={RightIcon} alt="" />
            </div>
          </div>
          <div className="item" onClick={() => this.linkHandle('/editTradePassword')}>
            <div className="text">
              <div className="left">修改交易密码</div>
              <div className="right"></div>
            </div>
            <div className="icon">
              <img src={RightIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="cancel">
            <button onClick={() => this.linkHandle('/login')}>退出登录</button>
        </div>
      </div>
    );
  }
}
