window.onload = function () {

  var game = new Phaser.Game(720, 960, Phaser.AUTO, 'phaser-canvas', {
    preload: preload,
    create: create
  });

  // Images must be preloaded
  function preload() {
    game.load.image('background', '../img/start_background.png');
    game.load.image('marker', '../img/marker.png');
    // Images is 1089 pixels wide divided up into 363 pixel wide chunks
    game.load.spritesheet('playButton', '../img/proceed_button.png', 363, 120);
    game.load.spritesheet('helpButton', '../img/help_button.png', 177, 100);
    this.game.load.bitmapFont('Krungthep', 'assets/font/font.png', 'assets/font/font.fnt');

  }

  // Text doesn't need to be preloaded
  function create() {
    var spBackground = game.add.sprite(0, 0, 'background');

    //game.world.centerX/Y is an equation that automatically does the anchor point centering equations
    var spMarker = game.add.sprite(game.world.centerX, game.world.centerY, 'marker');
    // top left is 0,0 bottom right is 1,1
    spMarker.anchor.setTo(0.5, 0.5);

    var scoreNum = 1200;

    // Text Style
    var generalStyle = {
      // width: '200px',
      // font: '50px Krungthep',
      // fill: 'black',
      // allign: 'left'
    };

    var textScore = game.add.text(125, 205, scoreNum);

    //	Center align
    textScore.anchor.set(0.5);
    textScore.align = 'center';

    //	Font style
    textScore.font = 'KrungThep';
    textScore.fontSize = 80;
    // textScore.fontWeight = 'bold';

    // //	Stroke color and thickness
    // textScore.stroke = '#000000';
    // textScore.strokeThickness = 6;
    textScore.fill = '#FFFFFF';

    // Add button
    // The number given are the indexes of the frames in this order: OVER, OUT, DOWN
    // bt short for button
    var btPlay = game.add.button(game.world.centerX + 1, game.world.centerY + 47, 'playButton', actionOnClick, this, 1, 0, 2);
    btPlay.anchor.setTo(0.5, 0.5);

    // Add button
    // The number given are the indexes of the frames in this order: OVER, OUT, DOWN
    // bt short for button
    var btHelp = game.add.button(game.world.centerX + 1, game.world.centerY + 303, 'helpButton', actionOnClick, this, 1, 0, 2);
    btHelp.anchor.setTo(0.5, 0.5);
  } // end of create function


  function actionOnClick() {
    alert('Play button clicked');
  }

} // end onload function