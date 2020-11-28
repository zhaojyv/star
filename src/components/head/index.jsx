import React, { Component } from "react";
import BackIcon from "../../static/img/back.png";
import "./index.scss";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      hideBack: false,
    };
  }
  componentDidMount() {
    let title = this.props.title;
    if (title.length > 10) {
      title = title.substring(0, 10) + "...";
    }
    this.setState({
      title: title,
    });
    console.log(this.props.hideBack);
    if (this.props.hideBack) {
      this.setState({
        hideBack: true,
      });
    }
  }
  render() {
    return (
      <div className="headBox">
        <div className="head">
          <div className="back">
            {this.state.hideBack ? "" : <img src={BackIcon} alt="" />}
          </div>
          <div className="title">{this.state.title}</div>
          <div className="right"></div>
        </div>
        <div className="headContent"></div>
      </div>
    );
  }
}
