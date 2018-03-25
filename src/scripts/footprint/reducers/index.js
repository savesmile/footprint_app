var initState = {
    footList:[
        {path:"/his",txt:"HIS",icon:"beach_access"},
        {path:"/old",txt:"OLD",icon:"collections"},
        {path:"/new",txt:"NEW",icon:"camera_alt"},
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