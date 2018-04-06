import React, {Component} from "react"
import "../../../utils/layer/mobile/layer.js"
import axios from "axios"
import Foot from "../foot"
import {connect} from "react-redux"

import Back from "../back";
//import {get_insert_detail} from "../../actions";

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
    handleSubmit=()=>{
        console.log(this.refs.username.value)
        var pwd = this.refs.pwd.value;
        var username = this.refs.username.value

        // this.fetchPost("http://192.168.0.105:20000/api/user/sign-in",{
        //     phone:this.refs.username.value,
        //     password:this.refs.pwd.value
        // },json=>{
        //     if(json.code==0){
        //         sessionStorage.setItem("token",json.data.token);
        //         hashHistory.push("/his");
        //     }
        // })
        
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
                <Back backTo="login" header="reset password"/>
                <div className="mdui-container">
                    <div className="mdui-textfield mdui-textfield-floating-label">
                        <i className="mdui-icon material-icons">account_circle</i>
                        <label className="mdui-textfield-label">Username</label>
                        <input className="mdui-textfield-input" type="text" required ref="username" pattern="/^1[3|4|5|7|8][0-9]{9}$/"/>
                        <div className="mdui-textfield-error" >请输入正确的11位的电话号</div>

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