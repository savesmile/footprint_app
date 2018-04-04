import React, {Component} from "react"
import "../../../utils/layer/mobile/layer.js"
import axios from "axios"
import Foot from "../foot"
import {connect} from "react-redux"

import Back from "../back";
//import {get_insert_detail} from "../../actions";

axios.defaults.baseURL = "http://39.106.19.127:3000"
// axios.defaults.baseURL = "http://localhost:3000";
@connect(
    (state) => ({...state})
)
export default class Forget_pwd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authCode: null,
        }
    }

    authCodeBtnClick = () => {
        let authCode = Array();
        for (let i = 0; i <= 3; i++) {
            authCode.push(Math.floor(Math.random() * 10));
        }
        layer.open(
            {
                content: '你的验证码是 ' + authCode,
                time: 5
            }
        );
        this.setState({
            authCode: authCode
        })
    };

    handleSubmit = () => {
        console.log(this.refs.username.value);
        event.preventDefault();

    };

    render() {
        const {dispatch} = this.props;

        return (
            <div className="forgetPwd">
                <Back backTo="my" header="reset password"/>
                <div className="mdui-container">
                    <div className="mdui-textfield mdui-textfield-floating-label">
                        <i className="mdui-icon material-icons">account_circle</i>
                        <label className="mdui-textfield-label">Username</label>
                        <input className="mdui-textfield-input" type="text" required ref="username"/>
                    </div>
                    <div className="mdui-textfield mdui-textfield-floating-label authCode">
                        <i className="mdui-icon material-icons">message</i>
                        <label className="mdui-textfield-label">Authcode</label>
                        <input className="mdui-textfield-input" type="text" required ref="authCode"/>

                    </div>
                    <div className="mdui-textfield mdui-textfield-floating-label">
                        <i className="mdui-icon material-icons">lock</i>
                        <label className="mdui-textfield-label">New_password</label>
                        <input className="mdui-textfield-input" type="text" required ref={"pwd"}
                               pattern="\d{3}"/>
                    </div>
                </div>

                <button className="mdui-btn mdui-btn-raised mdui-ripple
                mdui-color-theme-accent mdui-center mdui-color-grey-300" disabled
                        onClick={this.handleSubmit}>
                    <p><strong>reset</strong></p>
                </button>
                <button className="authCodeBtn mdui-btn mdui-btn-raised mdui-btn-dense mdui-color-grey-300
                             mdui-color-theme-accent mdui-ripple mdui-center"
                        onClick={this.authCodeBtnClick}>
                    验 证 码
                </button>
                <Foot/>
            </div>

        )
    }
}