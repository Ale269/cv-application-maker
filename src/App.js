import "./App.css";
import React from "react";
import Title from "./components/title.js";
import Person from "./components/person.js";
import Education from "./components/education.js";
import Experiences from "./components/experiences.js";
import Controller from "./components/controller.js";
import Builder from "./components/builder.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personName: "",
      personLastName: "",
      personTitle: "",
      address: "",
      mobile: "",
      email: "",
      description: "",
      studyPath: [],
      instituteName: [],
      studyCity: [],
      studyFromDate: [],
      studyToDate: [],
      companyName: [],
      workPosition: [],
      workCity: [],
      workFromDate: [],
      workToDate: [],
    };

    this.generateState = this.generateState.bind(this);
  }

  generateState() {
    console.log(document.getElementById("name").value);

    this.setState((state) => {
      const newStudyPath = [];
      document.querySelectorAll(".study-path-name").forEach((element) => {
        newStudyPath.push(element.value);
      });

      const newInstitute = [];
      document.querySelectorAll(".institute-name").forEach((element) => {
        newInstitute.push(element.value);
      });

      const newStudyCity = [];
      document.querySelectorAll(".city").forEach((element) => {
        newStudyCity.push(element.value);
      });

      const newStudyFromDate = [];
      document.querySelectorAll(".from-date").forEach((element) => {
        newStudyFromDate.push(element.value);
      });

      const newStudyToDate = [];
      document.querySelectorAll(".to-date").forEach((element) => {
        newStudyToDate.push(element.value);
      });

      const newCompanyName = [];
      document.querySelectorAll(".company-name").forEach((element) => {
        newCompanyName.push(element.value);
      });

      const newWorkPosition = [];
      document.querySelectorAll(".work-position").forEach((element) => {
        newWorkPosition.push(element.value);
      });

      const newWorkCity = [];
      document.querySelectorAll(".work-city").forEach((element) => {
        newWorkCity.push(element.value);
      });

      const newWorkFromDate = [];
      document.querySelectorAll(".work-from-date").forEach((element) => {
        newWorkFromDate.push(element.value);
      });

      const newWorkToDate = [];
      document.querySelectorAll(".work-to-date").forEach((element) => {
        newWorkToDate.push(element.value);
      });

      return {
        personName: document.getElementById("name").value,
        personLastName: document.getElementById("lastname").value,
        personTitle: document.getElementById("person-title").value,
        address: document.getElementById("address").value,
        mobile: document.getElementById("mobile-number").value,
        email: document.getElementById("email").value,
        description: document.getElementById("description").value,
        studyPath: newStudyPath,
        instituteName: newInstitute,
        studyCity: newStudyCity,
        studyFromDate: newStudyFromDate,
        studyToDate: newStudyToDate,
        companyName: newCompanyName,
        workPosition: newWorkPosition,
        workCity: newWorkCity,
        workFromDate: newWorkFromDate,
        workToDate: newWorkToDate,
      };
    });
  }

  render() {
    return (
      <>
        <Title />
        <Person state={this.state} />
        <Education state={this.state} />
        <Experiences state={this.state} />
        <Controller function={this.generateState} />
        <Builder state={this.state} />
      </>
    );
  }
}

export default App;
