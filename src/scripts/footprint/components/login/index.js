import React, {Component} from "react"
import {connect} from "react-redux"
import {hashHistory, Link} from "react-router"
import Base from "../base";
import Back from "../back";

// axios.defaults.baseURL = "http://47.95.121.41:20000"
@connect(
    (state) => ({ ...state })
)


export default class Login extends Base {
    submit=()=>{
        
        var pwd = this.refs.pwd.value;
        var username = this.refs.username.value

        this.fetchPost("http://47.95.121.41:20000/api/user/sign-in",{
            phone:this.refs.username.value,
            password:this.refs.pwd.value
        },json=>{
            if(json.code==0){
                sessionStorage.setItem("token",json.data.token);
                hashHistory.push("/his");
            }
        })
        
    }
    


    render() {
        return (
            <div className="my">
                <div className="login">  
                <Back backTo="his" header="Login"/>
                <form name="loginMessages" onSubmit={this.submit}>
                    <div className="mdui-container">
                        <div className="mdui-textfield mdui-textfield-floating-label">
                            <i className="mdui-icon material-icons">account_circle</i>
                            <label className="mdui-textfield-label">Username</label>
                            <input className="mdui-textfield-input" type="text" required ref="username"/>
                        </div>
                        <div className="mdui-textfield mdui-textfield-floating-label">
                            <i className="mdui-icon material-icons">lock</i>
                            <label className="mdui-textfield-label">Password</label>
                            <input className="mdui-textfield-input" type="password" required ref="pwd"/>
                        </div>
                       
                    </div>
                   
                    <button className="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent mdui-center mdui-color-grey-300">
                        <p><strong>log in</strong></p>
                    </button>
                </form>
                <div className="loginP mdui-center">
                    <Link className="mdui-float-left" to={"/forget_pwd"}><small>forget password？</small></Link>
                    <Link className="mdui-float-right" to={"/register"}><small>registered</small></Link>
                </div>
            </div>
            </div>
        )
    }
}