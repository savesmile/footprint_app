import React, {Component} from "react"
import {connect} from "react-redux"
import Foot from "../../../components/foot"
import Back from "../../../components/back"
import {Link, hashHistory} from "react-router"

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
    exit=()=>{
        console.log(1111111111)
        layer.open({
            content: '确认要退出登录吗?'
            ,btn: ['确认', '取消']
            ,yes: function(index){
              hashHistory.push("/login");
              sessionStorage.clear();
              localStorage.clear();
              layer.close(index);
            }
          });
        // layer.open({
        //     content: '确认要退出登录吗?',
        //     style: 'background-color:#ddd; color:orange; border:none;font-size:28px', //自定风格
        //     time: 2
        //   });
    }
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
                            <div className="mdui-list-item-content" onClick={this.exit}>
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