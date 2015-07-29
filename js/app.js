// Enemies our player must avoid
var Enemy = function(x) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = this.pickum();
    this.speed = Math.random() * 300+20;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed*dt;

    
    if(this.x > 500){
        this.y = this.pickum();
        this.x = -150;
        this.speed = Math.random() * 300+20;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.pickum = function(){
    var locations = [40, 130, 220];
    return locations[Math.floor(Math.random()*locations.length)];
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y){

    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};




Player.prototype.update = function(){
        
    if (this.move === 'up' && (this.y-90)>0){
         
        this.y -= 90;
        this.move = '';
                    
    }
    if (this.move === 'down' && (this.y+90)<410){
            
            this.y += 90;
            this.move = '';
    }
    if (this.move === 'left' && (this.x-100)>=0){
            
            this.x -= 100;
            this.move = '';
            
    }
    if (this.move === 'right' && (this.x+100)<401){
            
            this.x += 100;
            this.move = '';
    }
    
};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(code){
    this.move = code;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



var allEnemies = [];

for(var i = 0; i<4; i++){
    allEnemies[i] = new Enemy(-150);
}



var player = new Player(200,400);




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
