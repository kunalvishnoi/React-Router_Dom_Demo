import React, { Component } from "react";

class Person extends Component {
  render() {
    const style = {
      textAlign: "center"
    };
    return (
      <div>
        <h1 style={style}>Hi {this.props.match.params.name}</h1>
      </div>
    );
  }
}
export default Person;
