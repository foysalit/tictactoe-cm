var tttApp = angular.module('tttApp',[]);

tttApp.controller('TttController', function($scope){

$scope.gameBoard = ["", "", "", "", "","", "", "",""];
$scope.xturn = true;  

$scope.playSquare = function(position){
    if($scope.xturn == true) {
    $scope.gameBoard[position]= "x"; 
    playerXwins();
    alert("Nice job! PlayerX wins this round.")
    }

    else {
    $scope.gameBoard[position]= "o";
    playerOwins();
    alert("Nice job! PlayerO wins this round.")
    }
    $scope.xturn != $scope.xturn; 
  }



function resetGame() {
    $scope.gameBoard = ["", "", "", "", "","", "", "",""];
    $scope.xturn = false;
}

function sayDraw() {
    if gameBoard 
}


// //for (var i = 0; i < arrays.length; i++) {

//     for (var j=0; j < arrays[i].length; j++) {
//         console.log(array[i][j]);
//         if (array [i][j] == "x") {
//         x.plays[i][j] = "x";
//         }

//         else if (board.x[i][i] == "x") {
//             count++;
//         }
//     }
// }



// conditions for "x" to win
var Xwin= function(){
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++ {
            console.log(array[i][j]);
            if(array [i][j] == "x") {
            

    console.log(this.grid);
    this.cell.cellState = "x";




    if($scope.grid[0][0].cellState == "x" && $scope.grid[0][1].cellState == "x" && $scope.grid[0][2].cellState == "x") 
    alert("x wins")                 
};

    if($scope.grid[1][0].cellState == "x" && $scope.grid[1][1].cellState == "x" && $scope.grid[1][2].cellState == "x") 
    alert("x wins")                 
};

    if($scope.grid[2][0].cellState == "x" && $scope.grid[2][1].cellState == "x" && $scope.grid[2][2].cellState == "x") 
    alert("x wins")                 
};

    if($scope.grid[0][0].cellState == "x" && $scope.grid[1][0].cellState == "x" && $scope.grid[2][0].cellState == "x") 
    alert("x wins")                 
};

    if($scope.grid[1][0].cellState == "x" && $scope.grid[1][1].cellState == "x" && $scope.grid[1][2].cellState == "x") 
    alert("x wins")                 
};
    if($scope.grid[2][0].cellState == "x" && $scope.grid[2][1].cellState == "x" && $scope.grid[2][2].cellState == "x") 
    alert("x wins")                 
};
    if($scope.grid[0][0].cellState == "x" && $scope.grid[1][1].cellState == "x" && $scope.grid[2][2].cellState == "x") 
    alert("x wins")                 
};
    if($scope.grid[0][2].cellState == "x" && $scope.grid[1][1].cellState == "x" && $scope.grid[2][0].cellState == "x") 
    alert("x wins")                 
};

//conditions for "o" to win
    if($scope.grid[0][0].cellState == "o" && $scope.grid[0][1].cellState == "o" && $scope.grid[0][2].cellState == "o") 
    alert("o wins")                 
};

    if($scope.grid[1][0].cellState == "o" && $scope.grid[1][1].cellState == "o" && $scope.grid[1][2].cellState == "o") 
    alert("o wins")                 
};

    if($scope.grid[2][0].cellState == "o" && $scope.grid[2][1].cellState == "o" && $scope.grid[2][2].cellState == "o") 
    alert("o wins")                 
};

    if($scope.grid[0][0].cellState == "o" && $scope.grid[1][0].cellState == "o" && $scope.grid[2][0].cellState == "o") 
    alert("o wins")                 
};

    if($scope.grid[1][0].cellState == "o" && $scope.grid[1][1].cellState == "o" && $scope.grid[1][2].cellState == "o") 
    alert("o wins")                 
};

    if($scope.grid[2][0].cellState == "o" && $scope.grid[2][1].cellState == "o" && $scope.grid[2][2].cellState == "o") 
    alert("o wins")                 
};

    if($scope.grid[0][0].cellState == "o" && $scope.grid[1][1].cellState == "o" && $scope.grid[2][2].cellState == "o") 
    alert("o wins")                 
};
    if($scope.grid[0][2].cellState == "o" && $scope.grid[1][1].cellState == "o" && $scope.grid[2][0].cellState == "o") 
    alert("o wins")                 
};



function sayTie() {
    alert("It's a tie!");
    reset();
}
tie();

function sayWin() {
    alert("You won! Nice job.");
    reset();
}
win();

function sayDefeat() {
    alert("Aw, better luck next time!");
    reset();
}
defeat();


