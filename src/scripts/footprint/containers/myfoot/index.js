import React, {Component} from "react"
import {connect} from "react-redux"
import {Link, hashHistory} from "react-router"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ExamplePic from "../../../../assets/images/example.jpg"
import ExamplePic2 from "../../../../assets/images/example2.jpg"

import CollectionsPage from "../../components/add_foot"
import {get_one, get_user_detail} from "../../actions"
import axios from "axios"
import avatorPic from "../../../../assets/images/avator1.png"
import Foot from "../../components/foot"
/* axios.defaults.baseURL = "http://39.106.19.127:3000" */
/* axios.defaults.baseURL = "http://localhost:3000"; */

@connect(
    (state) => ({...state})
)
export default class MyFoot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percent: 0,
            flag: false,
            page: 2,
            name: localStorage.name,
            focused: true,
            userId: this.props.params.uid
        }
    }


    componentWillMount() {
        if(this.state.userId==="my"){
            //此处带token请求自己的数据
            console.log("我的足迹")
        }else{
            //此处带userId请求别人的数据
        }

    }

    jumpDetail(value) {
        var path = {
            pathname:'/detail',
            state:{
                userId:this.state.userId,
                articleId:value
            },
        };
        hashHistory.push(path)
    }

    focus = () => {
        if (this.state.focused) {
            //询问框
            layer.open({
                content: '您确定要取消关注吗？'
                , btn: ['确定', '不要']
                , yes: function (index) {
                    //在此请求取消关注接口
                    console.log("取消关注.")
                    layer.close(index);
                }
            });
        } else {
            //在此请求关注接口
            layer.open({
                content: '关注成功'
                , skin: 'msg'
                , time: 2 //2秒后自动关闭
            });
        }
    };

    render() {
        var focused = (<span className="focus" onClick={this.focus}>已关注</span>);
        var unFocus = (<span className="focus" onClick={this.focus}>关注</span>)
        var main = (
            <div>
                <div className="my-foot">
                </div>
                <div className="foot-header mdui-center">
                    <p>我的足迹</p>
                </div>

                <div className="my-foot-contain mdui-center">
                    <div className="my-foot-avator">
                        <div className="avatar mdui-center">
                            <img className="mdui-img-circle" src={avatorPic}/>
                        </div>
                        <div className="nickname mdui-center">
                            <p className="nc">这是昵称 {this.state.userId === "my" ? "" : (this.state.focused ? focused : unFocus)}</p>
                        </div>
                    </div>
                    <section id="cd-timeline" className="cd-container">
                        <div className="cd-timeline-block">
                            <div className="cd-timeline-img">
                                <i className="mdui-icon material-icons">pets</i>
                            </div>
                            <div className="cd-timeline-content" onClick={() => this.jumpDetail("articleId")}>
                                <div className="timeline-time">
                                    <p>2018-04-02 15:24:36</p>
                                    <p>2018-04-02 15:24:36</p>
                                    <p
                                        className="timeline-location">澳洲</p><i
                                    className="mdui-icon material-icons">room</i>
                                </div>
                                <div className="mdui-typo">
                                    <blockquote>
                                        <p>无论走到哪里，都应该记住，过去都是假的，回忆是一条没有尽头的路.</p>
                                    </blockquote>
                                </div>
                                <div className="content-pic">
                                    <img src={ExamplePic}/>
                                </div>
                            </div>
                        </div>
                        <div className="cd-timeline-block">
                            <div className="cd-timeline-img">
                                <i className="mdui-icon material-icons">pets</i>
                            </div>

                            <div className="cd-timeline-content">
                                <div className="timeline-time">
                                    <p>2018-04-02 15:24:36</p>
                                    <p
                                        className="timeline-location">加利福利亚</p><i
                                    className="mdui-icon material-icons">room</i>
                                </div>
                                <div className="content-pic">
                                    <img src={ExamplePic2}/>
                                </div>
                            </div>
                        </div>
                        <div className="cd-timeline-block">
                            <div className="cd-timeline-img">
                                <i className="mdui-icon material-icons">pets</i>
                            </div>

                            <div className="cd-timeline-content">
                                <div className="timeline-time">
                                    <p>2018-04-02 15:24:36</p>
                                    <p
                                        className="timeline-location">加利福利亚</p><i
                                    className="mdui-icon material-icons">room</i>
                                </div>
                                <div className="content-pic">
                                    <img src={ExamplePic}/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );

        return (
            <div>
                {main}

                <CollectionsPage/>
                <Foot/>
            </div>

        )
    }
}