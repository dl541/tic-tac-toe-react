import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { subscribeToTimer } from "./api";
import GameBoard from "./components/GameBoard"

class App extends React.Component {
  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) =>
      this.setState({
        timestamp
      })
    );
  }

  state = {
    timestamp: "no timestamp yet"
  };
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          This is the timer value: {this.state.timestamp}
        </p>
        <GameBoard/>
      </div>
    );
  }
}

export default App;
