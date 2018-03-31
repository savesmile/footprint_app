import React, {Component} from "react"
import {connect} from "react-redux"
import {Link, hashHistory} from "react-router"
import Login from "../../components/login";
import {get_one, get_update_detail, get_user_detail, get_one_detail} from "../../actions"
import axios from "axios"

import Foot from "../../components/foot"


/* axios.defaults.baseURL = "http://39.106.19.127:3000" */
/* axios.defaults.baseURL = "http://localhost:3000"; */
@connect(
    (state) => ({...state})
)

export default class My extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "test_token"
        }
    }

    //锚点设置
    scrollToAnchor = (anchorName) => {
        this.showItem();
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) {
                anchorElement.scrollIntoView();
            }
        }
    }



    componentWillMount() {


    };

    render() {
        const {one} = this.props;
        const {name} = this.state;
        var html = null;
        var vol = null;
        if (one.length > 0) {
        }
        return (
            <div className="my">
                {/*<Login/>*/}
                <div className="main mdui-container">
                    <div className="top">
                        <Link to="setting">
                            <i className="mdui-icon material-icons">settings</i>
                        </Link>
                        <div className="avatar">

                        </div>
                        <div className="nickname">

                        </div>
                    </div>
                </div>
                <Foot/>
            </div>
        )
    }
}