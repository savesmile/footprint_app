import React, { Component } from "react"
import { connect } from "react-redux"
import { Link, hashHistory } from "react-router"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Setting from "./setting";
import Login from "../../components/login";
import { get_one, get_update_detail, get_user_detail, get_one_detail } from "../../actions"
import axios from "axios"

import Foot from "../../components/foot"


/* axios.defaults.baseURL = "http://39.106.19.127:3000" */
/* axios.defaults.baseURL = "http://localhost:3000"; */
@connect(
    (state) => ({ ...state })
)


export default class My extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            token: "test_token"
        }
    }
    //锚点设置
    scrollToAnchor = (anchorName) => {
        this.showItem();
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) { anchorElement.scrollIntoView(); }
        }
    }


    showItem = () => {
        this.setState({
            flag: !(this.state.flag)
        });
        if (this.state.flag) {
            this.refs.rotate.className = "iconfont icon-down-trangle-copy-copy";
        } else {
            this.refs.rotate.className = "iconfont icon-down-trangle-copy-copy rotate";
        }

    }
    componentWillMount() {
        const { one, like } = this.props;
        const { dispatch } = this.props;
        dispatch(get_one("/one", dispatch));
        dispatch(get_user_detail("/detailInfo", dispatch));



    }

    render() {
        const { one } = this.props;
        const { name } = this.state;
        var html = null;
        var vol = null;
        if (one.length > 0) {
        }
        return (
            <div className="my">
               <Login />
            <Foot />
            </div>
        )
    }
}