import React from "react";

export default class Controller extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="controller-btn-container">
        <button id="generate" type="button" onClick={this.props.function}>
          Generate
        </button>
        <button id="edit" type="button">
          Edit
        </button>
        <button id="reset" type="button">
          reset
        </button>
      </div>
    );
  }
}
