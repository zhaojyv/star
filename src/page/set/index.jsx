import React, { Component } from "react";
import Head from "../../components/head/index";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      pageTitle: "设置",
    };
  }
  componentDidMount() {
    document.title = this.state.pageTitle;
  }
  render() {
    return (
      <div className="main">
        <Head title={this.state.pageTitle}></Head>
      </div>
    );
  }
}
