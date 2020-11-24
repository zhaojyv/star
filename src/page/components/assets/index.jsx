import React,{ Component } from "react";

export default class Home extends Component{
    // 子组件声明自己需要使用 context
    componentDidMount() {
        console.log('componentDidMount-资产');
      }
    render(){
        
        return(
            <div>
               资产
            </div>
        );
    }
}
