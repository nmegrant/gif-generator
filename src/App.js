import React from "react";
import "./App.css";
import DataForm from "./components/DataForm";
import TitleBar from "./components/TitleBar";
//"http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { darkMode: false };
    this.changeMode = this.changeMode.bind(this);
  }

  changeMode() {
    this.setState({ darkMode: !this.state.darkMode });
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
      </div>
    );
  }
}

export default App;
