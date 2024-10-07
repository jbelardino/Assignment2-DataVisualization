import React, { Component } from 'react';
import "./App.css";
import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personInfo:{
                name: "Zh Rimel",
                occupation: "Data Scientist"
            },
            contactInfo: {
                email: "abc@gmail.com",
                web: "abc.github.io/abc",
                mobile: "01234567890"
            },
            personalProfile: {
                profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
                    + "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut "
                    + "enim ad minim veniam, quis nostrud exercitation ullamco laboris" 
                    + " nisi ut aliquip ex ea commodo consequat."
            },
            jobs: {
                job1_title: "Job Title at Company (August 2022 – December 2023)",
                job1_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
                    + "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut "
                    + "enim ad minim veniam, quis nostrud exercitation ullamco laboris "
                    + "nisi ut aliquip ex ea commodo consequat.",
                job2_title: "Job Title 2 at Company 2 (August 2020 – December 2021)",
                job2_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
                    + "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut "
                    + "enim ad minim veniam, quis nostrud exercitation ullamco laboris "
                    + "nisi ut aliquip ex ea commodo consequat."
            },
            skills: {
                skillList: ["A key skill", "A key skill", "A key skill", "A key skill",
                     "A key skill", "A key skill", "A key skill", "A key skill", "A key skill",]
            },
            education: {
                school1_name: "New Jersey Institute of Technology",
                school1_degree: "BS in Computer Science",
                school1_year: "2018 - 2022",
                school1_gpa: "GPA: 3.9",
                school2_name: "New Jersey Institute of Technology",
                school2_degree: "MS in Data Science",
                school2_year: "2022 - 2023",
                school2_gpa: "GPA: 4.0",
            }
        }
    }

    render() {
        return (
            <div class="container">
                <Header personInfo={this.state.personInfo} contactInfo={this.state.contactInfo}></Header>
                <PersonalProfile personalProfile={this.state.personalProfile}></PersonalProfile>
                <WorkExperience jobs={this.state.jobs}></WorkExperience>
                <Skills skills={this.state.skills}></Skills>
                <Education education={this.state.education}></Education>
            </div>
        );
    }
}

export default App;