import React, { Component } from "react";
import "../App.css";

class Members extends Component {
  constructor() {
    super();
    this.state = {
      members: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/members")
      .then(res => res.json())
      .then(members =>
        this.setState({ members }, () =>
          console.log("members fetched...", members)
        )
      );
  }

  render() {
    return (
      <div>
        <h2>Mitglieder</h2>
        <ul>
          {this.state.members.map(member => (
            <li key={member.member_id}>{member.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Members;
