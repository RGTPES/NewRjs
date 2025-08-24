import React, { PureComponent } from 'react'
import"./index.css";
type BaseButtonProps = {
    htmlType?: "button" | "reset"| "submit";
    id?:string;
    className?:string
    type?: "primary" | "secondary" | "success"| "danger";
    size?: "small" | "medium" | "large";
}

class BaseButton extends PureComponent<BaseButtonProps> {

    render() {
        return (
            <>
            <button className={`baseButton ${this.props.size === "large" ? "button-large" : this.props.size === "medium" ? "button-medium" : "button-small"}`} type={this.props.htmlType}>button</button>
            </>
        )
    }
}

export default BaseButton
