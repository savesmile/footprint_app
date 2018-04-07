import React,{Component} from "react";
import {hashHistory} from "react-router"
import "whatwg-fetch";
import "core-js/es6/promise"

export default class Base extends Component{
    constructor(props){
        super(props);
    }
    makeCancelable=(promise)=>{
        let hasCanceled = false;
        const wrappedPromise = new Promise((resolve,reject)=>{
            promise.then((val)=>
                hasCanceled?reject({isCanceled:true}):resolve(val)
            )
            promise.catch((error)=>{
                hasCanceled?reject({isCanceled:true}):resolve(error)
            })
        })
        return {
            promise:wrappedPromise,
            cancel(){
                hasCanceled = true;
            }
        }
    }

    //返回上一级
    hashHistoryBack=()=>{
        hashHistory.goBack();
    }

    fetchPost=(url,obj,cb)=>{
        let p = fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(obj),
        }).then(res=>{
            return res.json();
        }).then(json=>{
            cb(json);
        }).catch(err=>console.log(err));
        return this.makeCancelable(p);
    }

    fetchGet=(url,cb)=>{
        let p = fetch(url,{
            method:"GET",
        }).then(res=>{
            return res.json();
        }).then(json=>{
            cb(json);
        }).catch(err=>console.log(err));
        return this.makeCancelable(p);
    }
    //将时间戳转换成日期格式
    timestampToTime=(timestamp)=>{
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = (date.getDate()<10?'0'+date.getDate():date.getDate()) + ' ';
        var h = (date.getHours()<10?'0'+date.getHours():date.getHours()) + ':';
        var m = (date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()) + ':';
        var s = date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();
        return Y+M+D+h+m+s;
    }
    render(){
    }
}