import React,{Component} from "react";
import ReactDOM from "react-dom";
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
    render(){
    }
}