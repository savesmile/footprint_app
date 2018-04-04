import FootPrint from "../containers/myfoot";

var initState = {
    footList:[
        {path:"/his",txt:"HI",icon:"beach_access"},
        {path:"/my_foot/my",txt:"FP",icon:"collections"},
        {path:"/my",txt:"MY",icon:"people"},
    ],
    one:[],
    banner:[],
    list:[],
    detailList:null, 
    userList:[],
    //oneList:[],
    commentList:[],
    oneItem:[],
    collection:[],
    userCollection:[],
    flag:'',
    likeInfo:"",
    likeAll:[],
    like:null,
    id:null
    
}
export default (state=initState,action)=>{
    switch(action.type){
        default:
        return Object.assign({},state);
        break;
    }
}