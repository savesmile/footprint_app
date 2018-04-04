import React, {Component} from "react"
import {Link, hashHistory} from "react-router"
import {connect} from "react-redux"
import {width} from "window-size";
import Foot from "../foot"
import Back from "../back"
import {Tabs} from 'antd';
import avatorPic2 from "../../../../assets/images/avator2.jpg"
import nonePic from "../../../../assets/images/none.png"

const TabPane = Tabs.TabPane;

@connect(
    (state) => ({...state})
)
export default class Focus extends Component {
    jumpToFoot = (uid) => {
        hashHistory.push("/my_foot/" + uid)
    };

    render() {
        var focus = (
            <div className="detail-component-content">
                <ul className="mdui-list">
                    <li className="mdui-list-item mdui-ripple" onClick={() => this.jumpToFoot("test")}>
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
            <div className="focus">
                <Back backTo="my"/>
                <div className="mdui-container mdui-center">
                    <Tabs>
                        <TabPane tab="关注" key="1">{focus}</TabPane>
                        <TabPane tab="粉丝" key="2">{follow}</TabPane>
                    </Tabs>
                </div>
                <Foot/>
            </div>
        )
    }
}