import React, { Component } from "react";
import './index.scss'
import Head from '../../components/head/index'
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      pageTitle: "手机号",
    };
  }
  componentDidMount() {
    document.title = this.state.pageTitle;
  }
  handleChange =(e)=>{
        this.setState({
          mobile:e.target.value
        })
  }
  render() {
    return (
        <div className="main editMobile">
          <Head title={this.state.pageTitle}></Head>
          <div className="form">
            <div className="formItem">
                <p>修改昵称</p>
                <div className="input">
                    <input type="number" maxLength="11" placeholder="请输入手机号" value={this.state.mobile} onChange={(e)=>this.handleChange(e)} />
                </div>
            </div>
          </div>
          <div className="submit">
              <button disabled={!(this.state.mobile.length>0)}>确定</button>
          </div>
        </div>
      );
  }
}
