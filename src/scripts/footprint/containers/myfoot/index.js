import React, {Component} from "react"
import {connect} from "react-redux"
import {Link, hashHistory} from "react-router"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ExamplePic from "../../../../assets/images/example.jpg"
import ExamplePic2 from "../../../../assets/images/example2.jpg"

import CollectionsPage from "../../components/add_foot"
import {get_one, get_user_detail} from "../../actions"
import axios from "axios"

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
            page:2,
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

    jumpDetail(value) {
        console.log(value.value)
        //hashHistory.push('/detail/' + value)
    }


    render() {
        var main = null;
        main = (
            <div>
                <div className="my-foot">
                </div>
                <div className="foot-header mdui-center">
                    <p>我的足迹</p>
                </div>
                <div className="my-foot-contain mdui-center">

                    <section id="cd-timeline" className="cd-container">
                        <div className="cd-timeline-block">
                            <div className="cd-timeline-img">
                                <i className="mdui-icon material-icons">pets</i>
                            </div>
                            <div className="cd-timeline-content" value = "Tom" onClick={this.jumpDetail.bind(this)}>
                                <div className="timeline-time">
                                    <p>2018-04-02 15:24:36</p>
                                    <p>2018-04-02 15:24:36</p>
                                    <p
                                    className="timeline-location">澳洲</p><i className="mdui-icon material-icons">room</i>
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
                                        className="timeline-location">加利福利亚</p><i className="mdui-icon material-icons">room</i>
                                </div>
                                <div className="content-pic">
                                    <img src={ExamplePic2}/>
                                </div>
                            </div>
                        </div><div className="cd-timeline-block">
                        <div className="cd-timeline-img">
                            <i className="mdui-icon material-icons">pets</i>
                        </div>

                        <div className="cd-timeline-content">
                            <div className="timeline-time">
                                <p>2018-04-02 15:24:36</p>
                                <p
                                    className="timeline-location">加利福利亚</p><i className="mdui-icon material-icons">room</i>
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