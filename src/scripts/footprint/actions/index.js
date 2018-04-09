import axios from "axios";
import {hashHistory} from "react-router"
import {connect} from "react-redux"

axios.defaults.baseURL = "http://192.168.0.105:20000"; 
// axios.defaults.baseURL = "http://localhost:3000";