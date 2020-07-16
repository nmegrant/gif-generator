import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class DataForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput: "" };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(event) {
    this.setState({ userInput: event.target.value });
  }

  render() {
    return (
      <Form style={{ marginTop: "30px" }}>
        <Form.Group controlId="formBasicInput">
          <Form.Label style={{ marginRight: "10px" }}>
            What kind of gif do you want?
          </Form.Label>
          <Form.Control
            type="text"
            onChange={this.handleUserInput}
            value={this.state.userInput}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
