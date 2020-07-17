import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import Switch from "react-switch";

export default class TitleBar extends React.Component {
  render() {
    return (
      <Jumbotron fluid style={{ padding: "10px", margin: "10px" }}>
        <Container>
          <h1>Fun Gif Generator</h1>
          <p>
            Using the giphy API to fetch fun gifs (and practicing using React
            classes instead of functions)
          </p>
        </Container>
        <Switch />
      </Jumbotron>
    );
  }
}

// mode={this.state.darkMode} modeChange={this.changeMode}
