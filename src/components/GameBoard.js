import React from "react";
import PropTypes from "prop-types";
import { GameGrid, GridState } from "./GameGrid";
import openSocket from "socket.io-client";
import update from 'immutability-helper';

const socket = openSocket("http://localhost:8000");

class GameBoard extends React.Component {
  state = { socket: socket, gridStates: this.generateGridStates() };

  componentDidMount() {
    this.setSocketListeners();
  }

  setSocketListeners() {
    this.state.socket.on("successfully change state", coordinate => {
      console.log(`Data received ${coordinate.rowIndex}, ${coordinate.colIndex}`);
      var newGridStates = update(this.state.gridStates, {[coordinate.rowIndex]: {[coordinate.colIndex]: {$set: GridState.CROSS }}});
      this.setState({gridStates: newGridStates});
    })
}

  generateGridStates() {
    return [...Array(3).keys()].map(rowIndex => {
      return [...Array(3).keys()].map(colIndex => GridState.UNOCCUPIED);
    });
  }

  render() {
    return (
      <div>
        <table>
          {[...Array(3).keys()].map(rowIndex => {
            return (
              <tr>
                {[...Array(3).keys()].map(colIndex => (
                  <td>
                    <GameGrid
                      rowIndex={rowIndex}
                      colIndex={colIndex}
                      socket={socket}
                      gridState={this.state.gridStates[rowIndex][colIndex]}
                    />
                  </td>
                ))}
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

/*
AddTodo.propTypes = {
    addTodo:PropTypes.func.isRequired
}*/
export default GameBoard;
