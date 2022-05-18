import "./App.css";
import React from "react";
import Title from "./components/title.js";
import Person from "./components/person.js";
import Education from "./components/education.js";
import Experiences from "./components/experiences.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personName: "",
      personLastName: "",
      personTitle: "",
      address: "",
      mobile: "",
      description: "",
      companyName: [],
      workPosition: [],
      workCity: [],
      workFromDate: [],
      workToDate: [],
    };
  }

  render() {
    return (
      <>
        <Title />
        <Person state={this.state} />
        <Education state={this.state} />
        <Experiences state={this.state} />
      </>
    );
  }
}

export default App;
