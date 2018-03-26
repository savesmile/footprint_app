import React, {Component} from "react"
import {Link} from "react-router"


export default class Back extends Component {

    render() {
        return (
            <div className="back mdui-center">
                <Link to="my">
                    <i className="mdui-icon material-icons">keyboard_arrow_left</i>
                </Link>

            </div>
        )
    }
}