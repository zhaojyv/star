import React, { Component } from "react";
import { Icon } from "antd-mobile";
import { createBrowserHistory } from 'history'
import "./index.scss";
const history = createBrowserHistory();
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      hideBack: false,
      bgColor: "#ffffff",
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
    document.title = title;
    if (this.props.hideBack) {
      this.setState({
        hideBack: true,
      });
    }
    if (this.props.bgColor) {
      this.setState({
        bgColor: this.props.bgColor,
      });
    }
    if (this.props.color) {
      this.setState({
        color: this.props.bgColor,
      });
    }
  }
  back = () => {
    history.go(-1)
  };
  render() {
    return (
      <div className="headBox">
        <div
          className="head"
          style={{
            backgroundColor: this.props.bgColor
              ? this.props.bgColor
              : "#ffffff",
          }}
        >
          <div className="back" onClick={() => this.back()}>
            {this.state.hideBack ? (
              ""
            ) : (
              <Icon
                type="left"
                style={{
                  color: this.props.color ? this.props.color : "##000000",
                }}
                size={"md"}
              />
            )}
          </div>
          <div
            className="title"
            style={{ color: this.props.color ? this.props.color : "##000000" }}
          >
            {this.state.title}
          </div>
          <div className="right"></div>
        </div>
        {this.props.bgColor ? "" : <div className="headContent"></div>}
      </div>
    );
  }
}
