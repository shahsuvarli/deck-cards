import { Component } from "react";
import "./App.css";
import DeckOfCards from "./DeckOfCards";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DeckOfCards />
      </div>
    );
  }
}

export default App;
