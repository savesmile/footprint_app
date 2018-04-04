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
export default class Register extends Component {
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
        this.refs.subBtn.disabled = false;
    };

    submitResetPwdBtn = () => {
        var username  = this.refs.username.value;
        var authCode  = this.refs.authC.value;
        var password  = this.refs.password.value;



        layer.open({type: 2,content: 'loading...'});

        return false;
    };


    render() {
        const {dispatch} = this.props;

        return (
            <div className="forgetPwd">
                <Back backTo="my" header="registered"/>
                    <div className="mdui-container">
                        <div className="mdui-textfield mdui-textfield-floating-label">
                            <i className="mdui-icon material-icons">account_circle</i>
                            <label className="mdui-textfield-label">Phone</label>
                            <input className="mdui-textfield-input" type="text" required ref="username"/>

                        </div>
                        <div className="mdui-textfield mdui-textfield-floating-label authCode">
                            <i className="mdui-icon material-icons">message</i>
                            <label className="mdui-textfield-label">authCode</label>
                            <input className="mdui-textfield-input" type="text" required ref="authC"/>
                        </div>
                        <div className="mdui-textfield mdui-textfield-floating-label">
                            <i className="mdui-icon material-icons">lock</i>
                            <label className="mdui-textfield-label">new_password</label>
                            <input className="mdui-textfield-input" type="text" required ref="password"/>
                        </div>
                    </div>
                    <button className=" mdui-btn mdui-btn-raised mdui-ripple
                    mdui-color-theme-accent mdui-center mdui-color-grey-300 " ref="subBtn" disabled onClick={this.submitResetPwdBtn}>
                        <p><strong>registered</strong></p>

                    </button>
                <button className="authCodeBtn mdui-btn mdui-btn-raised mdui-btn-dense mdui-color-grey-300
                             mdui-color-theme-accent mdui-ripple mdui-center"
                        onClick={this.authCodeBtnClick}>
                    验证码
                </button>
                <Foot/>
            </div>

        )
    }
}