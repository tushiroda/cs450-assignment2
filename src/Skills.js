import React, { Component } from "react";

class Skills extends Component {
  render() {
    const data = this.props.skills.skillList;
    const list = data.map((d) => <div style={{ width: "30%" }}>{d}</div>);

    return (
      <div className="section">
        <p className="header">{this.props.skills.title}</p>
        <p className="content" style={{ display: "flex", flexWrap: "wrap" }}>
          {list}
        </p>
      </div>
    );
  }
}

export default Skills;
