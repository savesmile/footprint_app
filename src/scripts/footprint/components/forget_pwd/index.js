import React,{Component} from "react"
import {Link,hashHistory} from "react-router"
import   "../../../utils/layer/mobile/layer.js"
import axios from "axios"
import {connect} from "react-redux"
import {Alert} from "antd"
//import {get_insert_detail} from "../../actions";

axios.defaults.baseURL = "http://39.106.19.127:3000" 
// axios.defaults.baseURL = "http://localhost:3000";
@connect(
    state=>state
)
export default class Forget_pwd extends Component{


    render(){
        const {dispatch} = this.props;
        return(
            <div className="forgetPwd">  
                <form name="updateMessages">
                    <div className="mdui-container">
                        <div className="mdui-textfield mdui-textfield-floating-label">
                            <i className="mdui-icon material-icons">account_circle</i>
                            <label className="mdui-textfield-label">Username</label>
                            <div className="mdui-textfield-error">用户名不能为空</div>
                            <input className="mdui-textfield-input" type="text" required name="userName"></input>
                        </div>
                        <div className="mdui-textfield mdui-textfield-floating-label">
                            <i className="mdui-icon material-icons">message</i>
                            <label className="mdui-textfield-label">authCode</label>
                            <input className="mdui-textfield-input" type="text" required name="authCode"/>
                            <div className="mdui-textfield-error">验证码不能为空</div>
                        </div>
                        <div className="mdui-textfield mdui-textfield-floating-label">
                            <i className="mdui-icon material-icons">message</i>
                            <label className="mdui-textfield-label">new_password</label>
                            <input className="mdui-textfield-input" type="text" required name="authCode"/>
                            <div className="mdui-textfield-error">新密码不能为空</div>
                        </div>
                    </div>

                    <button className="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent mdui-center"><p><strong>确 认</strong></p></button>
                </form>
            </div>
        )
    }
}