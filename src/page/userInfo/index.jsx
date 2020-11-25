import React, { Component } from "react";
import "./index.scss";

import Logo from "../../static/img/logo.png";
import RightIcon from "../../static/img/icon_right.png";
import Head from '../../components/head/index'
export default class Home extends Component {
  // 子组件声明自己需要使用 context
  componentDidMount() {
    console.log("componentDidMount-个人资料2");
  
  }
  render() {
    return (
      <div className="main">
        <Head title={'个人信息'}></Head>
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
          <div className="item" onClick={() => this.linkHandle()}>
            <div className="text">
              <div className="left">昵称</div>
              <div className="right">用户昵称</div>
            </div>
            <div className="icon">
              <img src={RightIcon} alt="" />
            </div>
          </div>
          <div className="item" onClick={() => this.linkHandle()}>
            <div className="text">
              <div className="left">手机号</div>
              <div className="right">152***9996</div>
            </div>
            <div className="icon">
              <img src={RightIcon} alt="" />
            </div>
          </div>
          <div className="item" onClick={() => this.linkHandle()}>
            <div className="text">
              <div className="left">修改登录密码</div>
              <div className="right"></div>
            </div>
            <div className="icon">
              <img src={RightIcon} alt="" />
            </div>
          </div>
          <div className="item" onClick={() => this.linkHandle()}>
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
            <button>退出登录</button>
        </div>
      </div>
    );
  }
}
