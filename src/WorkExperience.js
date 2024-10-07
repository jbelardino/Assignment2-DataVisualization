import React, { Component } from "react";

class WorkExperience extends Component {
  render() {
    return (
        <div class="row3">
            <div class="workExperience">
                <h2>Work Experience</h2>
            </div>
            <div class="jobs">
                <h4>{this.props.jobs.job1_title}</h4>
                <p>{this.props.jobs.job1_description}</p>
                <h4>{this.props.jobs.job2_title}</h4>
                <p>{this.props.jobs.job2_description}</p>
            </div>
        </div>
    );
  }
}

export default WorkExperience;