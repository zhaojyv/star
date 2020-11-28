import React, { Component } from "react";
import "./index.scss";
import Head from "../../components/head/index";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pageTitle: "昵称",
    };
  }
  componentDidMount() {
    document.title = this.state.pageTitle;
  }
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      name: e.target.value,
    });
  };
  render() {
    return (
      <div className="main editName">
        <Head title={this.state.pageTitle}></Head>

        <div className="form">
          <div className="formItem">
            <p>修改昵称</p>
            <div className="input">
              <input
                type="text"
                maxLength="15"
                placeholder="请输入昵称"
                value={this.state.name}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
          </div>
        </div>
        <div className="submit">
          <button disabled={!(this.state.name.length > 0)}>确定</button>
        </div>
      </div>
    );
  }
}
