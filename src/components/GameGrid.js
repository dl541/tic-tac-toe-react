import React from "react";
import PropTypes  from "prop-types";

const GridState = {
  CROSS: "X",
  NAUGHT: "O",
  UNOCCUPIED: "?"
};

class GameGrid extends React.Component {
  state = { gridState: GridState.UNOCCUPIED };
/* 
  onSubmit = (e) =>{
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({title: ""});
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  */

  onClick = e =>{
    this.setState({gridState: GridState.CROSS})
    console.log(`Row ${this.props.rowIndex} is clicked`)
  }
  render() {

    return (
      <p onClick={this.onClick}>
        {this.state.gridState}
      </p>

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
  rowIndex: PropTypes.number.isRequired
}
/*
AddTodo.propTypes = {
    addTodo:PropTypes.func.isRequired
}
*/
export default GameGrid;