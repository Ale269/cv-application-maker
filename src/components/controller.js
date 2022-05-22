import React from "react";

export default class Controller extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="controller-btn-container">
        <button id="generate" type="button" onClick={this.props.generate}>
          Generate
        </button>
        <button id="reset" type="button" onClick={this.props.reset}>
          Reset
        </button>
      </div>
    );
  }
}
