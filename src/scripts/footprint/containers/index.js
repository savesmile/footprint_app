import React, {Component} from "react"
import {render} from "react-dom"
import {hashHistory, Router, Route, IndexRedirect, Redirect} from "react-router"

import His from "./his"
import Old from "./old"
import New from "./new"
import My from "./my"
import App from "./app"
import Register from "../components/register"
import Forget_pwd from "../components/forget_pwd"
import Setting from "./my/setting"

export default class Layout extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                {/* <Redirect from="/reactapp/dist" to="/" /> */}
                <Route path="/" component={App}>
                    <IndexRedirect to="/his"/>
                    <Route path="his" component={His}/>
                    <Route path="old" component={Old}/>
                    <Route path="new" component={New}/>
                    <Route path="my" component={My}/>
                    <Route path="forget_pwd" component={Forget_pwd}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/setting" component={Setting}/>
                </Route>
            </Router>
        )
    }
}