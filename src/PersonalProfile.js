import React, { Component } from "react";

class PersonalProfile extends Component {
  render() {
    return (
      <div className="section">
        <p className="header">{this.props.profile.title}</p>
        <p className="content">{this.props.profile.content}</p>
      </div>
    );
  }
}

export default PersonalProfile;
