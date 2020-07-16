import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";

export default class DataForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput: "" };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleUserInput(event) {
    this.setState({ userInput: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state.userInput);
    this.setState({ userInput: "" });
  }

  render() {
    return (
      <Form
        style={{ marginTop: "30px" }}
        as={Col}
        md={{ span: 6, offset: 3 }}
        className="mt-5"
      >
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
        <Form.Group>
          <Button variant="primary" type="submit" onClick={this.onSubmit}>
            Get me a gif!
          </Button>
        </Form.Group>
      </Form>
    );
  }
}
