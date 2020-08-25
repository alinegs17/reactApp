import React, {Component} from 'react';
import styles from './App.css';

class Square extends React.Component {
   constructor(props) {
      super(props);
   }
   getSquareClassName() {
      const row = this.props.row;
      const colum = this.props.colum;
      if (row %2) { //This is a condition for odd rows
         if (colum %2) {//This is a condition for odd colums in odd rows
            return "squareGrey";
         } else { //This is a condition for even colums in odd rows
            return "squareWhite";
         }
      } else { //This is a condition for even rows
         if (colum %2) { //This is a condition for odd colums in even rows
            return "squareWhite";
         } else { //This is a condition for even colums in even rows
            return "squareGrey";
         }
      }
   
    }
   render() {
     return (
       <button className={this.getSquareClassName()}>
       </button>
     );
   }
}
class Board extends React.Component {
   renderSquare(row, colum) {
     return (
        <Square row={row} colum={colum}
        />
     );
   }
   render() {
 
     return (
       <div>
         <div className="board-row1">
           {this.renderSquare(0, 0)}
           {this.renderSquare(0, 1)}
           {this.renderSquare(0, 2)}
           {this.renderSquare(0, 3)}
           {this.renderSquare(0, 4)}
           {this.renderSquare(0, 5)}
           {this.renderSquare(0, 6)}
           {this.renderSquare(0, 7)}
         </div>
         <div className="board-row2">
           {this.renderSquare(1, 0)}
           {this.renderSquare(1, 1)}
           {this.renderSquare(1, 2)}
           {this.renderSquare(1, 3)}
           {this.renderSquare(1, 4)}
           {this.renderSquare(1, 5)}
           {this.renderSquare(1, 6)}
           {this.renderSquare(1, 7)}
         </div>
         <div className="board-row3">
           {this.renderSquare(2, 0)}
           {this.renderSquare(2, 1)}
           {this.renderSquare(2, 2)}
           {this.renderSquare(2, 3)}
           {this.renderSquare(2, 4)}
           {this.renderSquare(2, 5)}
           {this.renderSquare(2, 6)}
           {this.renderSquare(2, 7)}
         </div>
         <div className="board-row4">
           {this.renderSquare(3, 0)}
           {this.renderSquare(3, 1)}
           {this.renderSquare(3, 2)}
           {this.renderSquare(3, 3)}
           {this.renderSquare(3, 4)}
           {this.renderSquare(3, 5)}
           {this.renderSquare(3, 6)}
           {this.renderSquare(3, 7)}
         </div>
         <div className="board-row5">
           {this.renderSquare(4, 0)}
           {this.renderSquare(4, 1)}
           {this.renderSquare(4, 2)}
           {this.renderSquare(4, 3)}
           {this.renderSquare(4, 4)}
           {this.renderSquare(4, 5)}
           {this.renderSquare(4, 6)}
           {this.renderSquare(4, 7)}
         </div>
         <div className="board-row6">
           {this.renderSquare(5, 0)}
           {this.renderSquare(5, 1)}
           {this.renderSquare(5, 2)}
           {this.renderSquare(5, 3)}
           {this.renderSquare(5, 4)}
           {this.renderSquare(5, 5)}
           {this.renderSquare(5, 6)}
           {this.renderSquare(5, 7)}
         </div>
         <div className="board-row7">
           {this.renderSquare(6, 0)}
           {this.renderSquare(6, 1)}
           {this.renderSquare(6, 2)}
           {this.renderSquare(6, 3)}
           {this.renderSquare(6, 4)}
           {this.renderSquare(6, 5)}
           {this.renderSquare(6, 6)}
           {this.renderSquare(6, 7)}
         </div>
         <div className="board-row8">
           {this.renderSquare(7, 0)}
           {this.renderSquare(7, 1)}
           {this.renderSquare(7, 2)}
           {this.renderSquare(7, 3)}
           {this.renderSquare(7, 4)}
           {this.renderSquare(7, 5)}
           {this.renderSquare(7, 6)}
           {this.renderSquare(7, 7)}
         </div>
       </div>
     );
   }
 }
 
 class Game extends React.Component {
   render() {
     return (
       <div className="game">
         <div className="game-board">
           <Board />
         </div>
       </div>
     );
   }
 }

export default Game;
