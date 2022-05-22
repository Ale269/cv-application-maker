import React from "react";

export default class Builder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const educationBlocks = [];

    for (let i = 0; i < this.props.state.studyPath.length; i++) {
      educationBlocks.push(
        <Education
          studyPath={this.props.state.studyPath[i]}
          instituteName={this.props.state.instituteName[i]}
          studyCity={this.props.state.studyCity[i]}
          studyFromDate={this.props.state.studyFromDate[i]}
          studyToDate={this.props.state.studyToDate[i]}
        />
      );
    }

    const experiencesBlocks = [];

    for (let i = 0; i < this.props.state.companyName.length; i++) {
      experiencesBlocks.push(
        <Experiences
          companyName={this.props.state.companyName[i]}
          workPosition={this.props.state.workPosition[i]}
          workCity={this.props.state.workCity[i]}
          workFromDate={this.props.state.workFromDate[i]}
          workToDate={this.props.state.workToDate[i]}
        />
      );
    }
    console.log(experiencesBlocks);

    return (
      <div className="cv-block-container">
        <div className="name-profession">
          <h2>
            {this.props.state.personName} {this.props.state.personLastName}
          </h2>
          <h3>{this.props.state.personTitle}</h3>
        </div>
        <div className="central-block">
          <div className="Personal-information-container">
            <h3 className="title-section">Personal information</h3>
            <h5 className="small-section-title">Address:</h5>
            <p>{this.props.state.address}</p>
            <h5 className="small-section-title">Mobile number:</h5>
            <p>{this.props.state.mobile}</p>
            <h5 className="small-section-title">Email:</h5>
            <p>{this.props.state.email}</p>
            <h5 className="small-section-title">Description:</h5>
            <p>{this.props.state.description}</p>
          </div>
          <div className="education-experiences-container">
            <div className="education-container">
              <h3 className="title-section">Education</h3>
              {educationBlocks}
            </div>
            <div className="dividing-line"></div>
            <div className="experiences-container">
              <h3 className="title-section">Work experiences</h3>
              {experiencesBlocks}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Education extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="education-experience-block">
        <h3>{this.props.studyPath}</h3>
        <h5>
          {this.props.instituteName}, {this.props.studyCity}
        </h5>
        <h5>
          {this.props.studyFromDate} - {this.props.studyToDate}
        </h5>
      </div>
    );
  }
}

class Experiences extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="education-experience-block">
        <h3>{this.props.companyName}</h3>
        <h5>
          {this.props.workPosition} in {this.props.workCity}
        </h5>
        <h5>
          {this.props.workFromDate} - {this.props.workToDate}
        </h5>
      </div>
    );
  }
}
