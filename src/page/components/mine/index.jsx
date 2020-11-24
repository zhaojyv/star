import React,{ Component } from "react";

export default class Home extends Component{
    // 子组件声明自己需要使用 context
    componentDidMount() {
        console.log('componentDidMount-我的');
      }
    render(){
        
        return(
            <div>
               我的
            </div>
        );
    }
}
