import React from 'react';
import './secondgame.css';
import NavBar from './navBar';

class SecondGame extends React.Component {
    render() {
        return (
            <NavBar></NavBar>
            <div classNameName="container2">
                <img src="img/ivy.jpg"></img>
                <button onclick="startGame()" classNameName="btn2"> Start Game </button>
                <script type="text/javascript">
                    startGame('somid');
                </script>
            </div>
            <div style="text-align:right;width:425px;"></div>
            <p id="below" className="game-info2"><br></br><font color="white">To play use the arrow keys on the keybord to move around the </font><font color="#62aead">blue</font> <font color="white"> panel.<br></br>Avoid </font> <font color="#ffffba">yellow</font> <font color="white">squares and catch the</font> <font color="#d0ffa1"> green</font> <font color="white">ones</font></p>
            <script>
            var list = document.getElementById("below");
            // Global variables
            var myGamePanel;
            var myObstacles = [];
            var myCatches = [];
            var myScoreBoard;
            var createCatch = true;
            var myScore = 0;
    
            function startGame() {
                /* Create game area */
                myGameArea.start();
                /* Create the bar */
                myGamePanel = new component(100, 20, "#62aead", 150, 250);
            }
    
    /* This object creates the game area - This is a singleton object */
    var myGameArea = {
        canvas : document.createElement("canvas"),
        start : function() {
          this.canvas.width = 400;
          this.canvas.height = 300;
          this.context = this.canvas.getContext("2d");
          list.insertBefore(this.canvas, list.childNodes[0]);
          this.interval = setInterval(updateGameArea, 20);
          window.addEventListener('keydown', function (e) {
              myGameArea.key = e.keyCode;
          })
          window.addEventListener('keyup', function (e) {
              myGameArea.key = false;
          })
          this.frameNo = 0;
        },
        clear : function() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },
        stop : function() {
            clearInterval(this.interval);
        }   
    }
    
    /* This creates the components in the game */
    function component(width, height, color, x, y, type) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.type = type;
        this.speedX = 0;
        this.speedY = 0;
        this.update = function() {
            ctx = myGameArea.context;
            ctx.fillStyle = color;
            if (this.type == "text"){
                ctx.fillText(this.text, this.x, this.y)
            }
            else {
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        }
        this.newPos = function() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x >= myGameArea.canvas.width || this.x <= 0) {
                this.x = 150;
                this.speedX = 0;
            }
            if (this.y >= myGameArea.canvas.height || this.y <= 0) {
                this.y = 250;
                this.speedY = 0;
            }     
        }
        
        /* Determines if two components have crashed */
        this.crashWith = function(otherComponent) {
            var myLeft = this.x;
            var myRight = this.x + this.width;
            var myUp = this.y;
            var myDown = this.y + this.height;
            var otherLeft = otherComponent.x;
            var otherRight = otherComponent.x + otherComponent.width;
            var otherUp = otherComponent.y;
            var otherDown = otherComponent.y + otherComponent.height;
            var crash = true;
            if (myLeft > otherRight || myRight < otherLeft || myUp > otherDown || myDown < otherUp) {
                crash = false; 
            }
            return crash;
        }
        
        // Determines if a catch has been caught
        this.pointMade = function(otherComponent) {
            var myLeft = this.x;
            var myRight = this.x + this.width;
            var myUp = this.y;
            var myDown = this.y + this.height;
            var otherLeft = otherComponent.x;
            var otherRight = otherComponent.x + otherComponent.width;
            var otherUp = otherComponent.y;
            var otherDown = otherComponent.y + otherComponent.height;
            var success = false;
            // Success is true when myGamePanel catches one one of the catches this means that the catch should be with in the width of the panel and on top of it.
            if (myLeft <= otherLeft && myRight >= otherRight && myUp == otherDown) {
                success = true;
            }
            return success;
        }  
    }
    
    function everyInterval(n) {
        if ((myGameArea.frameNo / n) % 1 == 0) {
            return true;
        }
        return false;
    }
    
    function updateGameArea() {
        // If the game panel crashes with any obstacle square, stop the game
        for(i = 0; i < myObstacles.length; i += 1 ) {
            if (myGamePanel.crashWith(myObstacles[i])) {
                myGameArea.stop();
                return;
            }
         }
         // If game panel catches any catch then increment the score 
         for(i = 0; i < myCatches.length; i += 1 ) {
            if (myGamePanel.pointMade(myCatches[i])) {
                myScore += 1;
                myCatches.splice(i, 1);
            }
         }         
        
        // Update frame and clear the screen
        myGameArea.frameNo += 1;
        myGameArea.clear();
        myGamePanel.speedX = 0;
        myGamePanel.speedY = 0; 
        if (myGameArea.key && myGameArea.key == 37) {myGamePanel.speedX = -1; }
    	if (myGameArea.key && myGameArea.key == 39) {myGamePanel.speedX = 1; }
    	if (myGameArea.key && myGameArea.key == 38) {myGamePanel.speedY = -1; }
    	if (myGameArea.key && myGameArea.key == 40) {myGamePanel.speedY = 1; }
        // Creates a new obstacle or catch every 150th frame
        if (myGameArea.frameNo == 1 || everyInterval(50)) {
            var minX = 10;
            var maxX = myGameArea.canvas.width - 20;
            var x = (Math.random() * (maxX - minX)) + minX;
            var y = 0;
            if (createCatch) {
                myCatches.push(new component(30, 30, "#d0ffa1", x, y));
            }
            else {
                myObstacles.push(new component(30, 30, "#ffffba", x, y));
            }
            // Randomly change the value of createCatch
            if (Math.random() >= 0.5) {
                createCatch = true;
            }
            else {
                createCatch = false;
            }
        }
        
        // Moves each obstacle one down and re-draws
        for(i = 0; i < myObstacles.length; i = i + 1 ) {
            myObstacles[i].y += 1; 
            myObstacles[i].update();
        }
        
        // Moves each catch one down and re-draws
        for(i = 0; i < myCatches.length; i = i + 1 ) {
            myCatches[i].y += 1; 
            myCatches[i].update();
        }
        // Re-draw the score board
        myScoreBoard.text = "Score: " + myScore;
        myScoreBoard.update();
        
        // Gets a new position and re-draws
        myGamePanel.newPos();
        myGamePanel.update(); 
    }
    
    function moveUp() { 
        myGamePanel.speedY -= 1;
    }
    function moveDown() {
        myGamePanel.speedY += 1;
    }
    function moveLeft() {
        myGamePanel.speedX -= 1;
    }
    function moveRight() {
        myGamePanel.speedX += 1;
    }
    function stopMove() {
        myGamePanel.speedX = 0;
        myGamePanel.speedY = 0;
    }
</script>
</div>
);
}
}