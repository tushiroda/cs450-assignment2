import React, { Component } from "react";

class Education extends Component {
  render() {
    const data = this.props.education.schools;
    const list = data.map((d) => (
      <div className="listitem">
        <div className="listhead">{d.schoolName}</div>
        <p className="content" style={{ whiteSpace: "pre-line" }}>
          {d.description}
        </p>
      </div>
    ));

    return (
      <div className="section">
        <p className="header">{this.props.education.title}</p>
        <p className="content list">{list}</p>
      </div>
    );
  }
}

export default Education;
