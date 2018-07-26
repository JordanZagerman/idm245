window.onload = function () {

  var game = new Phaser.Game(720, 960, Phaser.AUTO, 'phaser-canvas', {
    preload: preload,
    create: create
  });

  // Images must be preloaded
  function preload() {
    game.load.image('background', '../img/0_score.png');
    this.game.load.bitmapFont('Krungthep', 'assets/font/font.png', 'assets/font/font.fnt');
  }

  // Text doesn't need to be preloaded
  function create() {
    game.stage.backgroundColor = "#680000";
    var spBackground = game.add.sprite(0, 0, 'background');

    //game.world.centerX/Y is an equation that automatically does the anchor point centering equations
    var scoreNum = 0;

    // Text Style
    var generalStyle = {
      // width: '200px',
      // font: '50px Krungthep',
      // fill: 'black',
      // allign: 'left'
    }

    var textScore = game.add.text(39, 36, scoreNum);

    //	Center align
    textScore.anchor.set(0.5);
    textScore.align = 'center';

    //	Font style
    textScore.font = 'KrungThep';
    textScore.fontSize = 72;
    // textScore.fontWeight = 'bold';

    // //	Stroke color and thickness
    // textScore.stroke = '#000000';
    // textScore.strokeThickness = 6;
    textScore.fill = '#000000';

    // TIMER SECTION

    // var textTimer = game.add.text(25, 15, timerNumMinutes, generalStyle);
    var timerNumMinutes = 0;

    // Text Style
    var generalStyle = {
      // width: '200px',
      // font: '50px Krungthep',
      // fill: 'black',
      // allign: 'left'
    }

    var textTimer = game.add.text(572, 40, timerNumMinutes);

    //	Center align
    textTimer.anchor.set(0.5);
    textTimer.align = 'center';

    //	Font style
    textTimer.font = 'KrungThep';
    textTimer.fontSize = 72;
    // textTimer.fontWeight = 'bold';

    // //	Stroke color and thickness
    // textTimer.stroke = '#000000';
    // textTimer.strokeThickness = 6;
    textTimer.fill = '#000000';


    // var textTimer = game.add.text(25, 15, timerNum, generalStyle);

  } // end of create function


  function actionOnClick() {
    alert('Play button clicked');
  }

} // end onload function