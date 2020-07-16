import React from "react";
import "./App.css";
import DataForm from "./components/DataForm";
import TitleBar from "./components/TitleBar";
//"http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TitleBar />
        <DataForm />
      </div>
    );
  }
}

export default App;
