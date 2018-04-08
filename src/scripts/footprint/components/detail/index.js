import React, { Component } from "react"
import { connect } from "react-redux"
import { hashHistory } from "react-router";
import QueueAnim from 'rc-queue-anim';
import Foot from "../foot"
import Base from "../../components/base"

@connect(
    (state) => ({ ...state })
)
export default class Detail extends Base {
    constructor(props) {
        super(props);
        var { articleId } = this.props.location.state;
        this.state = {
            title: "Canada",
            componentState: false,
            articleId: articleId,
            token: sessionStorage.token,
            focused: false,
            dataList: {},
            commentList: []
        };

    }

    componentWillMount() {
        //此处请求带articleId 的文章详情
        this.getData();
        console.log(this.state)
    }

    componentClick = () => {
        var cs = !this.state.componentState;
        this.setState({
            componentState: cs
        });
    };

    takeCommentBtn = () => {
        var comment = this.refs.comment.value;
        if (!comment) {
            return false;
        }
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
        //此处进行post请求
        this.fetchPost("http://192.168.0.105:20000/api/comment?token=" + this.state.token, {
            articleId: this.state.articleId,
            toUserId: this.state.dataList.article.authorId,
            comment: this.refs.comment.value
        }, json => {
            if (json.code == 0) {
                layer.open({
                    content: '评论成功'
                    , skin: 'msg'
                    , time: 3 //2秒后自动关闭
                });
                this.refs.comment.value = '';
                this.getData();
            }
        })
    };

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
        if (this.state.dataList.focus) {
            //询问框
            layer.open({
                content: '您确定要取消关注吗？'
                , btn: ['确定', '不要']
                , yes: (index) => {
                    this.fetchPost("http://192.168.0.105:20000/api/user/un-focus?token=" + this.state.token, {
                        focusUserId: this.state.dataList.article.authorId,
                    }, json => {
                        console.log(json)
                        if (json.code == 0) {
                            console.log(json)
                            layer.open({
                                content: '取消成功'
                                , skin: 'msg'
                                , time: 2 //2秒后自动关闭
                            });
                            this.getData();
                        }
                    })
                    layer.close(index);
                }
            });
        } else {
            //在此请求关注接口
            this.fetchPost("http://192.168.0.105:20000/api/user/focus?token=" + this.state.token, {
                focusUserId: this.state.dataList.article.authorId,
            }, json => {
                console.log(json)
                if (json.code == 0) {
                    console.log(json)
                    layer.open({
                        content: '关注成功'
                        , skin: 'msg'
                        , time: 2 //2秒后自动关闭
                    });
                    this.getData();
                }
            })

        }
    };

    unfocus = () => {
        //在此请求取消关注接口
        this.fetchPost("http://192.168.0.105:20000/api/user/un-focus?token=" + this.state.token, {
            focusUserId: this.state.dataList.article.authorId,
        }, json => {
            console.log(json)
            if (json.code == 0) {
                console.log(json)
                layer.open({
                    content: '取消成功'
                    , skin: 'msg'
                    , time: 2 //2秒后自动关闭
                });
                this.getData();
            }
        })
    }

    like = () => {
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
        var uri = "http://192.168.0.105:20000/api/comment/article/like?token=" + this.state.token + "&articleId=" + this.state.articleId;
        if (this.state.dataList.article.like) {
            uri += "&click_type=unlike";
        } else {
            uri += "&click_type=like";
        }
        this.fetchGet(uri, json => {
            console.log(json)
            if (json.code == 0) {
                this.getData();
            }
        })

    }
    getData = () => {
        var uri = "http://192.168.0.105:20000/api/comment/article/detail?article-id=" + this.state.articleId;
        if (this.state.token) {
            uri += "&token=" + this.state.token;
        }
        console.log(uri);
        this.fetchGet(uri, json => {
            console.log(json);
            if (json.code == 0) {
                this.setState({
                    dataList: json.data,
                })
            }
        })
        this.fetchGet("http://192.168.0.105:20000/api/comment/list?article_id=" + this.state.articleId, json => {
            console.log(json.data);
            if (json.code == 0) {
                this.setState({
                    commentList: json.data
                })
            }
        })
    };


    render() {
        const { dataList, commentList } = this.state;
        console.log(dataList);
        var content = null;
        var component = null
        if (dataList.article) {

            content = <div>
                <div ref="detail">
                    <div className="detail-foot">

                        <div className="avatar">
                            <img className="mdui-img-circle" src={dataList.article.avatarPath} />
                        </div>
                        <div className="detail-foot-author">
                            <p>{dataList.article.authorName}</p>
                            <span>{this.timestampToTime(dataList.article.createTime)}</span>
                        </div>
                        <div className="detail-focus mdui-center" onClick={this.focus}>
                            {dataList.focus ? <i className="mdui-icon material-icons focused">star</i>
                                : <i className="mdui-icon material-icons">star_border</i>}
                        </div>
                    </div>
                    <div className="mdui-typo">
                        <blockquote>
                            <p dangerouslySetInnerHTML={{
                                __html: dataList.article.summary
                            }}></p>
                        </blockquote>
                    </div>
                    <div className="detail-pic">
                        <img src={dataList.article.imgPath} />
                    </div>
                    <div className="detail-content mdui-typo-body-2-opacity">
                        <div className="mdui-typo" ref="content" dangerouslySetInnerHTML={{
                            __html: dataList.article.content
                        }}></div>
                    </div>
                </div>
                <div className="detail-location">
                    <p>{dataList.article.location}</p>
                    <i className="mdui-icon material-icons">room</i>
                </div>


                <div className="detail-like">
                    {dataList.likeAvatar ? dataList.likeAvatar.map((avatar, i) => {
                        return (<div className="avatar" key={i}>
                            <img className="mdui-img-circle" src={avatar} />
                        </div>);
                    }) : ""}
                    <div className="like mdui-center" onClick={this.like}>
                        <i className="mdui-icon material-icons">{dataList.article.like ? "favorite" : "favorite_border"}</i>
                        <p>{dataList.article.likeCount}</p>
                    </div>
                </div>
            </div>


        }
        if (commentList.length > 0) {
            component = commentList.map((item, index) => {

                return (


                    <li className="mdui-list-item mdui-ripple" key={index}>
                        <div className="mdui-list-item-avatar"><img src={item.avatarPath} /></div>
                        <div className="mdui-list-item-content">
                            <div className="mdui-list-item-title"><p>{item.avatarNickName}
                                <span>{this.timestampToTime(item.createDate)}</span></p>
                            </div>
                            <div className="mdui-list-item-text mdui-list-item-one-line">
                                {item.comment}
                            </div>
                        </div>
                    </li>


                );

            })


        }

        var inputBtn = (<div className="takeComment" key="demo1">
            <div className="mdui-textfield">
                <textarea className="mdui-textfield-input" placeholder="说点什么吧" ref="comment"></textarea>
                <div className="sendBtn" onClick={this.takeCommentBtn}><i
                    className="mdui-icon material-icons">near_me</i></div>
            </div>
        </div>
        );


        return (
            <div className="foot-detail">
                <div className="back mdui-center">
                    <div className="backIcon" onClick={this.hashHistoryBack}>
                        <i className="mdui-icon material-icons">keyboard_arrow_left</i>
                    </div>
                    <div className="backHeader mdui-center mdui-text-center mdui-text-uppercase">header</div>
                </div>
                <div className="mdui-container">
                    {content}

                    <div className="detail-component">
                        <div className="component-title" onClick={this.componentClick}>
                            <p>
                                <i className="mdui-icon material-icons">
                                    {this.state.componentState === true ? "expand_more" : "expand_less"}
                                </i>
                                评论 {this.state.commentList.length}
                            </p>
                        </div>
                        <QueueAnim>
                            {this.state.componentState === true ?
                                <div className="detail-component-content" key="demo2">
                                    <ul className="mdui-list"> {component} </ul>
                                </div> : ""}
                            {this.state.componentState === true ? inputBtn : ""}
                        </QueueAnim>
                    </div>
                </div>
                <Foot />
            </div>
        )
    }
}