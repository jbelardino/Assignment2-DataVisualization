import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
        <div class="row4">
            <div class="keySkills">
                <h2>Key Skills</h2>
            </div>
            <div class="skillList">
                <p>{this.props.skills.skillList[0]}</p>
                <p>{this.props.skills.skillList[1]}</p>
                <p>{this.props.skills.skillList[2]}</p>
            </div>
            <div class="skillList">
                <p>{this.props.skills.skillList[3]}</p>
                <p>{this.props.skills.skillList[4]}</p>
                <p>{this.props.skills.skillList[5]}</p>
            </div>
            <div class="skillList">
                <p>{this.props.skills.skillList[6]}</p>
                <p>{this.props.skills.skillList[7]}</p>
                <p>{this.props.skills.skillList[8]}l</p>
            </div>
            <div class="whiteSpace">

            </div>
        </div>
    );
  }
}

export default Skills;