import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Routing extends Component {
  render() {
    const person = [
      {
        id: 1,
        name: "kunal",
        age: 20
      },
      {
        id: 2,
        name: "misaki",
        age: 21
      }
    ];
    const styles = {
      color: "black",
      fontSize: "24px",
      textDecoration: "none"
    };
    return (
      <div>
        {person.map(data => {
          return (
            <div key={data.id}>
              <NavLink style={styles} to={`/person/${data.name}`}>
                Name: {data.name}
              </NavLink>
              <h4>Age {data.age}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Routing;
