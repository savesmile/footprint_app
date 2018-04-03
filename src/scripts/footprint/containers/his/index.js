import React, {Component} from "react";
import {connect} from "react-redux";
import {Link, hashHistory} from "react-router";
import avatorPic from "../../../../assets/images/avator1.png";
import testPic from "../../../../assets/images/card.jpg";

import {Tabs} from 'antd';
import ExamplePic from "../../../../assets/images/example.jpg"
import ExamplePic2 from "../../../../assets/images/example2.jpg"
import {get_one, get_update_detail, get_user_detail, get_one_detail} from "../../actions"
import axios from "axios";

import Foot from "../../components/foot"
/* axios.defaults.baseURL = "http://39.106.19.127:3000" */
/* axios.defaults.baseURL = "http://localhost:3000"; */

const TabPane = Tabs.TabPane;


@connect(
    (state) => ({...state})
)
export default class His extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            name: localStorage.name
        }
    }


    //锚点设置
    scrollToAnchor = (anchorName) => {
        this.showItem();
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) {
                anchorElement.scrollIntoView();
            }
        }
    }


    showItem = () => {
        this.setState({
            flag: !(this.state.flag)
        });
        if (this.state.flag) {
            this.refs.rotate.className = "iconfont icon-down-trangle-copy-copy";
        } else {
            this.refs.rotate.className = "iconfont icon-down-trangle-copy-copy rotate";
        }

    }

    componentWillMount() {

        const {one, like} = this.props;
        const {dispatch} = this.props;
        dispatch(get_one("/one", dispatch));
        dispatch(get_user_detail("/detailInfo", dispatch));


    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    handleScroll = () => {
        var total = 667;
        var scrollTop = document.scrollingElement.scrollTop;
        var height = document.body.scrollHeight;

        if (total + scrollTop >= height) {
            console.log("加载更多数据 加载")
        }

    };


    render() {


        var html = (
            <div>
                <div className="mdui-card" ref="card">
                    <div className="mdui-card-media">
                        <div className="mdui-card-header">
                            <img className="mdui-card-header-avatar" src={avatorPic}/>
                            <div className="mdui-card-header-title">昵称:xxx</div>
                            <div className="mdui-card-header-subtitle">2018-03-30 15:26:44</div>
                        </div>
                        <img src={testPic}/>
                        <div className="mdui-card-media-covered mdui-card-media-covered-transparent">
                            <div className="mdui-card-primary">
                                <div className="mdui-card-primary-title">澳洲之旅</div>
                                <div className="mdui-card-primary-subtitle">cccccccccccccccccc</div>
                            </div>
                        </div>
                    </div>
                    <div className="mdui-card-actions icons">
                        <i className="mdui-icon material-icons">format_list_bulleted</i>
                        <i className="mdui-icon material-icons">bookmark_border</i>
                    </div>
                </div>
                <div className="mdui-card" ref="card">
                    <div className="mdui-card-media">
                        <div className="mdui-card-header">
                            <img className="mdui-card-header-avatar" src={avatorPic}/>
                            <div className="mdui-card-header-title">昵称:xxx</div>
                            <div className="mdui-card-header-subtitle">2018-03-30 15:26:44</div>
                        </div>
                        <img src={ExamplePic}/>
                        <div className="mdui-card-media-covered mdui-card-media-covered-transparent">
                            <div className="mdui-card-primary">
                                <div className="mdui-card-primary-title">澳洲之旅</div>
                                <div className="mdui-card-primary-subtitle">cccccccccccccccccc</div>
                            </div>
                        </div>
                    </div>
                    <div className="mdui-card-actions icons">
                        <i className="mdui-icon material-icons">format_list_bulleted</i>
                        <i className="mdui-icon material-icons">bookmark_border</i>
                    </div>
                </div>
                <div className="mdui-card" ref="card">
                    <div className="mdui-card-media">
                        <div className="mdui-card-header">
                            <img className="mdui-card-header-avatar" src={avatorPic}/>
                            <div className="mdui-card-header-title">昵称:xxx</div>
                            <div className="mdui-card-header-subtitle">2018-03-30 15:26:44</div>
                        </div>
                        <img src={ExamplePic2}/>
                        <div className="mdui-card-media-covered ">
                            <div className="mdui-card-primary">
                                <div className="mdui-card-primary-title">澳洲之旅</div>
                                <div className="mdui-card-primary-subtitle">cccccccccccccccccc</div>
                            </div>
                        </div>
                    </div>
                    <div className="mdui-card-actions icons">
                        <i className="mdui-icon material-icons">format_list_bulleted</i>
                        <i className="mdui-icon material-icons">bookmark_border</i>
                    </div>
                </div>
                <div className="mdui-card" ref="card">
                    <div className="mdui-card-media">
                        <div className="mdui-card-header">
                            <img className="mdui-card-header-avatar" src={avatorPic}/>
                            <div className="mdui-card-header-title">昵称:xxx</div>
                            <div className="mdui-card-header-subtitle">2018-03-30 15:26:44</div>
                        </div>
                        <img src={testPic}/>
                        <div className="mdui-card-media-covered mdui-card-media-covered-transparent">
                            <div className="mdui-card-primary">
                                <div className="mdui-card-primary-title">澳洲之旅</div>
                                <div className="mdui-card-primary-subtitle">cccccccccccccccccc</div>
                            </div>
                        </div>
                    </div>
                    <div className="mdui-card-actions icons">
                        <i className="mdui-icon material-icons">format_list_bulleted</i>
                        <i className="mdui-icon material-icons">bookmark_border</i>
                    </div>
                </div>

                <div className="mdui-card">
                    <div className="mdui-card-media">
                        <div className="mdui-card-header">
                            <img className="mdui-card-header-avatar" src={avatorPic}/>
                            <div className="mdui-card-header-title">昵称:xxx</div>
                            <div className="mdui-card-header-subtitle">2018-03-30 15:26:44</div>
                        </div>
                        <img src={testPic}/>
                        <div className="mdui-card-media-covered mdui-card-media-covered-transparent">
                            <div className="mdui-card-primary">
                                <div className="mdui-card-primary-title">澳洲之旅</div>
                                <div className="mdui-card-primary-subtitle">cccccccccccccccccc</div>
                            </div>
                        </div>
                    </div>
                    <div className="mdui-card-actions icons">
                        <i className="mdui-icon material-icons">format_list_bulleted</i>
                        <i className="mdui-icon material-icons">bookmark_border</i>
                    </div>
                </div>


                <div className="mdui-card">
                    <div className="mdui-card-header">
                        <img className="mdui-card-header-avatar" src={avatorPic}/>
                        <div className="mdui-card-header-title">昵称:xxx</div>
                        <div className="mdui-card-header-subtitle">我就是这么一个人</div>
                    </div>
                    <div className="mdui-card-media">
                        <img src={testPic}/>
                        <div className="mdui-card-media-covered mdui-card-media-covered-transparent">
                            <div className="mdui-card-primary">
                                <div className="mdui-card-primary-title">澳洲之旅</div>
                                <div className="mdui-card-primary-subtitle">cccccccccccccccccc</div>
                            </div>
                        </div>
                    </div>
                    <div className="mdui-card-actions icons">
                        <i className="mdui-icon material-icons">format_list_bulleted</i>
                        <i className="mdui-icon material-icons">bookmark_border</i>
                    </div>
                </div>
                <div className="mdui-card">
                    <div className="mdui-card-header">
                        <img className="mdui-card-header-avatar" src={avatorPic}/>
                        <div className="mdui-card-header-title">昵称:xxx</div>
                        <div className="mdui-card-header-subtitle">我就是这么一个人</div>
                    </div>
                    <div className="mdui-card-media">
                        <img src={testPic}/>
                        <div className="mdui-card-media-covered mdui-card-media-covered-transparent">
                            <div className="mdui-card-primary">
                                <div className="mdui-card-primary-title">澳洲之旅</div>
                                <div className="mdui-card-primary-subtitle">cccccccccccccccccc</div>
                            </div>
                        </div>
                    </div>
                    <div className="mdui-card-actions icons">
                        <i className="mdui-icon material-icons">format_list_bulleted</i>
                        <i className="mdui-icon material-icons">bookmark_border</i>
                    </div>
                </div>
                <div className="mdui-card">
                    <div className="mdui-card-header">
                        <img className="mdui-card-header-avatar" src={avatorPic}/>
                        <div className="mdui-card-header-title">昵称:xxx</div>
                        <div className="mdui-card-header-subtitle">我就是这么一个人</div>
                    </div>
                    <div className="mdui-card-media">
                        <img src={testPic}/>
                        <div className="mdui-card-media-covered mdui-card-media-covered-transparent">
                            <div className="mdui-card-primary">
                                <div className="mdui-card-primary-title">澳洲之旅</div>
                                <div className="mdui-card-primary-subtitle">cccccccccccccccccc</div>
                            </div>
                        </div>
                    </div>
                    <div className="mdui-card-actions icons">
                        <i className="mdui-icon material-icons">format_list_bulleted</i>
                        <i className="mdui-icon material-icons">bookmark_border</i>
                    </div>
                </div>
                <div className="mdui-card">
                    <div className="mdui-card-media">
                        <div className="mdui-card-header">
                            <img className="mdui-card-header-avatar" src={avatorPic}/>
                            <div className="mdui-card-header-title">昵称:xxx</div>
                            <div className="mdui-card-header-subtitle">我就是这么一个人</div>
                        </div>
                        <img src={testPic}/>
                        <div className="mdui-card-media-covered mdui-card-media-covered-transparent">
                            <div className="mdui-card-primary">
                                <div className="mdui-card-primary-title">澳洲之旅</div>
                                <div className="mdui-card-primary-subtitle">cccccccccccccccccc</div>
                            </div>
                        </div>
                    </div>
                    <div className="mdui-card-actions icons">
                        <i className="mdui-icon material-icons">format_list_bulleted</i>
                        <i className="mdui-icon material-icons">bookmark_border</i>
                    </div>
                </div>
                <div className="mdui-card">
                    <div className="mdui-card-media">
                        <div className="mdui-card-header">
                            <img className="mdui-card-header-avatar" src={avatorPic}/>
                            <div className="mdui-card-header-title">昵称:xxx</div>
                            <div className="mdui-card-header-subtitle">我就是这么一个人</div>
                        </div>
                        <img src={testPic}/>
                        <div className="mdui-card-media-covered mdui-card-media-covered-transparent">
                            <div className="mdui-card-primary">
                                <div className="mdui-card-primary-title">澳洲之旅</div>
                                <div className="mdui-card-primary-subtitle">cccccccccccccccccc</div>
                            </div>
                        </div>
                    </div>
                    <div className="mdui-card-actions icons">
                        <i className="mdui-icon material-icons">format_list_bulleted</i>
                        <i className="mdui-icon material-icons">bookmark_border</i>
                    </div>
                </div>


            </div>
        );


        return (
            <div className="mdui-container his">
                <Tabs>
                    <TabPane tab="最新" key="1">{html}</TabPane>
                    <TabPane tab="关注" key="2">ddd</TabPane>
                </Tabs>
                <Foot/>
            </div>
        )
    }
}