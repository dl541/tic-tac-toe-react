import React from "react";
import PropTypes from "prop-types";
import GameGrid from "./GameGrid";

class GameBoard extends React.Component {
  state = { grids: this.generateGrids() };

  generateGrids() {
    return [...Array(3).keys()].map(rowIndex => {
      return [...Array(3).keys()].map(colIndex => (
        <GameGrid rowIndex={rowIndex} colIndex={colIndex} socket={this.props.socket} />
      ));
    });
  }

  render() {
    return (
      <div>
        <table>
          {this.state.grids.map(row => {
            return (
              <tr>
                {row.map(grid => (
                  <td>{grid}</td>
                ))}
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}


GameBoard.propTypes = {
  socket:PropTypes.object.isRequired
}
/*
AddTodo.propTypes = {
    addTodo:PropTypes.func.isRequired
}*/
export default GameBoard;
