import React from "react";

import Form from "react-bootstrap/Form";

export default class DataForm extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicInput">
          <Form.Label>What kind of gif do you want?</Form.Label>
          <Form.Control type="text" />
          {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
        </Form.Group>
      </Form>
    );
  }
}
