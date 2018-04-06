import React, {Component} from "react"
import {render} from "react-dom"
import {hashHistory, Router, Route, IndexRedirect, Redirect} from "react-router"

import His from "./his"
import MyFoot from "./myfoot"
import My from "./my"
import App from "./app"
import Register from "../components/register"
import Forget_pwd from "../components/forget_pwd"
import Detail from "../components/detail"
import Setting from "./my/setting"
import Focus from "../components/focus"
import Messages from "../components/message";
import Login from "../components/login"

export default class Layout extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                {/* <Redirect from="/reactapp/dist" to="/" /> */}
                <Route path="/" component={App}>
                    <IndexRedirect to="/his"/>
                    <Route path="his" component={His}/>
                    <Route path="my_foot/:uid" component={MyFoot}/>
                    <Route path="my" component={My}/>
                    <Route path="forget_pwd" component={Forget_pwd}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/setting" component={Setting}/>
                    <Route path="/detail" component={Detail}/>
                    <Route path="/focus" component={Focus}/>
                    <Route path="/messages" component={Messages}/>
                    <Route path="/login" component={Login}/>
                </Route>
            </Router>
        )
    }
}