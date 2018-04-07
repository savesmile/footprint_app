import React, {Component} from "react"
import {Link, hashHistory} from "react-router"
import {connect} from "react-redux"
import {width} from "window-size";
import Foot from "../foot"
import Back from "../back"
import {Tabs} from 'antd';
import avatorPic2 from "../../../../assets/images/avator2.jpg"
import nonePic from "../../../../assets/images/none.png"
import Base from "../base";
const TabPane = Tabs.TabPane;

@connect(
    (state) => ({...state})
)
export default class Focus extends Base {
    constructor(props){
        super(props);
        this.state={
            token:sessionStorage.token,
            focusList:[],
            followList:[]
        }
    }
    jumpToFoot = (uid) => {
        hashHistory.push("/my_foot/" + uid)
    };
    componentDidMount=()=>{
        this.getFocusList();
    }
    //获取关注列表
    getFocusList =()=>{
        this.fetchGet("http://192.168.0.105:20000/api/user/my-focus?token="+this.state.token,json=>{
            if(json.code==0){
                this.setState({
                    focusList:json.data 
                })
            }
        })
    }
    //获取粉丝列表
    getFollowList =()=>{
        this.fetchGet("http://192.168.0.105:20000/api/user/my-follow?token="+this.state.token,json=>{
            console.log(json);
            if(json.code==0){
                this.setState({
                    followList:json.data 
                })
            }
        })
    }
    render() {
        const{focusList,followList} = this.state;
        var focus = null;
        var focusDetatil = null;
        var followDetail = null;
        if(focusList.length>0){
            focusDetatil = focusList.map((item,index)=>{
                return(
                    <li className="mdui-list-item mdui-ripple" key={index}>
                        <div className="mdui-list-item-avatar"><img src={item.avatar}/></div>
                        <div className="mdui-list-item-content">
                            <div className="mdui-list-item-title"><p>{item.nickName}</p>
                            </div>
                        </div>
                    </li>
                )
            })
        }
        focus = (
            <div className="detail-component-content">
                <ul className="mdui-list">
                    {focusDetatil}
                    {/*<li className="mdui-list-item mdui-ripple" onClick={() => this.jumpToFoot("test")}>*/}
                        {/*<div className="mdui-list-item-avatar"><img src={avatorPic2}/></div>*/}
                        {/*<div className="mdui-list-item-content">*/}
                            {/*<div className="mdui-list-item-title"><p>Brunch <span>2018-04-03</span></p>*/}
                            {/*</div>*/}
                            {/*<div className="mdui-list-item-text mdui-list-item-one-line">*/}
                                {/*- I'll be in your neighborhood ...*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</li>*/}
                    {/*<li className="mdui-list-item mdui-ripple">*/}
                        {/*<div className="mdui-list-item-avatar"><img src={avatorPic2}/></div>*/}
                        {/*<div className="mdui-list-item-content">*/}
                            {/*<div className="mdui-list-item-title"><p>Brunch <span>2018-04-03</span></p>*/}
                            {/*</div>*/}
                            {/*<div className="mdui-list-item-text mdui-list-item-one-line">*/}
                                {/*- I'll be in your neighborhood ...*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</li>*/}
                    {/*<li className="mdui-list-item mdui-ripple">*/}
                        {/*<div className="mdui-list-item-avatar"><img src={avatorPic2}/></div>*/}
                        {/*<div className="mdui-list-item-content">*/}
                            {/*<div className="mdui-list-item-title"><p>Brunch <span>2018-04-03</span></p>*/}
                            {/*</div>*/}
                            {/*<div className="mdui-list-item-text mdui-list-item-one-line">*/}
                                {/*- I'll be in your neighborhood ...*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</li>*/}
                    {/*<li className="mdui-list-item mdui-ripple">*/}
                        {/*<div className="mdui-list-item-avatar"><img src={avatorPic2}/></div>*/}
                        {/*<div className="mdui-list-item-content">*/}
                            {/*<div className="mdui-list-item-title"><p>Brunch <span>2018-04-03</span></p>*/}
                            {/*</div>*/}
                            {/*<div className="mdui-list-item-text mdui-list-item-one-line">*/}
                                {/*- I'll be in your neighborhood ...*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</li>*/}
                    {/*<li className="mdui-list-item mdui-ripple">*/}
                        {/*<div className="mdui-list-item-avatar"><img src={avatorPic2}/></div>*/}
                        {/*<div className="mdui-list-item-content">*/}
                            {/*<div className="mdui-list-item-title"><p>Brunch <span>2018-04-03</span></p>*/}
                            {/*</div>*/}
                            {/*<div className="mdui-list-item-text mdui-list-item-one-line">*/}
                                {/*- I'll be in your neighborhood ...*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</li>*/}
                    {/*<li className="mdui-list-item mdui-ripple">*/}
                        {/*<div className="mdui-list-item-avatar"><img src={avatorPic2}/></div>*/}
                        {/*<div className="mdui-list-item-content">*/}
                            {/*<div className="mdui-list-item-title">BBQ</div>*/}
                            {/*<div className="mdui-list-item-text mdui-list-item-one-line">*/}
                                {/*- Wish I could ...*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</li>*/}
                    {/*<li className="mdui-list-item mdui-ripple">*/}
                        {/*<div className="mdui-list-item-avatar"><img src={avatorPic2}/></div>*/}
                        {/*<div className="mdui-list-item-content">*/}
                            {/*<div className="mdui-list-item-title">Oui</div>*/}
                            {/*<div className="mdui-list-item-text mdui-list-item-one-line">*/}
                                {/*- Do you have Paris reco ...*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</li>*/}
                    {/*<li className="mdui-list-item mdui-ripple">*/}
                        {/*<div className="mdui-list-item-avatar"><img src={avatorPic2}/></div>*/}
                        {/*<div className="mdui-list-item-content">*/}
                            {/*<div className="mdui-list-item-title">Oui</div>*/}
                            {/*<div className="mdui-list-item-text mdui-list-item-one-line">*/}
                                {/*- Do you have Paris reco ...*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</li>*/}
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
                    <Tabs onChange={(value)=>{
                        if(value=="2"){
                            this.getFollowList();
                        }
                    }}>
                        <TabPane tab="关注" key="1">{focusDetatil?focus:follow}</TabPane>
                        <TabPane tab="粉丝" key="2">{follow}</TabPane>
                    </Tabs>
                </div>
                <Foot/>
            </div>
        )
    }
}