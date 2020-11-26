import React, { Component } from "react";
import "./index.scss";
import BgImg from "../../static/img/bg.png";
import LoginImg from "../../static/img/login.png";
import EyeOpen from "../../static/img/eye_open.png";
import EyeClose from "../../static/img/eye_close.png";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
      password: "",
      eye: 0,
      height:document.body.offsetHeight ||
      document.documentElement.clientHeight ||
      document.body.offsetHeight
    };
  }
  componentDidMount() {
    console.log("componentDidMount-个人资料2");
  }
  changeHandle = (e, val) => {
    let eye = this.state.eye;
    eye = val;
    this.setState({
      eye: eye,
    });
  };
  register = () => {};
  forget = () => {};
  mobileChange = (e) => {
    this.setState({
      mobile: e.target.value,
    });
  };
  passwordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  render() {
    return (
      <div className="main login" style={{minHeight: this.state.height + 'px'}}>
        <div className="top">
          <img className="bg" src={BgImg} alt="" />
          <img className="logo" src={LoginImg} alt="" />
        </div>
        <div className="content">
          <div className="form">
            <div className="formItem">
              <p>邮箱/手机号</p>
              <div className="input">
                <input
                  type="number"
                  placeholder="请输入邮箱/手机号"
                  value={this.state.mobile}
                  onChange={(e) => this.mobileChange(e)}
                />
              </div>
            </div>
            <div className="formItem">
              <p>支付密码</p>
              <div className="input">
                <input
                  type={this.state.eye ? "text" : "password"}
                  maxLength="15"
                  placeholder="请输入密码"
                  value={this.state.password}
                  onChange={(e) => this.passwordChange(e)}
                />
                {this.state.eye ? (
                  <div
                    className="icon"
                    onClick={(e) => this.changeHandle(e, 0)}
                  >
                    <img src={EyeClose} alt="" />
                  </div>
                ) : (
                  <div
                    className="icon"
                    onClick={(e) => this.changeHandle(e, 1)}
                  >
                    <img src={EyeOpen} alt="" />{" "}
                  </div>
                )}
              </div>
            </div>
            <div className="operation">
              <div className="forget" onClick={() => this.forget()}>
                忘记密码
              </div>
              <div className="register" onClick={() => this.register()}>
                注册
              </div>
            </div>
            <div className="submit">
              <button  disabled={
              !(
                this.state.mobile.length > 0 &&
                this.state.password.length > 0 
              )
            }>登录</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
