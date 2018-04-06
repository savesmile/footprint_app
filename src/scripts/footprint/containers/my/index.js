import React, {Component} from "react"
import {connect} from "react-redux"
import {Link, hashHistory} from "react-router"
import Login from "../../components/login";
import avatorPic from "../../../../assets/images/avator1.png"

import {get_one, get_update_detail, get_user_detail, get_one_detail} from "../../actions"
import axios from "axios"

import Foot from "../../components/foot"
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

    componentWillMount() {

    };

    jumpTo=(to)=>{
        hashHistory.push("/"+to);
    }


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
                <div className="main">
                    <div className="top" >
                        <div className="content">
                            <Link to="setting">
                                <i className="mdui-icon material-icons">settings</i>
                            </Link>
                            <div className="avatar mdui-center">
                                <img className="mdui-img-circle" src={avatorPic}/>
                            </div>
                            <div className="nickname mdui-center">
                                <p className="nc">这是昵称</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-bottom">
                        <ul className="mdui-list">
                            <li className="mdui-list-item mdui-ripple" onClick={()=>this.jumpTo("messages")}>
                                <div className="mdui-list-item-content">
                                    <i className="mdui-list-item-icon mdui-icon material-icons">message</i>
                                    <p className="list-p">消息</p>
                                </div>
                                <i className="mdui-list-item-icon mdui-icon material-icons">chevron_right</i>
                            </li>
                            <hr/>
                            <li className="mdui-list-item mdui-ripple" onClick={()=>this.jumpTo("focus")}>
                                <div className="mdui-list-item-content">
                                    <i className="mdui-list-item-icon mdui-icon material-icons">star</i>
                                    <p className="list-p">关注</p>
                                </div>
                                <i className="mdui-list-item-icon mdui-icon material-icons">chevron_right</i>
                            </li>
                            <hr/>
                            <li className="mdui-list-item mdui-ripple">
                                <div className="mdui-list-item-content">
                                    <i className="mdui-list-item-icon mdui-icon material-icons">help_outline</i>
                                    <p className="list-p">帮助</p>
                                </div>
                                <i className="mdui-list-item-icon mdui-icon material-icons">chevron_right</i>
                            </li>
                            <hr/>

                            <li className="mdui-list-item mdui-ripple">
                                <div className="mdui-list-item-content">
                                    <i className="mdui-list-item-icon mdui-icon material-icons">lightbulb_outline</i>
                                    <p className="list-p">其它</p>
                                </div>
                                <i className="mdui-list-item-icon mdui-icon material-icons">chevron_right</i>
                            </li>
                            <hr/>
                        </ul>
                    </div>
                </div>
                <Foot/>
            </div>
        )
    }
}