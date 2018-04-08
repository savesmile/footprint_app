import React, {Component} from "react";
import {connect} from "react-redux";
import {hashHistory} from "react-router";
import {Tabs} from 'antd';
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
            dataList: []
        }
    }

    componentDidMount() {
        this.getData();
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

    jumpDetail = (value) => {
        var path = {
            pathname: '/detail',
            state: {
                articleId: value
            },
        };
        hashHistory.push(path)
    }
    jumpOther = (userId) => {
        var path = {
            pathname: '/my_foot/'+userId,
        };
        hashHistory.push(path)
    }

    //获取最新列表
    getData = () => {
        this.fetchGet("http://192.168.0.105:20000/api/comment/article", json => {
            if (json.code == 0) {
                this.setState({
                    dataList: json.data
                })
            }
        })
    }
    //获取关注列表
    interest = () => {
        if (!this.state.token) {
            layer.open({
                content: '请登录'
                , btn: ['确认', '取消']
                , yes: function (index) {
                    hashHistory.push("/login");
                    layer.close(index);
                }
            });
            return;
        }

        this.fetchGet("http://192.168.0.105:20000/api/comment/article?token=" + this.state.token + "&click_type=focus", json => {
            console.log(json)
            if (json.code == 0) {
                this.setState({
                    dataList: json.data
                })
            }
        })
    }

    render() {
        const {dataList} = this.state;
        var html = null;
        var content = null;
        if (dataList.length > 0) {
            content = dataList.map((item, index) => {
                return (
                    <div className="mdui-card" ref="card" key={index}>
                        <div className="mdui-card-media">
                            <div className="mdui-card-header">
                                <img className="mdui-card-header-avatar" src={item.avatarPath} onClick={()=>this.jumpOther(item.authorId)}/>
                                <div className="mdui-card-header-title">{item.authorName}</div>
                                <div className="mdui-card-header-subtitle">{this.timestampToTime(item.createTime)}</div>
                            </div>
                            <img src={item.imgPath}/>
                            <div onClick={() => {
                                this.jumpDetail(item.id)
                            }} className="mdui-card-media-covered mdui-card-media-covered-transparent">
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
                </div>
            );
        }


        return (
            <div className="mdui-container his">
                <Tabs defaultActiveKey="1" onChange={(value) => {
                    if (value == "2") {
                        this.interest();
                    } else {
                        this.getData();
                    }
                }}>
                    <TabPane tab="最新" key="1">{html}</TabPane>
                    <TabPane tab="关注" key="2">{html}</TabPane>
                </Tabs>
                <Foot/>
            </div>
        )
    }
}