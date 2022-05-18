import React from "react";

export default class Person extends React.Component {
  render() {
    return (
      <div className="input-container">
        <h2 className="section-title">Person</h2>
        <input type="text" name="name" id="name" placeholder="insert name" />
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="insert lastname"
          defaultValue={this.props.state.personName}
        />
        <input
          type="text"
          name="person-title"
          id="person-title"
          placeholder="insert title"
          defaultValue={this.props.state.personLastName}
        />
        <input
          type="text"
          name="address"
          id="address"
          placeholder="insert address"
          defaultValue={this.props.state.personTitle}
        />
        <input
          type="tel"
          name="mobile-number"
          id="mobile-number"
          placeholder="+39 012 345 6789"
          defaultValue={this.props.state.address}
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="insertEmail@yourEmail.com"
          defaultValue={this.props.state.mobile}
        />
        <textarea
          type="text"
          name="description"
          id="description"
          placeholder="insert description"
          rows="4"
          defaultValue={this.props.state.description}
        />
      </div>
    );
  }
}
