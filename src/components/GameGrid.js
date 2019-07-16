import React from "react";
import PropTypes from "prop-types";

const GridState = {
  CROSS: "X",
  NAUGHT: "O",
  UNOCCUPIED: "?"
};

class GameGrid extends React.Component {

  /* 
  onSubmit = (e) =>{
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({title: ""});
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  */

  onClick = e => {
    this.props.socket.emit("change grid state", {
      rowIndex: this.props.rowIndex,
      colIndex: this.props.colIndex,
      symbol: GridState.CROSS
    });
    console.log(
      `Row: ${this.props.rowIndex} Col: ${this.props.colIndex} is clicked`
    );
  };

  render() {
    return (
      <p onClick={this.onClick}>{this.props.gridState}</p>

      /*
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo ..."
          style={{ flex: "10", padding: "5px" }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
      */
    );
  }
}

GameGrid.propTypes = {
  rowIndex: PropTypes.number.isRequired,
  colIndex: PropTypes.number.isRequired,
  socket: PropTypes.object.isRequired,
  gridState: PropTypes.string.isRequired
};
/*
AddTodo.propTypes = {
    addTodo:PropTypes.func.isRequired
}
*/
export {
  GameGrid,
  GridState
}
