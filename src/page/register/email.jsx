import React, { Component } from "react";
import "./index.scss";

import EyeOpen from "../../static/img/eye_open.png";
import EyeClose from "../../static/img/eye_close.png";
import { testMobile } from "../../utils/index";
let time = null;
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      code: "",
      password: "",
      eye: 0,
      num: 60,
      time: null,
      send: false,
    };
  }
  componentDidMount() {}
  emailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  codeChange = (e) => {
    this.setState({
      code: e.target.value,
    });
  };
  passwordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  passwordConfirmChange = (e) => {
    this.setState({
      passwordConfirm: e.target.value,
    });
  };
  changeHandle = (e, val) => {
    let eye = this.state.eye;
    eye = val;
    this.setState({
      eye: eye,
    });
  };
  getCode = () => {
    let { num, mobile } = { ...this.state };
    if (this.state.mobile.trim().length === 0) {
      console.log("请输入手机号码");
    } else if (!testMobile(mobile)) {
      console.log("手机号码格式不正确");
    } else {
      this.setState({
        send: true,
      });
      time = setInterval(() => {
        if (num < 0) {
          clearInterval(time);
          this.setState({
            num: 60,
            send: false,
            time: null,
          });
        } else {
          this.setState({
            num: num--,
          });
        }
      }, 1000);
    }
  };
  render() {
    return (
      <div>
        <div className="form">
          <div className="formItem">
            <p>邮箱</p>
            <div className="input">
              <input
                type="number"
                placeholder="请输入邮箱"
                value={this.state.email}
                onChange={(e) => this.emailChange(e)}
              />
            </div>
          </div>
          <div className="formItem">
            <p>验证码</p>
            <div className="input">
              <input
                type="number"
                maxLength="11"
                placeholder="请输入验证码"
                value={this.state.code}
                onChange={(e) => this.codeChange(e)}
              />
              <div className="code">
                {this.state.send ? (
                  <button disabled>{this.state.num}s后重新发送</button>
                ) : (
                  <button onClick={() => this.getCode()}>获取验证码</button>
                )}
              </div>
            </div>
          </div>
          <div className="formItem">
            <p>支付密码</p>
            <div className="input">
              <input
                type={this.state.eye? "text" : "password"}
                maxLength="15"
                placeholder="请输入密码"
                value={this.state.password}
                onChange={(e) => this.passwordChange(e)}
              />
              {this.state.eye ? (
                <div className="icon" onClick={(e) => this.changeHandle(e, 0)}>
                  <img src={EyeClose} alt="" />
                </div>
              ) : (
                <div className="icon" onClick={(e) => this.changeHandle(e, 1)}>
                  <img src={EyeOpen} alt="" />{" "}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="submit">
          <button
            disabled={
              !(
                this.state.email.length > 0 &&
                this.state.code.length > 0 &&
                this.state.password.length > 0 &&
                this.state.passwordConfirm.length > 0
              )
            }
          >
            手机注册
          </button>
        </div>
      </div>
    );
  }
}
