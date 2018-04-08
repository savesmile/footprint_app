import React, { Component } from "react"
import { connect } from "react-redux"
import { Link, hashHistory } from "react-router"
import Base from "../../components/base";
import CollectionsPage from "../../components/add_foot"
import avatorPic from "../../../../assets/images/avator1.png"
import Foot from "../../components/foot"

@connect(
    (state) => ({ ...state })
)
export default class MyFoot extends Base {
    constructor(props) {
        super(props);
        this.state = {
            percent: 0,
            flag: false,
            page: 2,
            token: sessionStorage.token,
            userId: this.props.params.uid,
            timeLine: {}
        }
    }


    componentWillMount() {
        if (this.state.userId === "my") {
            if (!this.state.token) {
                layer.open({
                    content: '请登录'
                    , btn: ['确认', '取消']
                    , yes: function (index) {
                        hashHistory.push("/login");
                        layer.close(index);
                    }
                });
            } else {
                this.getData();
            }
        } else {
            //此处带userId请求别人的数据
            this.getOtherData();
        }

    }

    jumpDetail(value) {
        var path = {
            pathname: '/detail',
            state: {
                userId: this.state.userId,
                articleId: value
            },
        };
        hashHistory.push(path)
    }


    getData = () => {
        var baseUri = "http://192.168.0.105:20000";
        this.fetchGet(baseUri + "/api/comment/article/time-line?token=" + this.state.token, json => {
            if (json.code == 0) {
                this.setState({
                    timeLine: json.data
                })
            }
        });
    }
    getOtherData = () => {
        var baseUri = "http://192.168.0.105:20000";
        this.fetchGet(baseUri + "/api/comment/article/other-time-line?token=" + this.state.token+"&other-user-id="+this.state.userId, json => {
            if (json.code == 0) {
                console.log(json.data)
                this.setState({
                    timeLine: json.data
                })
            }
        });
    }

    focus = () => {
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
        if (this.state.timeLine.focus) {
            //询问框
            layer.open({
                content: '您确定要取消关注吗？'
                , btn: ['确定', '不要']
                , yes: (index) => {
                    this.fetchPost("http://192.168.0.105:20000/api/user/un-focus?token=" + this.state.token, {
                        focusUserId: this.state.userId,
                    }, json => {
                        console.log(json)
                        if (json.code == 0) {
                            console.log(json)
                            layer.open({
                                content: '取消成功'
                                , skin: 'msg'
                                , time: 2 //2秒后自动关闭
                            });
                            this.getOtherData();
                        }
                    })
                    layer.close(index);
                }
            });
        } else {
            //在此请求关注接口
            this.fetchPost("http://192.168.0.105:20000/api/user/focus?token=" + this.state.token, {
                focusUserId: this.state.userId,
            }, json => {
                console.log(json)
                if (json.code == 0) {
                    console.log(json)
                    layer.open({
                        content: '关注成功'
                        , skin: 'msg'
                        , time: 2 //2秒后自动关闭
                    });
                    this.getOtherData();
                }
            })

        }
    };

    render() {
        var focused = (<span className="focus" onClick={this.focus}>已关注</span>);
        var unFocus = (<span className="focus" onClick={this.focus}>关注</span>);
        var main = null;
        const { timeLine } = this.state;
        if (timeLine.articles) {
            main = timeLine.articles.map((item, index) => {
                return (
                    <div className="cd-timeline-block" key={index}>
                        <div className="cd-timeline-img">
                            <i className="mdui-icon material-icons">pets</i>
                        </div>
                        <div className="cd-timeline-content" onClick={() => this.jumpDetail(item.id)}>
                            <div className="timeline-time">
                                <p>{this.timestampToTime(item.createTime)}</p>
                                <p
                                    className="timeline-location">{item.location}</p><i
                                        className="mdui-icon material-icons">room</i>
                            </div>
                            <div className="mdui-typo">
                                <blockquote>
                                    <p dangerouslySetInnerHTML={{
                                        __html: item.summary
                                    }}></p>
                                </blockquote>
                            </div>
                            <div className="content-pic">
                                <img src={item.imgPath} />
                            </div>
                        </div>
                    </div>
                );
            })
        }


        return (
            <div>
                <div>
                    <div className="my-foot">
                    </div>
                    <div className="foot-header mdui-center">
                        <p>{this.state.userId === "my" ? "我" : "他"}的足迹</p>
                    </div>

                    <div className="my-foot-contain mdui-center">
                        <div className="my-foot-avator">
                            <div className="avatar mdui-center">
                                <img className="mdui-img-circle" src={this.state.timeLine.authorAvatarPath} />
                            </div>
                            <div className="nickname mdui-center">
                                <p className="nc">{this.state.timeLine.authorName} {this.state.userId === "my" ? "" : (this.state.timeLine.focus ? focused : unFocus)}</p>
                            </div>
                        </div>
                        <section id="cd-timeline" className="cd-container">
                            {main}
                        </section>
                    </div>
                </div>
                {this.state.userId === "my"?<CollectionsPage dataChange={this.getData} />:""}
                <Foot />
            </div>

        )
    }
}