import React, {Component} from "react"
import {Link} from "react-router"


export default class Back extends Component {
    constructor() {
        super();
    }

    render() {
        const {header} = this.props;
        return (
            <div className="back mdui-center">
                <div className="backIcon">
                    <Link to={this.props.backTo}>
                        <i className="mdui-icon material-icons">keyboard_arrow_left</i>
                    </Link>
                </div>
                <div className="backHeader mdui-center mdui-text-center mdui-text-uppercase">{header ? header : null}</div>
            </div>
        )
    }
}