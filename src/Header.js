import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
        <div class="row1">
            <div class="name">
                <p>{this.props.personInfo.name}</p>
                <p>{this.props.personInfo.occupation}</p>
            </div>
            <div class="contactInfo">
                <p>Email: {this.props.contactInfo.email}</p>
                <p>Web: {this.props.contactInfo.web}</p>
                <p>Mobile: {this.props.contactInfo.mobile}</p>
            </div>
        </div>
    );
  }
}

export default Header;