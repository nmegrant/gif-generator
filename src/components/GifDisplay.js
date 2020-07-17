import React from "react";

import Container from "react-bootstrap/Container";

export default class GifDisplay extends React.Component {
  render() {
    return (
      <Container>
        <iframe
          src={this.props.src}
          width="480"
          height="360"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
          title="myGif"
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/fun-XOXdQszYm4I3m">via GIPHY</a>
        </p>
      </Container>
    );
  }
}
