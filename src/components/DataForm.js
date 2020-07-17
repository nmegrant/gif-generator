import axios from "axios";
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
    this.getNewGif = this.getNewGif.bind(this);
  }

  handleUserInput(event) {
    this.setState({ userInput: event.target.value });
  }

  async getNewGif(keyWord) {
    try {
      const offset = Math.ceil(Math.random() * 20);
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${keyWord}&limit=1&offset=${offset}&rating=g&lang=en`
      );
      this.props.srcChange(response.data.data[0].embed_url);
    } catch (error) {
      console.log(error);
    }
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.userInput.length > 0) {
      this.getNewGif(this.state.userInput);
      this.setState({ userInput: "" });
    } else {
      console.log("Enter text to see a gif!");
    }
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
