import React, { Component } from "react"
import { connect } from "react-redux"
import { Link, hashHistory } from "react-router"
import axios from "axios"

/* axios.defaults.baseURL = "http://39.106.19.127:3000" */
/* axios.defaults.baseURL = "http://localhost:3000"; */
@connect(
    (state) => ({ ...state })
)


export default class Setting extends Component {
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
            <ul className="mdui-list" mdui-collapse="{accordion: true}">

                <li className="mdui-list-item mdui-ripple">
                    <i className="mdui-list-item-icon mdui-icon material-icons">home</i>
                    <div className="mdui-list-item-content">Home</div>
                </li>

                <li className="mdui-list-item mdui-ripple">
                    <i className="mdui-list-item-icon mdui-icon material-icons">dashboard</i>
                    <div className="mdui-list-item-content">Dashboard</div>
                </li>

                <li className="mdui-collapse-item mdui-collapse-item-open">
                    <div className="mdui-collapse-item-header mdui-list-item mdui-ripple">
                        <i className="mdui-list-item-icon mdui-icon material-icons">people</i>
                        <div className="mdui-list-item-content">Audience</div>
                        <i className="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
                    </div>
                    <ul className="mdui-collapse-item-body mdui-list mdui-list-dense">
                        <li className="mdui-list-item mdui-ripple">Overview</li>
                        <li className="mdui-list-item mdui-ripple">Language</li>
                        <li className="mdui-list-item mdui-ripple">Location</li>
                        <li className="mdui-list-item mdui-ripple">New vs Returning</li>
                    </ul>
                </li>

                <li className="mdui-collapse-item">
                    <div className="mdui-collapse-item-header mdui-list-item mdui-ripple">
                        <i className="mdui-list-item-icon mdui-icon material-icons">device_hub</i>
                        <div className="mdui-list-item-content">Acquisition</div>
                        <i className="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
                    </div>
                    <ul className="mdui-collapse-item-body mdui-list mdui-list-dense">
                        <li className="mdui-list-item mdui-ripple">Overview</li>
                        <li className="mdui-list-item mdui-ripple">All Traffic</li>
                        <li className="mdui-list-item mdui-ripple">Direct Traffic</li>
                        <li className="mdui-list-item mdui-ripple">Search Overview</li>
                    </ul>
                </li>

                <li className="mdui-collapse-item">
                    <div className="mdui-collapse-item-header mdui-list-item mdui-ripple">
                        <i className="mdui-list-item-icon mdui-icon material-icons">touch_app</i>
                        <div className="mdui-list-item-content">Behavior</div>
                        <i className="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
                    </div>
                    <ul className="mdui-collapse-item-body mdui-list mdui-list-dense">
                        <li className="mdui-list-item mdui-ripple">Overview</li>
                        <li className="mdui-list-item mdui-ripple">All Pages</li>
                        <li className="mdui-list-item mdui-ripple">Landing Pages</li>
                        <li className="mdui-list-item mdui-ripple">Exit Pages</li>
                    </ul>
                </li>

                <li className="mdui-list-item mdui-ripple">
                    <i className="mdui-list-item-icon mdui-icon material-icons">shopping_cart</i>
                    <div className="mdui-list-item-content">Ecommerce</div>
                </li>

            </ul>
        )
    }
}