import React, { Component } from "react";
import "./index.scss";
import Head from "../../components/head/index";
import EyeOpen from "../../static/img/eye_open.png";
import EyeClose from "../../static/img/eye_close.png";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: "提币",
      password: "",
      address: "",
      number: "",
      eye: 0,
    };
  }
  componentDidMount() {
    document.title = this.state.pageTitle;
  }
  pwdChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  addressChange = (e) => {
    this.setState({
      address: e.target.value,
    });
  };
  numChange = (e) => {
    this.setState({
      number: e.target.value,
    });
  };
  changeHandle = (e, val) => {
    let eye = this.state.eye;
    eye = val;
    this.setState({
      eye: eye,
    });
  };
  render() {
    return (
      <div className="main extract">
        <Head title={this.state.pageTitle}></Head>
        <div className="tip">
          <span>提取币种</span>
          <div className="name">USDT</div>
          <div className="info">
            <div className="total">
              <div className="text">当前账户余额</div>
              <div className="count">
                402.0299<i>USDT</i>
              </div>
            </div>
            <div className="btn">
              <button>全部提出</button>
            </div>
          </div>
        </div>
        <div className="form">
          <div className="formItem">
            <p>提币地址</p>
            <div className="input">
              <textarea
                type="text"
                placeholder="提币通道为TRC20，请勿转错链，否 则资产不可找回。"
                value={this.state.address}
                onChange={(e) => this.addressChange(e)}
              />
            </div>
          </div>
          <div className="formItem">
            <p>提币数量</p>
            <div className="input">
              <input
                type="text"
                maxLength="20"
                placeholder="最低提币量：10USDT"
                value={this.state.number}
                onChange={(e) => this.numChange(e)}
              />
            </div>
          </div>
          <div className="formItem">
            <p>二级密码</p>
            <div className="input">
              <input
                type={this.state.eye ? "text" : "password"}
                placeholder="请输入密码"
                value={this.state.password}
                onChange={(e) => this.pwdChange(e)}
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
                this.state.number.length > 0 &&
                this.state.address.length > 0 &&
                this.state.password.length > 0
              )
            }
          >
            提币
          </button>
        </div>
      </div>
    );
  }
}
