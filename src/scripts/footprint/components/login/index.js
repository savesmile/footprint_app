import React, {Component} from "react"
import {connect} from "react-redux"
import {hashHistory, Link} from "react-router"

import axios from "axios"


/* axios.defaults.baseURL = "http://39.106.19.127:3000" */
/* axios.defaults.baseURL = "http://localhost:3000"; */
@connect(
    (state) => ({ ...state })
)


export default class Login extends Component {
    submit=()=>{
      
        axios.post("/findUser",{
            phone:this.state.name
        }).then(res=>{
            if(this.state.pwd==res.data.pwd){
                localStorage.setItem("name",this.state.name);
                hashHistory.push("/one");
               
            }else{
                layer.open({
                    content: '用户名或密码错误',
                    style: 'background-color:#ddd; color:orange; border:none;font-size:28px', //自定风格
                    time: 2
                  });
            }
        })
    }


    render() {
        return (
            <div className="login">  
                <form name="loginMessages">
                    <div className="mdui-container">
                        <div className="mdui-textfield mdui-textfield-floating-label">
                            <i className="mdui-icon material-icons">account_circle</i>
                            <label className="mdui-textfield-label">Username</label>
                            <input className="mdui-textfield-input" type="text" required name="userName"/>
                        </div>
                        <div className="mdui-textfield mdui-textfield-floating-label">
                            <i className="mdui-icon material-icons">lock</i>
                            <label className="mdui-textfield-label">Password</label>
                            <input className="mdui-textfield-input" type="text" required name="passWord"/>
                        </div>
                       
                    </div>
                   
                    <button className="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent mdui-center mdui-color-grey-300">
                        <p><strong>登 录</strong></p>
                    </button>
                </form>
                <div className="loginP mdui-center">
                    <Link className="mdui-float-left" to={"/forget_pwd"}><small>忘记密码？</small></Link>
                    <Link className="mdui-float-right" to={"/register"}><small>注 册</small></Link>
                </div>
            </div>
        )
    }
}