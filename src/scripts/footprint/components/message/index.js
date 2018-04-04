import React, {Component} from "react"
import {Link, hashHistory} from "react-router"
import {connect} from "react-redux"
import {width} from "window-size";
import Foot from "../foot"
import Back from "../back"
import avatorPic2 from "../../../../assets/images/avator2.jpg"
import nonePic from "../../../../assets/images/none.png"

@connect(
    (state) => ({...state})
)
export default class Messages extends Component {


    render() {

        var messageList = (
            <div className="detail-component-content">
                <ul className="mdui-list">
                    <li className="mdui-list-item mdui-ripple">
                        <div className="mdui-list-item-avatar"><img src={avatorPic2}/></div>
                        <div className="mdui-list-item-content">
                            <div className="mdui-list-item-title"><p>Brunch <span>2018-04-03</span></p>
                            </div>
                            <div className="mdui-list-item-text mdui-list-item-one-line">
                                - I'll be in your neighborhood ...
                            </div>
                        </div>
                    </li>
                    <li className="mdui-list-item mdui-ripple">
                        <div className="mdui-list-item-avatar"><img src={avatorPic2}/></div>
                        <div className="mdui-list-item-content">
                            <div className="mdui-list-item-title"><p>Brunch <span>2018-04-03</span></p>
                            </div>
                            <div className="mdui-list-item-text mdui-list-item-one-line">
                                - I'll be in your neighborhood ...
                            </div>
                        </div>
                    </li>
                    <li className="mdui-list-item mdui-ripple">
                        <div className="mdui-list-item-avatar"><img src={avatorPic2}/></div>
                        <div className="mdui-list-item-content">
                            <div className="mdui-list-item-title"><p>Brunch <span>2018-04-03</span></p>
                            </div>
                            <div className="mdui-list-item-text mdui-list-item-one-line">
                                - I'll be in your neighborhood ...
                            </div>
                        </div>
                    </li>
                    <li className="mdui-list-item mdui-ripple">
                        <div className="mdui-list-item-avatar"><img src={avatorPic2}/></div>
                        <div className="mdui-list-item-content">
                            <div className="mdui-list-item-title"><p>Brunch <span>2018-04-03</span></p>
                            </div>
                            <div className="mdui-list-item-text mdui-list-item-one-line">
                                - I'll be in your neighborhood ...
                            </div>
                        </div>
                    </li>
                    <li className="mdui-list-item mdui-ripple">
                        <div className="mdui-list-item-avatar"><img src={avatorPic2}/></div>
                        <div className="mdui-list-item-content">
                            <div className="mdui-list-item-title"><p>Brunch <span>2018-04-03</span></p>
                            </div>
                            <div className="mdui-list-item-text mdui-list-item-one-line">
                                - I'll be in your neighborhood ...
                            </div>
                        </div>
                    </li>


                    <li className="mdui-list-item mdui-ripple">
                        <div className="mdui-list-item-avatar"><img src={avatorPic2}/></div>
                        <div className="mdui-list-item-content">
                            <div className="mdui-list-item-title">BBQ</div>
                            <div className="mdui-list-item-text mdui-list-item-one-line">
                                - Wish I could ...
                            </div>
                        </div>
                    </li>
                    <li className="mdui-list-item mdui-ripple">
                        <div className="mdui-list-item-avatar"><img src={avatorPic2}/></div>
                        <div className="mdui-list-item-content">
                            <div className="mdui-list-item-title">Oui</div>
                            <div className="mdui-list-item-text mdui-list-item-one-line">
                                - Do you have Paris reco ...
                            </div>
                        </div>
                    </li>
                    <li className="mdui-list-item mdui-ripple">
                        <div className="mdui-list-item-avatar"><img src={avatorPic2}/></div>
                        <div className="mdui-list-item-content">
                            <div className="mdui-list-item-title">Oui</div>
                            <div className="mdui-list-item-text mdui-list-item-one-line">
                                - Do you have Paris reco ...
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );

        var follow = (
            <div className="">
                <img className="nonePic" src={nonePic}/>
            </div>
        )

        return (
            <div className="message">
                <Back backTo="my" header="消息列表"/>
                <div className="mdui-container mdui-center">
                    {messageList}
                </div>
                <Foot/>
            </div>
        )
    }
}