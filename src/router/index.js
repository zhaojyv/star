import React, {Component} from 'react';
import {HashRouter,Switch,Route } from "react-router-dom";//引入routerdom

import Index from '../page/index/index' //首页
import UserInfo from '../page/userInfo/index'//个人信息
import EditName from '../page/editName/index'//修改昵称
import EditMobile from '../page/editMobile/index'//修改手机号
import EditLoginPassword from '../page/editLoginPassword/index'//修改登录密码
import EditTradePassword from '../page/editTradePassword/index'//修改交易密码
import Invation from '../page/invation/index'//修改交易密码
import Login from '../page/login/index'//登录
import Reset from '../page/reset/index'//重置密码
import Register from '../page/register/index'//注册
import Charge from '../page/charge/index'//定存
import Deposit from '../page/deposit/index'//定存
import History from '../page/history/index'//兑换历史
import Record from '../page/record/index'//记录
import Extract from '../page/extract/index'//兑换历史
import Exchange from '../page/exchange/index'//兑换


class Router extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Switch>
                        <Route path="/exchange" component={Exchange}/>
                        <Route path="/extract" component={Extract}/>
                        <Route path="/record" component={Record}/>
                        <Route path="/history" component={History}/>
                        <Route path="/charge" component={Charge}/>
                        <Route path="/deposit" component={Deposit}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/reset" component={Reset}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/invation" component={Invation}/>
                        <Route path="/editTradePassword" component={EditTradePassword}/>
                        <Route path="/editLoginPassword" component={EditLoginPassword}/>
                        <Route path="/editmobile" component={EditMobile}/>
                        <Route path="/editname" component={EditName}/>
                        <Route path="/userInfo" component={UserInfo}/>
                        <Route path="/" component={Index}/>
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default Router;
