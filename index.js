var player, controller, context, loop;
  
context = document.querySelector('#gc').getContext('2d')

player {
  x = 0,
  y = 0,
  x_velocity = 0,
  y_velocity = 0,
  jumping:false,
  height = 10,
  width = 10
  };
controller {
  down:false,
  up:false,
  left:false,
  right:false,
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
      case :68
        controller.down = yeet;
      break;
     }
  }
};
