angular
    .module('tttApp')
    .controller('TttController', TttController);
    TttController.$inject = ['$firebase'];

function TttController($firebase) { //"the container for the rest of the stuff"
    var self = this;
    self.startGame = startGame;
    self.resetGame = resetGame;
    // self.catsGame = catsGame;
    self.playGrid = playGrid;
    self.isSet = isSet;

    
// var gameBoard = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]; //how gameboard should look at the start of each game


function startGame() {

    self.gameBoard = [["", "", ""], ["", "", ""], ["", "", ""]]; //empty gameboard at the start of each game"
    self.xturn = true;  
    self.oturn = false;
}   
    startGame();

function playGrid(row, column) {       //turn-taking between players
    console.log(self.xturn);
    if(self.xturn === true) {
    self.gameBoard[row][column] = "x";  
    }

    else {
    self.gameBoard[row][column] = "o";
    }
    self.xturn = !self.xturn; 
  }

function resetGame() {              //when players press "reset" button, gameboard becomes empty again
    self.gameBoard = [["", "", ""], ["", "", ""], ["", "", ""]];
    self.xturn = false;
    self.oturn = false;
}

// function catsGame() {               //"cats game" - computer checks self only when all 9 squares have been played
//     if (var x = 0; x <= gameBoard.length; x++) {
//         alert("Better luck next time!");
//         reset();
//     } 
// }
function isSet(something, square) {
    return (something & square) == square;
}

//conditions for "x" to win the game
function playerXwin() {

    for (var i = 0; i < 3; i++) {

        for (var j = 0; j < 3; j++) {

            if(self.grid[0][0].cellState == "x" && 
            self.grid[0][1].cellState == "x" && self.grid[0][2].cellState == "x") {
                alert("x wins");
                return true;                 
           } 

            if(self.grid[1][0].cellState == "x" && 
            self.grid[1][1].cellState == "x" && self.grid[1][2].cellState == "x") {
                alert("x wins");  
                return true;                  
            }

            if(self.grid[2][0].cellState == "x" &&
            self.grid[2][1].cellState == "x" && self.grid[2][2].cellState == "x") {
                alert("x wins");    
                return true;                
            }

            if(self.grid[0][0].cellState == "x" &&
             self.grid[1][0].cellState == "x" && self.grid[2][0].cellState == "x") {
                alert("x wins");     
                return true;               
            }

            if(self.grid[1][0].cellState == "x" &&
            self.grid[1][1].cellState == "x" && self.grid[1][2].cellState == "x") {
                alert("x wins");     
                return true;               
            }
            if(self.grid[2][0].cellState == "x" &&
            self.grid[2][1].cellState == "x" && self.grid[2][2].cellState == "x") {
                alert("x wins"); 
                return true;                       
            }
            if(self.grid[0][0].cellState == "x" &&
            self.grid[1][1].cellState == "x" && self.grid[2][2].cellState == "x") {
                alert("x wins");  
                return true;                  
            }
            if(self.grid[0][2].cellState == "x" &&
             self.grid[1][1].cellState == "x" && self.grid[2][0].cellState == "x") {
                alert("x wins");  
                return true;                  
            }
        }    
    }
}      
//conditions for "y" to win the game  
function playerYwin() {

    for (var i = 0; i < 3; i++) {

        for (var j = 0; j < 3; j++) {

            if(self.grid[0][0].cellState == "o" &&
             self.grid[0][1].cellState == "o" && self.grid[0][2].cellState == "o") {
                alert("o wins");  
                return true;                  
            }

            if(self.grid[1][0].cellState == "o" &&
             self.grid[1][1].cellState == "o" && self.grid[1][2].cellState == "o") {
                alert("o wins");  
                return true;                  
            }

            if(self.grid[2][0].cellState == "o" &&
            self.grid[2][1].cellState == "o" && self.grid[2][2].cellState == "o") {
                alert("o wins");  
                return true;                  
            }

            if(self.grid[0][0].cellState == "o" &&
            self.grid[1][0].cellState == "o" && self.grid[2][0].cellState == "o") {
                alert("o wins");    
                return true;                
            }

            if(self.grid[1][0].cellState == "o" &&
             self.grid[1][1].cellState == "o" && self.grid[1][2].cellState == "o") {
                alert("o wins");  
                return true;                  
            }

            if(self.grid[2][0].cellState == "o" &&
             self.grid[2][1].cellState == "o" && self.grid[2][2].cellState == "o") {
                alert("o wins"); 
                return true;                   
            }

            if(self.grid[0][0].cellState == "o" &&
            self.grid[1][1].cellState == "o" && self.grid[2][2].cellState == "o") {
                alert("o wins");   
                return true;                 
            }

            if(self.grid[0][2].cellState == "o" &&
             self.grid[1][1].cellState == "o" && self.grid[2][0].cellState == "o") {
                alert("o wins");  
                return true;     
            }    

            //conditions for tie in the game
            else {
                if (((self.grid[0][0].cellState == "x") || (self.grid[0][0].cellState == "o")) &&
                    ((self.grid[0][1].cellState == "x") || (self.grid[0][1].cellState == "o")) &&
                    ((self.grid[0][2].cellState == "x") || (self.grid[0][2].cellState == "o")) &&
                    ((self.grid[1][0].cellState == "x") || (self.grid[1][0].cellState == "o")) &&
                    ((self.grid[1][1].cellState == "x") || (self.grid[1][1].cellState == "o")) &&
                    ((self.grid[1][2].cellState == "x") || (self.grid[1][2].cellState == "o")) &&
                    ((self.grid[2][0].cellState == "x") || (self.grid[2][0].cellState == "o")) &&
                    ((self.grid[2][1].cellState == "x") || (self.grid[2][1].cellState == "o")) &&
                    ((self.grid[2][2].cellState == "x") || (self.grid[2][2].cellState == "o"))) {
                    alert("It's a tie!");
                    return true;
                    }              
                }    
                             
            }
        }
    }
};  


