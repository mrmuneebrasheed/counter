import React from "react";
import "./Button.css";
class Button extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick} className="button">
        {this.props.children}
      </div>
    );
  }
}
export default Button;
