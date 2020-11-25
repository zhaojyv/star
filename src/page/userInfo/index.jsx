import React, { Component } from "react";

export default class Home extends Component {
  // 子组件声明自己需要使用 context
  componentDidMount() {
    console.log('componentDidMount-交易');
  }
  render() {
    return <div>交易</div>;
  }
}
