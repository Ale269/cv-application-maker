import React from "react";

export default class Education extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };

    this.addComponent = this.addComponent.bind(this);
    this.removeComponent = this.removeComponent.bind(this);
  }

  addComponent() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  removeComponent() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    const components = [];
    for (let i = 0; i < this.state.count; i++) {
      components.push(
        <InputComponents
          function={this.removeComponent}
          newStudyPath={this.props.state.studyPath[i]}
          newInstituteName={this.props.state.instituteName[i]}
          newStudyCity={this.props.state.studyCity[i]}
          newStudyFromDate={this.props.state.studyFromDate[i]}
          newStudyToDate={this.props.state.studyToDate[i]}
        />
      );
    }
    return (
      <div className="input-container">
        <h2 className="section-title">Education</h2>
        {components}
        <button type="button" className="add-btn" onClick={this.addComponent}>
          Add Components
        </button>
      </div>
    );
  }
}

class InputComponents extends React.Component {
  render() {
    return (
      <>
        <input
          type="text"
          name="study-path-name"
          className="study-path-name"
          placeholder="Name of study path"
          defaultValue={this.props.newStudyPath}
        />
        <input
          type="text"
          name="institute-name"
          className="institute-name"
          placeholder="Training institute name"
          defaultValue={this.props.newInstituteName}
        />
        <input
          type="text"
          name="city"
          className="city"
          placeholder="insert city name"
          defaultValue={this.props.newStudyCity}
        />
        <input
          type="text"
          name="from-date"
          className="from-date"
          placeholder="From"
          defaultValue={this.props.newStudyFromDate}
        />
        <input
          type="text"
          name="to-date"
          className="to-date"
          placeholder="To"
          defaultValue={this.props.newStudyToDate}
        />
        <button
          type="button"
          className="remove-btn"
          onClick={this.props.function}
        >
          Remove Components
        </button>
      </>
    );
  }
}
