import React, { Component } from "react";

class Check extends Component {
  constructor() {
    super();
    this.state = {
      connected: false
    };
  }

  componentDidMount() {
    fetch("/api/running")
      .then(res => res.json())
      .then(connected => this.setState({ connected }));
  }

  render() {
    return (
      <div className='main'>
        <p>
          {this.state.connected ? (
            <span style={{ color: "green" }}>
              React can fetch data from server.
            </span>
          ) : (
            <span style={{ color: "red" }}>
              React us unable to fetch data, Please check.
            </span>
          )}
        </p>
      </div>
    );
  }
}

export default Check;
