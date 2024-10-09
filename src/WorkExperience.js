import React, { Component } from "react";

class WorkExperience extends Component {
  render() {
    const data = this.props.work.experience;
    const list = data.map((d) => (
      <div className="listitem">
        <div className="listhead">{d.job}</div>
        <p className="content">{d.description}</p>
      </div>
    ));

    return (
      <div className="section">
        <p className="header">{this.props.work.title}</p>
        <p className="content list">{list}</p>
      </div>
    );
  }
}

export default WorkExperience;
