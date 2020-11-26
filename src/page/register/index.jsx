import React, { Component } from "react";
import "./index.scss";
import Head from "../../components/head/index";
import Mobile from "./mobile";
import Email from "./email";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 0,
    };
  }
  componentDidMount() {}
  changeType = (type) => {
    console.log(type);
    this.setState({
      type: type,
    });
  };
  render() {
    return (
      <div className="main register">
        <Head title={""}></Head>
        <div className="pageTitle">欢迎注册星图</div>
        {this.state.type === 0 ? <Mobile></Mobile> : <Email></Email>}
        <div className="change">
          {this.state.type === 0 ? (
            <button onClick={() => this.changeType(1)}>用邮箱注册</button>
          ) : (
            <button onClick={() => this.changeType(0)}>用手机验证码注册</button>
          )}
        </div>
      </div>
    );
  }
}
