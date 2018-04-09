import React, { Component } from "react"
import { Link, hashHistory } from "react-router"
import { connect } from "react-redux"
import { width } from "window-size";
import Foot from "../foot"
import Back from "../back"
import nonePic from "../../../../assets/images/none.png"
import Base from "../base"

@connect(
    (state) => ({ ...state })
)
export default class Messages extends Base {

    constructor(props) {
        super(props);
        this.state = {
            token: sessionStorage.token,
            messageList: []
        }
    }
    componentDidMount = () => {
        this.getMessagesList();
    }
    getMessagesList = () => {
        this.fetchGet("http://47.95.121.41:20000/api/user/messages?token=" + this.state.token, json => {
            console.log(json.data)
            if (json.code == 0) {
                this.setState({
                    messageList: json.data
                })
            }
        })
    }

    render() {
        var messageHtml = null;
        const { messageList } = this.state;
        if (messageList.length > 0) {
            messageHtml = messageList.map((item, index) => {
                return (
                    <li className="mdui-list-item mdui-ripple" key={index}>
                        <div className="mdui-list-item-avatar"><img src={item.avatar} /></div>
                        <div className="mdui-list-item-content">
                            <div className="mdui-list-item-title"><p>{item.authorName} <span>{this.timestampToTime(item.createDate)}</span></p>
                            </div>
                            <div className="mdui-list-item-text mdui-list-item-one-line">
                                {item.comment}
                            </div>
                        </div>
                    </li>);
            })
        }

        var messages = (
            <div className="detail-component-content">
                <ul className="mdui-list">
                    {messageHtml}
                </ul>
            </div>
        );

        var none = (
            <div className="">
                <img className="nonePic" src={nonePic} />
            </div>
        )

        return (
            <div className="message">
                <Back backTo="my" header="消息列表" />
                <div className="mdui-container mdui-center">
                    {this.state.messageList.length == 0?none:messages}
                </div>
                <Foot />
            </div>
        )
    }
}