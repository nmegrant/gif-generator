import React from "react";

import Form from "react-bootstrap/Form";

export default class DataForm extends React.Component {
  render() {
    return (
      <Form style={{ marginTop: "30px" }}>
        <Form.Group controlId="formBasicInput">
          <Form.Label style={{ marginRight: "10px" }}>
            What kind of gif do you want?
          </Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Form>
    );
  }
}
