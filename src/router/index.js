import React, {Component} from 'react';
import {HashRouter,Switch,Route } from "react-router-dom";//引入routerdom

import Index from '../page/index/index'//导入的组件

class Router extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Switch>
                        <Route path="/" component={Index}/>
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default Router;
