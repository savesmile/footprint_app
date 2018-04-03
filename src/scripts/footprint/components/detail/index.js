import React, {Component} from "react"
import {Link} from "react-router"
import {connect} from "react-redux"
import Back from "../back"
import ExamplePic from "../../../../assets/images/example.jpg"
import avatorPic from "../../../../assets/images/avator1.png"
import avatorPic2 from "../../../../assets/images/avator2.jpg"
import QueueAnim from 'rc-queue-anim';
import Foot from "../foot"

@connect(
    (state) => ({...state})
)
export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Canada",
            componentState: false
        }
    }


    componentClick = () => {
        var cs = !this.state.componentState;
        this.setState({
            componentState: cs
        });
    };

    takeCommentBtn = ()=>{
        var comment = this.refs.comment.value;
        if (!comment){
            console.log('comment is required!');
            return false;
        }
        //此处进行post请求

    };

    render() {
        var component = (<div className="detail-component-content" key="demo2">
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
        </div>);

        var inputBtn = (<div className="takeComment" key="demo1">
                <div className="mdui-textfield">
                    <textarea className="mdui-textfield-input" placeholder="说点什么吧" ref="comment"></textarea>
                    <div className="sendBtn" onClick={this.takeCommentBtn}><i className="mdui-icon material-icons">near_me</i></div>
                </div>
            </div>
        );


        return (
            <div className="foot-detail">
                <Back backTo="my_foot" header={this.state.title}/>
                <div className="mdui-container">
                    <div ref="detail">
                        <div className="detail-foot">

                            <div className="avatar">
                                <img className="mdui-img-circle" src={avatorPic}/>
                            </div>
                            <div className="detail-foot-author">
                                <p>这是昵称</p>
                                <span>2018-04-03 15:20:25</span>
                            </div>
                            <div className="detail-focus mdui-center">
                                <i className="mdui-icon material-icons focused">star</i>
                                {/*<i className="mdui-icon material-icons">star_border</i>*/}
                            </div>
                        </div>
                        <div className="mdui-typo">
                            <blockquote>
                                <p>无论走到哪里，都应该记住，过去都是假的，回忆是一条没有尽头的路，一切以往的春天都不复存在，就连那最坚韧而又狂乱的爱情归根结底也不过是一种转瞬即逝的现实。</p>
                            </blockquote>
                        </div>
                        <div className="detail-pic">
                            <img src={ExamplePic}/>
                        </div>
                        <div className="detail-content mdui-typo-body-2-opacity">
                            <div className="mdui-typo">
                                在曼谷迷路了，只能拿着酒店的卡片问路。结果上来一个衣着整齐但是不会说英语的小帅哥，生生把我送回酒店。后来酒店的人说，他家住在曼谷的另外一边，就是来送我的。<br/>
                                在美帝坐火车出去玩，回来的时候木有定出租，没办法走回宾馆（还没带手机。。非常脑残）。只能去附近的居民家求助。男主人很好心的开车送我回了宾馆。<br/>
                                在美帝出去玩，碰到下雨没带雨具。看到有人穿一次性雨衣，上前打听那里能买到。结果他们要我陪他们走到车子（大概100米），然后把雨衣送给我了。<br/>
                                晚上去听普林斯顿的学生音乐剧，卖票的小哥坚持要我买本校学生票，生生比外国非学生便宜一半。演出结束之后帮我叫出租车，还打电话到酒店确认我安全到了。<br/>
                                去印尼泗水转机，完全没定住宿没看一眼攻略，只能跟着机场大巴去城里。碰到家境贫寒的华裔大叔，带我去家里吃饭还送礼物。<br/>
                            </div>
                        </div>
                    </div>
                    <div className="detail-location">
                        <p>Canada # Ottawa</p>
                        <i className="mdui-icon material-icons">room</i>
                    </div>
                    <div className="detail-like">
                        <div className="avatar">
                            <img className="mdui-img-circle" src={avatorPic2}/>
                        </div>
                        <div className="avatar">
                            <img className="mdui-img-circle" src={avatorPic2}/>
                        </div>
                        <div className="avatar">
                            <img className="mdui-img-circle" src={avatorPic2}/>
                        </div>
                        <div className="avatar">
                            <img className="mdui-img-circle" src={avatorPic2}/>
                        </div>
                        <div className="avatar">
                            <img className="mdui-img-circle" src={avatorPic2}/>
                        </div>
                        <div className="avatar">
                            <img className="mdui-img-circle" src={avatorPic2}/>
                        </div>

                        <div className="like mdui-center">
                            {/*favorite*/}
                            <i className="mdui-icon material-icons">favorite_border</i>
                            <p>5555</p>
                        </div>
                    </div>

                    <div className="detail-component">
                        <div className="component-title" onClick={this.componentClick}>
                            <p>
                                <i className="mdui-icon material-icons">
                                    {this.state.componentState === true ? "expand_more" : "expand_less"}
                                </i>
                                评论 1254
                            </p>
                        </div>
                        <QueueAnim>
                        {this.state.componentState === true ? component : ""}
                        {this.state.componentState === true ? inputBtn : ""}
                        </QueueAnim>
                    </div>
                </div>
                <Foot/>
            </div>
        )
    }
}