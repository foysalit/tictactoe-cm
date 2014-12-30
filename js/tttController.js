angular
    .module('tttApp')
    .controller('TttController', TttController);
    TttController.$inject = ['$firebase'];

function TttController($firebase) {      //"the container for the rest of the stuff"
    var self = this;

    self.startGame = startGame;
    self.resetGame = resetGame;
    self.playGrid = playGrid;
    self.isSet = isSet;
    self.tieGame = tieGame;
    self.playerOwin = playerOwin;
    self.playerXwin = playerXwin;
    self.chooseCell = chooseCell;

    
// var gameBoard = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]; //how gameboard should look at the start of each game


function startGame() {

    self.gameBoard = [["", "", ""], ["", "", ""], ["", "", ""]]; //empty gameboard at the start of each game"
    self.xturn = true;  
    self.oturn = false;
}   

/*
function chooseCell() {
    for (var i = 0; i < 3; i++) {

        for (var j = 0; j < 3; j++) {

        if(self.grid[i][j].cellState == "x" || self.grid[i][j].cellState == "o") {
            alert("Choose another square");

        }
        }
    }
} */

function playGrid(row, column) {       //turn-taking between players
    //console.log(self.xturn);
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
                              
            } 

            if(self.grid[1][0].cellState == "x" && 
            self.grid[1][1].cellState == "x" && self.grid[1][2].cellState == "x") {
                alert("x wins");  
                              
            }

            if(self.grid[2][0].cellState == "x" &&
            self.grid[2][1].cellState == "x" && self.grid[2][2].cellState == "x") {
                alert("x wins");    
                              
            }

            if(self.grid[0][0].cellState == "x" &&
             self.grid[1][0].cellState == "x" && self.grid[2][0].cellState == "x") {
                alert("x wins");     
                             
            }

            if(self.grid[1][0].cellState == "x" &&
            self.grid[1][1].cellState == "x" && self.grid[1][2].cellState == "x") {
                alert("x wins");     
                              
            }
            if(self.grid[2][0].cellState == "x" &&
            self.grid[2][1].cellState == "x" && self.grid[2][2].cellState == "x") {
                alert("x wins"); 
                                    
            }
            if(self.grid[0][0].cellState == "x" &&
            self.grid[1][1].cellState == "x" && self.grid[2][2].cellState == "x") {
                alert("x wins");  
                               
            }
            if(self.grid[0][2].cellState == "x" &&
             self.grid[1][1].cellState == "x" && self.grid[2][0].cellState == "x") {
                alert("x wins");  
                                 
            }
        }    
    }
}      
//conditions for "o" to win the game  
function playerOwin() {

 

    for (var i = 0; i < 3; i++) {

        for (var j = 0; j < 3; j++) {

            if(self.grid[0][0].cellState == "o" &&
             self.grid[0][1].cellState == "o" && self.grid[0][2].cellState == "o") {
                alert("o wins");  
                                
            }

            if(self.grid[1][0].cellState == "o" &&
             self.grid[1][1].cellState == "o" && self.grid[1][2].cellState == "o") {
                alert("o wins");  
                                
            }

            if(self.grid[2][0].cellState == "o" &&
            self.grid[2][1].cellState == "o" && self.grid[2][2].cellState == "o") {
                alert("o wins");  
                               
            }

            if(self.grid[0][0].cellState == "o" &&
            self.grid[1][0].cellState == "o" && self.grid[2][0].cellState == "o") {
                alert("o wins");    
                           
            }

            if(self.grid[1][0].cellState == "o" &&
             self.grid[1][1].cellState == "o" && self.grid[1][2].cellState == "o") {
                alert("o wins");  
                              
            }

            if(self.grid[2][0].cellState == "o" &&
             self.grid[2][1].cellState == "o" && self.grid[2][2].cellState == "o") {
                alert("o wins"); 
                               
            }

            if(self.grid[0][0].cellState == "o" &&
            self.grid[1][1].cellState == "o" && self.grid[2][2].cellState == "o") {
                alert("o wins");   
                                
            }

            if(self.grid[0][2].cellState == "o" &&
             self.grid[1][1].cellState == "o" && self.grid[2][0].cellState == "o") {
                alert("o wins");  
                  
            }
        }  
    }
}             

            // tie in the game
function tieGame() {

    
    for (var i = 0; i < 3; i++) {

        for (var j = 0; j < 3; j++) {            
            if (((self.grid[0][0].cellState == "x") || (self.grid[0][0].cellState == "o")) &&
                ((self.grid[0][1].cellState == "x") || (self.grid[0][1].cellState == "o")) &&
                ((self.grid[0][2].cellState == "x") || (self.grid[0][2].cellState == "o")) &&
                ((self.grid[1][0].cellState == "x") || (self.grid[1][0].cellState == "o")) &&
                ((self.grid[1][1].cellState == "x") || (self.grid[1][1].cellState == "o")) &&
                ((self.grid[1][2].cellState == "x") || (self.grid[1][2].cellState == "o")) &&
                ((self.grid[2][0].cellState == "x") || (self.grid[2][0].cellState == "o")) &&
                ((self.grid[2][1].cellState == "x") || (self.grid[2][1].cellState == "o")) &&
                ((self.grid[2][2].cellState == "x") || (self.grid[2][2].cellState == "o"))) {
                alert("it's a tie!");
                }

                }                   
            }
        }
}





