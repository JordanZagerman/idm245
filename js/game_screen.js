window.onload = function () {

    var game = new Phaser.Game(720, 960, Phaser.AUTO, 'phaser-canvas', {
      preload: preload,
      create: create
    });

    // Images must be preloaded
    function preload() {
      game.load.image('background', '../img/0_score.png');
      
    }

    // Text doesn't need to be preloaded
    function create() {
      game.stage.backgroundColor = "#680000";
      var spBackground = game.add.sprite(0, 0, 'background');

      //game.world.centerX/Y is an equation that automatically does the anchor point centering equations

      // var scoreNum = 1200;

      // // Text Style
      // var generalStyle = {
      //   width: '150px',
      //   font: '35px Arial',
      //   fill: 'white',
      //   allign: 'left'
      // };

      // var textScore = game.add.text(25, 15, scoreNum, generalStyle);
    } // end of create function


    function actionOnClick () {
      alert('Play button clicked');
    }

  } // end onload function