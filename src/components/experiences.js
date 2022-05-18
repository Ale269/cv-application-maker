import React from "react";

export default class Experiences extends React.Component {
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
          companyValue={this.props.state.companyName[i]}
          workValue={this.props.state.workPosition[i]}
          cityValue={this.props.state.workCity[i]}
          workFromValue={this.props.state.workFromDate[i]}
          workToDate={this.props.state.workFromDate[i]}
        />
      );
    }

    return (
      <div className="input-container">
        <h2 className="section-title">Experiences</h2>
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
          name="company-name"
          className="company-name"
          placeholder="Company name"
          defaultValue={this.props.companyValue}
        />
        <input
          type="text"
          name="work-positon"
          className="work-position"
          placeholder="Position"
          defaultValue={this.props.workValue}
        />
        <input
          type="text"
          name="work-city"
          className="work-city"
          placeholder="Insert city name"
          defaultValue={this.props.cityValue}
        />
        <input
          type="text"
          name="work-from-date"
          className="work-from-date"
          placeholder="From"
          defaultValue={this.props.workFromValue}
        />
        <input
          type="text"
          name="work-to-date"
          className="work-to-date"
          placeholder="To"
          defaultValue={this.props.workToDate}
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
