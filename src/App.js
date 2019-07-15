import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { subscribeToTimer } from "./api";
import GameBoard from "./components/GameBoard"
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

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
        <GameBoard socket = {socket}/>
      </div>
    );
  }
}

export default App;
