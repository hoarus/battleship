class Ship {
  constructor(length) {
    this.length = length;
    this.health = length;
  }

  getLength() {
    return this.length;
  }

  hit(){
    this.health -= 1;
  }

  isSunk(){
    return this.health == 0;
  }
  
}

class GameBoard {
  constructor(){
    this.length = 10;
    this.board = this.createCleanBoard();
  }

  createCleanBoard(){
    let board = [];
    for (let i = 0; i < this.length; i++ ) {
      console.log(1);
      let row = [];
      for (let j = 0; j < this.length; j++) {
        row.push(0);
      }
      board.push(row);
    }
    return board;

  }

  display(){
    return this.board;
  }

  placeShip(ship, position, orientation){
    let length = ship.length;
    
  }
}

export { Ship, GameBoard }

