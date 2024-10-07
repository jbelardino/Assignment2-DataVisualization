import React, { Component } from "react";

class PersonalProfile extends Component {
  render() {
    return (
        <div class="row2">
            <div class="personalProfile">
                <h2>Personal Profile</h2>
            </div>
            <div class="personalInfo">
                <p>{this.props.personalProfile.profile}</p>
            </div>
        </div>
    );
  }
}

export default PersonalProfile;