import React, {Component} from "react"
import "../../../utils/layer/mobile/layer.js"
import axios from "axios"
import Foot from "../foot";
import {hashHistory, Link} from "react-router";
import {connect} from "react-redux"
import Base from "../base";
import Back from "../back";
//import {get_insert_detail} from "../../actions";

@connect(
    (state) => ({...state})
)
export default class Register extends Base {
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
        this.fetchPost("http://192.168.0.105:20000/api/user/sign-up",{
            phone:this.refs.username.value,
            password:this.refs.password.value
        },json=>{
            console.log(json)
            if(json.code==0){
                sessionStorage.setItem("token",json.data.token);
                hashHistory.push("/his");
            }else{
                layer.open(
                    {
                        content: json.msg,
                        time: 3
                    }
                );
            }
        })

        // layer.open({type: 2,content: 'loading...'});

        return false;
    };


    render() {
        const {dispatch} = this.props;

        return (
            <div className="forgetPwd">
                <Back backTo="login" header="registered"/>
                    <div className="mdui-container">
                        <div className="mdui-textfield mdui-textfield-floating-label">
                            <i className="mdui-icon material-icons">account_circle</i>
                            <label className="mdui-textfield-label">Phone</label>
                            <input className="mdui-textfield-input" type="text" required ref="username" pattern="^1[3|4|5|8][0-9]\d{4,8}$"/>
                            <div className="mdui-textfield-error">请输入正确格式的电话号</div>

                        </div>
                        <div className="mdui-textfield mdui-textfield-floating-label authCode">
                            <i className="mdui-icon material-icons">message</i>
                            <label className="mdui-textfield-label">authCode</label>
                            <input className="mdui-textfield-input" type="text" required ref="authC"/>
                        </div>
                        <div className="mdui-textfield mdui-textfield-floating-label">
                            <i className="mdui-icon material-icons">lock</i>
                            <label className="mdui-textfield-label">new_password</label>
                            <input className="mdui-textfield-input" type="text" required ref="password" pattern="\d{6}"/>
                            <div className="mdui-textfield-error">请输入6位数字组成的密码</div>
                        </div>
                    </div>
                    <button className=" mdui-btn mdui-btn-raised mdui-ripple
                    mdui-color-theme-accent mdui-center mdui-color-grey-300 " ref="subBtn" onClick={this.submitResetPwdBtn}>
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