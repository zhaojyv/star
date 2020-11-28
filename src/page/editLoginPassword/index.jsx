import React, { Component } from "react";
import "./index.scss";
import Head from "../../components/head/index";
import EyeOpen from "../../static/img/eye_open.png";
import EyeClose from "../../static/img/eye_close.png";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      old: "",
      new: "",
      newConfirm: "",
      eye: [0, 0, 0],
      pageTitle: "登录密码",
    };
  }
  componentDidMount() {
    document.title = this.state.pageTitle;
  }
  handleChange = (e, type) => {
    if (type === 1) {
      this.setState({
        old: e.target.value,
      });
    }
    if (type === 2) {
      this.setState({
        new: e.target.value,
      });
    }
    if (type === 3) {
      this.setState({
        newConfirm: e.target.value,
      });
    }
  };
  changeHandle = (e, index, val) => {
    console.log(index, val);
    let eye = this.state.eye
    eye[index] = val
    console.log(eye);
    this.setState({
      eye:eye
    });
  };
  render() {
    return (
      <div className="main editLoginPassword">
       <Head title={this.state.pageTitle}></Head>
        <div className="form">
          <div className="formItem">
            <p>旧密码</p>
            <div className="input">
              <input
                 type={this.state.eye[0]?'text':'password'}
                maxLength="15"
                placeholder="请输入密码"
                value={this.state.old}
                onChange={(e) => this.handleChange(e, 1)}
              />

              {this.state.eye[0] ? (
                <div
                  className="icon"
                  onClick={(e) => this.changeHandle(e, 0, 0)}
                >
                  <img src={EyeClose} alt="" />
                </div>
              ) : (
                <div
                  className="icon"
                  onClick={(e) => this.changeHandle(e, 0, 1)}
                >
                  <img src={EyeOpen} alt="" />{" "}
                </div>
              )}
            </div>
          </div>
          <div className="formItem">
            <p>新密码</p>
            <div className="input">
              <input
                 type={this.state.eye[1]?'text':'password'}
                maxLength="15"
                placeholder="请输入密码"
                value={this.state.new}
                onChange={(e) => this.handleChange(e, 2)}
              />
              {this.state.eye[1] ? (
                <div
                  className="icon"
                  onClick={(e) => this.changeHandle(e, 1, 0)}
                >
                  <img src={EyeClose} alt="" />
                </div>
              ) : (
                <div
                  className="icon"
                  onClick={(e) => this.changeHandle(e, 1, 1)}
                >
                  <img src={EyeOpen} alt="" />{" "}
                </div>
              )}
            </div>
          </div>
          <div className="formItem">
            <p>确认密码</p>
            <div className="input">
              <input
                type={this.state.eye[2]?'text':'password'}
                maxLength="15"
                placeholder="请输入密码"
                value={this.state.newConfirm}
                onChange={(e) => this.handleChange(e, 3)}
              />
              {this.state.eye[2] ? (
                <div
                  className="icon"
                  onClick={(e) => this.changeHandle(e, 2, 0)}
                >
                  <img src={EyeClose} alt="" />
                </div>
              ) : (
                <div
                  className="icon"
                  onClick={(e) => this.changeHandle(e, 2, 1)}
                >
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
                this.state.old.length > 0 &&
                this.state.new.length > 0 &&
                this.state.newConfirm.length > 0
              )
            }
          >
            确定
          </button>
        </div>
      </div>
    );
  }
}
