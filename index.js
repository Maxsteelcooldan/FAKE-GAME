var player, controller, context, loop;
 
context = document.querySelector('#gc').getContext('2d')
context.canvas.width = 100;
context.canvas.height = 100;

player = {
  x = 0;
  y = 0;
  x_velocity = 0;
  y_velocity = 0;
  jumping:false;
  height = 10;
  width = 10;
  };
controller = {
  down:false,
  up:false,
  left:false,
  right:false,
  space:false,
  keyListener:function(event) {
    
    var yeet=(event.type == "keydown")?true:false;
    
    switch(event.keycode) {
      
      case 87:
        controller.up = yeet;
      break;
      case 83:
        controller.down = yeet;
      break;
      case 65:
        controller.left = yeet;
      break;
      case 68:
        controller.down = yeet;
      break;
      case 32:
        controller.space = yeet;
      break;
     }
 }
};
        loop = function() {
          if(controller.left){
            player.x_velocity -= 9;;
          }
          if(controller.up && player.jumping) {
            player.y_velocity -= 9;
            player.jumping=true;
          }
          if(controller.down) {
            player.y_velocity += 9;
          }
          if(controller.right) {
            player.x_velocity += 9;
          }
          
      player.y_velocity = 1.5;
      player.y += player.y_velocity;  
      player.x += player.x_velocity;
      player.x_velocity *= 0.9;
      player.y_velocity *= 0.9;
  if (player.x < ob.x + player.width && player.x + player.width > ob.x && player.y < ob.y + ob.height && player.y + player.height > b.y) { 
   return:false;
  }
   return:true;    
          
  context.fillStyle = "#202020";
  context.fillRect(0, 0, 320, 180);// x, y, width, height
  context.fillStyle = "#ff0000";// hex for red
  context.beginPath();
  context.rect(player.x, player.y, player.width, player.height);
  context.fill();
  context.strokeStyle = "#202830";
  context.lineWidth = 4;
  context.beginPath();
  context.moveTo(0, 164);
  context.lineTo(320, 164);
  context.stroke();

      
      window.requestAnimationFrame(loop);

    };

window.addkeyListener("keydown", controller.keyListener)
window.addkeyListener("keyup", controller.keyListener)
window.requestAnimationFrame(loop);
