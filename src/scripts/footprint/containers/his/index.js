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
import Base from "../../components/base";
import Foot from "../../components/foot"


const TabPane = Tabs.TabPane;


@connect(
    (state) => ({...state})
)
export default class His extends Base {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            token: sessionStorage.token,
            dataList:[]
        }
    }

    componentDidMount() {
        this.getData();
        this.interest();
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
    //获取最新列表
    getData = ()=>{
        this.fetchGet("http://192.168.0.105:20000/api/comment/article",json=>{
            if(json.code==0){
                this.setState({
                    dataList:json.data
                    
                })
            }
        })
    }
    //获取关注列表
    interest=()=>{
        this.fetchGet("http://192.168.0.105:20000/api/comment/article?token="+this.state.token+"&click_type=focus",json=>{
            console.log(json)
            if(json.code==0){
                this.setState({
                    interestList:json.data
                })
            }
        })
    }
    render() {
        console.log(this.state.dataList)
        const {dataList} = this.state;
        var html = null;
        var content = null;
        if(dataList.length>0){
            content = dataList.map((item,index)=>{
                return(
                    <div className="mdui-card" ref="card" key={index}>
                        <div className="mdui-card-media">
                            <div className="mdui-card-header">
                                <img className="mdui-card-header-avatar" src={item.avatarPath}/>
                                <div className="mdui-card-header-title">昵称:{item.authorName}</div>
                                <div className="mdui-card-header-subtitle">{this.timestampToTime(item.createTime)}</div>
                            </div>
                            <img src={item.imgPath}/>
                            <div className="mdui-card-media-covered mdui-card-media-covered-transparent">
                                <div className="mdui-card-primary">
                                    <div className="mdui-card-primary-title">{item.title}</div>
                                    <div className="mdui-card-primary-subtitle">{item.summary}</div>
                                </div>
                            </div>
                        </div>
                        <div className="mdui-card-actions icons">
                            <i className="mdui-icon material-icons">format_list_bulleted</i>
                            <i className="mdui-icon material-icons">bookmark_border</i>
                        </div>
                    </div>
                )
            })
            html = (
                <div>
                    {content}
                    {/* <div className="mdui-card" ref="card">
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
                    </div> */}
    
    
                </div>
            );
        }
        


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