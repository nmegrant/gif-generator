import React from "react";
import "./App.scss";
import axios from "axios";
import DataForm from "./components/DataForm";
import TitleBar from "./components/TitleBar";
import GifDisplay from "./components/GifDisplay";
import Alert from "react-bootstrap/Alert";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { darkMode: false, src: "", alert: false };
    this.changeMode = this.changeMode.bind(this);
    this.changeSrc = this.changeSrc.bind(this);
    this.changeAlert = this.changeAlert.bind(this);
    this.wrapper = React.createRef();
  }

  changeMode() {
    this.setState({ darkMode: !this.state.darkMode });
  }

  changeSrc(newGifSrc) {
    this.setState({ src: newGifSrc });
  }

  changeAlert() {
    this.setState({ alert: true });
    setTimeout(() => {
      this.setState({ alert: false });
    }, 1500);
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=fun&limit=1&offset=1&rating=g&lang=en`
      );
      this.setState({ src: response.data.data[0].embed_url });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const mode = this.state.darkMode
      ? { background: "#222", color: "#FFF" }
      : { background: "#FFF", color: "#222" };

    return (
      <div
        className="App"
        style={{
          backgroundColor: mode.background,
          color: mode.color,
          height: "2000px",
        }}
      >
        <Alert ref={this.wrapper} variant="danger" show={this.state.alert}>
          Please enter text to find a gif
        </Alert>
        <TitleBar mode={this.state.darkMode} modeChange={this.changeMode} />
        <DataForm srcChange={this.changeSrc} alertChange={this.changeAlert} />
        <GifDisplay src={this.state.src} />
      </div>
    );
  }
}

export default App;
