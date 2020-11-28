import React, { Component } from "react";
import Head from "../../components/head/index";
import CodeImg from "../../static/img/code.png";

import "./index.scss";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "15239088356",
      code: "",
      password: "",
      passwordConfirm: "",
      eye: [0, 0],
      num: 10,
      time: null,
      pageTitle: "邀请好友",
      send: false,
    };
  }
  componentDidMount() {
    document.title = this.state.pageTitle;
  }
  render() {
    return (
      <div className="main invation">
        <Head title={this.state.pageTitle}></Head>
        <div className="title">邀请好友</div>
        <div className="code">
          <img src={CodeImg} alt="" />
          <div className="tip">复制链接即可注册下载APP</div>
          <div>
            <button>复制</button>
          </div>
        </div>
      </div>
    );
  }
}
