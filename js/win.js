window.onload = function () {

    var game = new Phaser.Game(720, 960, Phaser.AUTO, 'phaser-canvas', {
      preload: preload,
      create: create
    });

    // Images must be preloaded
    function preload() {
      game.load.image('background', '../img/win_background.png');
      game.load.image('marker', '../img/marker.png');
      // Images is 1089 pixels wide divided up into 363 pixel wide chunks
      game.load.spritesheet('playButton', '../img/win_play_again_button.png', 437, 120);
    }

     // Text doesn't need to be preloaded
     function create() {
        var spBackground = game.add.sprite(0, 0, 'background');
  
        
        // Add button
        // The number given are the indexes of the frames in this order: OVER, OUT, DOWN
        // bt short for button
        var btPlay = game.add.button(game.world.centerX, game.world.centerY + 374 , 'playButton', actionOnClick, this, 1, 0, 2);
        btPlay.anchor.setTo(0.5, 0.5);
      } // end of create function
  
  
      function actionOnClick () {
        open("lose.html");
      }
  
    } // end onload function