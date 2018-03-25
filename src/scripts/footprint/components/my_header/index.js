import React, { Component } from "react"
import { connect } from "react-redux"
import { Link, hashHistory } from "react-router"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';




/* axios.defaults.baseURL = "http://39.106.19.127:3000" */
/* axios.defaults.baseURL = "http://localhost:3000"; */
@connect(
    (state) => ({ ...state })
)


export default class My_header extends Component {

    render() {
        return (
            <div className="My_header">  
                
            </div>
        )
    }
}