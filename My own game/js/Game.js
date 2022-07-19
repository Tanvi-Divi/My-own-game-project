class Game{
  constructor(){

  }
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }
  start(){
    player= new Player()
    playerCount=player.getCount()
    form= new Form()
    form.display()
    dog= createSprite(width/2-200, height-130);
    dog.addImage("dog",dogImage);
    dog.scale=2
    cat= createSprite(width/2+100, height-70);
    cat.addImage("cat",catImage);
    cat.scale=2
    pets=[dog,cat]
  }
  play(){
   this.handleElements();
Player.getPlayersInfo();
if (allPlayers !== undefined) {
  image(bg, 0, -height * 5, width, height * 6);
  //index of the array
  var index = 0;
  for (var plr in allPlayers) {
    //add 1 to the index for every loop
    index = index + 1;

    //use data form the database to display the cars in x and y direction
    var x = allPlayers[plr].positionX;
    var y = height - allPlayers[plr].positionY;
    pets[index - 1].position.x = x;
        pets[index - 1].position.y = y;
        if (index === player.index) {
          // Changing camera position in y direction
          camera.position.y = pets[index - 1].position.y;
        }
      }
  

this.handlePlayerControls();
  drawSprites();
}
  }
  handleElements(){
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }
  handlePlayerControls(){
    if (keyIsDown(UP_ARROW)) {
      //this.playerMoving = true;
      player.positionY += 10;
      player.update();
    }

    if (keyIsDown(LEFT_ARROW) && player.positionX > width / 3 - 50) {
      player.positionX -= 5;
      player.update();
      //this.leftKeyActive=true;
    }

    if (keyIsDown(RIGHT_ARROW) && player.positionX < width / 2 + 300) {
      player.positionX += 5;
      player.update();
      //this.leftKeyActive=false;
    }
  }
 }