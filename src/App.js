import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import PersonalProfile from "./PersonalProfile";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personInfo: {
        name: "Zh Rimel",
        occupation: "Data Scientist",
      },
      contactInfo: {
        email: "abc@gmail.com",
        web: "abc.github.io/abc",
        mobile: "01234567890",
      },
      profile: {
        title: "Personal Profile",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      work: {
        title: "Work Experience",
        experience: [
          {
            job: "Job Title at Company (August 2022 – December 2023)",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
          {
            job: "Job Title at Company 2 (August 2022 – December 2023)",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
        ],
      },
      skills: {
        title: "Key Skills",
        skillList: [
          "skill1",
          "skill2",
          "skill3",
          "key skill",
          "key skill",
          "key skill",
          "coding",
          "typing",
          "typescript",
        ],
      },
      education: {
        title: "Education",
        schools: [
          {
            schoolName: "New Jersey Institute of technology",
            description: "BS in Computer Science\n2018 - 2022\nGPA: 3.9",
          },
          {
            schoolName: "New Jersey Institute of technology",
            description: "MS in Data Science\n2022 - 2023\nGPA: 4.0",
          },
        ],
      },
    };
  }
  render() {
    return (
      <div class="page">
        <Header
          personInfo={this.state.personInfo}
          contactInfo={this.state.contactInfo}
        />
        <div class="bot">
          <PersonalProfile profile={this.state.profile} />
          <div className="line"></div>
          <WorkExperience work={this.state.work} />
          <div className="line"></div>
          <Skills skills={this.state.skills} />
          <div className="line"></div>
          <Education education={this.state.education} />
        </div>
      </div>
    );
  }
}
export default App;
