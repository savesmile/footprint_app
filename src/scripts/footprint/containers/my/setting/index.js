import React, {Component} from "react"
import {connect} from "react-redux"
import Foot from "../../../components/foot"
import Back from "../../../components/back"
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

    render() {

        return (
            <div className="setting">
                <Back backTo="my" header="Setting"/>
                <div className="main-bottom mdui-container">
                    <ul className="mdui-list">
                        <li className="mdui-list-item mdui-ripple">
                            <div className="mdui-list-item-content">
                                <i className="mdui-list-item-icon mdui-icon material-icons">message</i>
                                <p className="list-p">消息</p>
                            </div>
                            <i className="mdui-list-item-icon mdui-icon material-icons">chevron_right</i>
                        </li>
                        <hr/>
                        <li className="mdui-list-item mdui-ripple">
                            <div className="mdui-list-item-content">
                                <i className="mdui-list-item-icon mdui-icon material-icons">star</i>
                                <p className="list-p">关注</p>
                            </div>
                            <i className="mdui-list-item-icon mdui-icon material-icons">chevron_right</i>
                        </li>
                        <hr/>
                        <hr/>
                        <li className="mdui-list-item mdui-ripple">
                            <div className="mdui-list-item-content">
                                <i className="mdui-list-item-icon mdui-icon material-icons">help_outline</i>
                                <p className="list-p">帮助</p>
                            </div>
                            <i className="mdui-list-item-icon mdui-icon material-icons">chevron_right</i>
                        </li>
                        <hr/>

                        <li className="mdui-list-item mdui-ripple">
                            <div className="mdui-list-item-content">
                                <i className="mdui-list-item-icon mdui-icon material-icons">lightbulb_outline</i>
                                <p className="list-p">其它</p>
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