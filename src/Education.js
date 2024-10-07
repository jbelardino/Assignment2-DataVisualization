import React, { Component } from 'react';
class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div class="row5">
                <div class="education">
                    <h2>Education</h2>
                </div>
                <div class="schools">
                    <h4>{this.props.education.school1_name}</h4>
                    <p>{this.props.education.school1_degree}</p>
                    <p>{this.props.education.school1_year}</p>
                    <p>{this.props.education.school1_gpa}</p>
                    <h4>{this.props.education.school2_name}</h4>
                    <p>{this.props.education.school2_degree}</p>
                    <p>{this.props.education.school2_year}</p>
                    <p>{this.props.education.school2_gpa}</p>
                </div>
            </div>
        );
    }
}

export default Education;