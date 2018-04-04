import React, {Component} from "react"
import {connect} from "react-redux"
import Foot from "../../../components/foot"
import Back from "../../../components/back"
import {Link, hashHistory} from "react-router"
/* axios.defaults.baseURL = "http://39.106.19.127:3000" */
/* axios.defaults.baseURL = "http://localhost:3000"; */
@connect(
    (state) => ({...state})
)


export default class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            token: "test_token"
        }
    }

    resetPwdBtn=()=>{
        hashHistory.push("/forget_pwd");
    };

    render() {

        return (
            <div className="setting">
                <Back backTo="my" header="Setting"/>
                <div className="main-bottom mdui-container">
                    <ul className="mdui-list">
                        <li className="mdui-list-item mdui-ripple" onClick={this.resetPwdBtn}>
                            <div className="mdui-list-item-content">
                                <i className="mdui-list-item-icon mdui-icon material-icons">lock_open</i>
                                <p className="list-p">修改密码</p>
                            </div>
                            <i className="mdui-list-item-icon mdui-icon material-icons">chevron_right</i>
                        </li>
                        <hr/>
                        <li className="mdui-list-item mdui-ripple">
                            <div className="mdui-list-item-content">
                                <i className="mdui-list-item-icon mdui-icon material-icons">keyboard_return</i>
                                <p className="list-p">退出登录</p>
                            </div>
                            <i className="mdui-list-item-icon mdui-icon material-icons">chevron_right</i>
                        </li>
                        <hr/>
                    </ul>
                </div>
                <Foot/>
            </div>

        )
    }
}