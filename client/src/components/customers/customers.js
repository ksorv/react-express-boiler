import React, { Component } from "react";
import "./customers.css";

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch("/api/test")
      .then(res => res.json())
      .then(
        customers => this.setState({ customers }),
        () => console.log("Customers fetched: ", this.state.customers)
      );
  }

  render() {
    return (
      <div className='main'>
        <h2>Test Customers: </h2>
        <ul>
          {this.state.customers.map(customer => (
            <li key={customer.id}>
              {customer.fName} {customer.lName}
            </li>
          ))}
        </ul>
        <p className='blah'>
          Made by{" "}
          <a
            href='https://twitter.com/sauravkhdoolia'
            target='_blank'
            rel='noopener noreferrer'
          >
            Saurav Khdoolia
          </a>
        </p>
      </div>
    );
  }
}

export default Customers;
