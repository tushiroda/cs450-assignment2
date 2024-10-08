import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
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
    };
  }
  render() {
    return (
      <div>
        <Header
          personInfo={this.state.personInfo}
          contactInfo={this.state.contactInfo}
        ></Header>
      </div>
    );
  }
}
export default App;
