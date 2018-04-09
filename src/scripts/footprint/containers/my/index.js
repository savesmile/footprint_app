import React, { Component } from "react"
import { connect } from "react-redux"
import { Link, hashHistory } from "react-router"
import Login from "../../components/login";
import avatorPic from "../../../../assets/images/avator1.png"
import Base from "../../components/base"
import { get_one, get_update_detail, get_user_detail, get_one_detail } from "../../actions"
import axios from "axios"
import UpdateInfo from "../../components/updateInfo"
import Foot from "../../components/foot"
@connect(
    (state) => ({ ...state })
)

export default class My extends Base {
    constructor(props) {
        super(props);
        this.state = {
            token: sessionStorage.token,
            info: {}
        }
    }

    componentWillMount() {
       this.gatDate();
    };

    gatDate=()=>{
        var baseUri = "http://47.95.121.41:20000";
        this.fetchGet(baseUri + "/api/user/info?token=" + this.state.token, json => {
            if (json.code == 0) {
                this.setState({
                    info: json.data
                })
            }
        });
    }

    jumpTo = (to) => {
        hashHistory.push("/" + to);
    }
    handleClick = (e) => {
        if (sessionStorage.token) {
            e.preventDefault();
        } else {
            hashHistory.push("/login")
        }
    }

    updateInfo = ()=>{
        return 
    }

    render() {
        const { info } = this.state;
        var avatar = null;
        if (info) {
            avatar = (
                <div>
                    <div className="avatar mdui-center">
                        <img className="mdui-img-circle" src={info.avatar} />
                    </div>
                    <div className="nickname mdui-center">
                    <UpdateInfo dataChange={this.gatDate}/>
                        <p className="nc">{info.name}  <i className="mdui-icon material-icons" onClick={this.updateInfo()}>edit</i></p>
                    </div>
                </div>);
        }

        var logBtn = (
            <div>
                <div className="avatar mdui-center">
                    <img className="mdui-img-circle" src={avatorPic} onClick={this.handleClick} />
                </div>
            </div>
        );
        var html = null;
        return (
            <div className="my">
                {/*<Login/>*/}
                <div className="main">
                    <div className="top" >
                        <div className="content">
                            <Link to="setting" style={{ display: this.state.token ? "block" : "none" }}>
                                <i className="mdui-icon material-icons">settings</i>
                            </Link>
                            {this.state.token ? avatar : logBtn}
                        </div>
                    </div>
                    <div className="main-bottom">
                        <ul className="mdui-list">
                            <li className="mdui-list-item mdui-ripple" onClick={() => this.jumpTo("messages")}>
                                <div className="mdui-list-item-content">
                                    <i className="mdui-list-item-icon mdui-icon material-icons">message</i>
                                    <p className="list-p">消息</p>
                                </div>
                                <i className="mdui-list-item-icon mdui-icon material-icons">chevron_right</i>
                            </li>
                            <hr />
                            <li className="mdui-list-item mdui-ripple" onClick={() => this.jumpTo("focus")}>
                                <div className="mdui-list-item-content">
                                    <i className="mdui-list-item-icon mdui-icon material-icons">star</i>
                                    <p className="list-p">关注</p>
                                </div>
                                <i className="mdui-list-item-icon mdui-icon material-icons">chevron_right</i>
                            </li>
                            <hr />
                            <li className="mdui-list-item mdui-ripple">
                                <div className="mdui-list-item-content">
                                    <i className="mdui-list-item-icon mdui-icon material-icons">help_outline</i>
                                    <p className="list-p">帮助</p>
                                </div>
                                {/* <i className="mdui-list-item-icon mdui-icon material-icons">chevron_right</i> */}
                            </li>
                            <hr />

                            <li className="mdui-list-item mdui-ripple">
                                <div className="mdui-list-item-content">
                                    <i className="mdui-list-item-icon mdui-icon material-icons">lightbulb_outline</i>
                                    <p className="list-p">其它</p>
                                </div>
                                {/* <i className="mdui-list-item-icon mdui-icon material-icons">chevron_right</i> */}
                            </li>
                            <hr />
                        </ul>
                    </div>
                </div>
                <Foot />
            </div>
        )
    }
}