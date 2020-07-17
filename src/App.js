import React from "react";
import "./App.css";
import axios from "axios";
import DataForm from "./components/DataForm";
import TitleBar from "./components/TitleBar";
import { GifDisplay } from "./components/GifDisplay";
//"http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { darkMode: false, src: "" };
    this.changeMode = this.changeMode.bind(this);
  }

  changeMode() {
    this.setState({ darkMode: !this.state.darkMode });
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=fun&limit=1&offset=1&rating=g&lang=en`
      );
      this.setState({ src: response.data.data[0].embed_url });
      console.log(response.data.data[0]);
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
        <TitleBar mode={this.state.darkMode} modeChange={this.changeMode} />
        <DataForm />
        <GifDisplay src={this.state.src} />
      </div>
    );
  }
}

export default App;

// https://media.giphy.com/media/XOXdQszYm4I3m/giphy.gif
