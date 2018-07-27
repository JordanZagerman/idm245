window.onload = function () {

  var game = new Phaser.Game(720, 960, Phaser.AUTO, 'phaser-canvas', {
    preload: preload,
    create: create
  });

  // Images must be preloaded
  function preload() {
    this.game.load.bitmapFont('Krungthep', 'assets/font/font.png', 'assets/font/font.fnt');
    game.load.image('yellow_spike', '../img/yellow_spike.png');
    game.load.image('orange_spike', '../img/orange_spike.png');
    game.load.image('block', '../img/block.png');
    game.load.image('single_character', '../img/single_character.png');

  }

  // Text doesn't need to be preloaded
  function create() {
    game.stage.backgroundColor = "#680000";

        //game.world.centerX/Y is an equation that automatically does the anchor point centering equations
        var yellow_spike = game.add.sprite(game.world.centerX, 200, 'yellow_spike');
        // top left is 0,0 bottom right is 1,1
        yellow_spike.anchor.setTo(0.5, 0.5);

        var orange_spike = game.add.sprite(game.world.centerX+200, 400, 'orange_spike');
        // top left is 0,0 bottom right is 1,1
        orange_spike.anchor.setTo(0.5, 0.5);

        var orange_spike = game.add.sprite(game.world.centerX+200, 400, 'orange_spike');
        // top left is 0,0 bottom right is 1,1
        orange_spike.anchor.setTo(0.5, 0.5);

        var block = game.add.sprite(game.world.centerX-300, 400, 'block');
        // top left is 0,0 bottom right is 1,1
        orange_spike.anchor.setTo(0.5, 0.5);

        var single_character = game.add.sprite(game.world.centerX+30, (960-178), 'single_character');
        // top left is 0,0 bottom right is 1,1
        orange_spike.anchor.setTo(0.5, 0.5);

    //game.world.centerX/Y is an equation that automatically does the anchor point centering equations
    var scoreNum = 0;

    // Text Style
    var generalStyle = {
      // width: '200px',
      // font: '50px Krungthep',
      // fill: 'black',
      // allign: 'left'
    }

    var textScore = game.add.text(39, 40, scoreNum);

    //	Center align
    textScore.anchor.set(0.5);
    textScore.align = 'center';

    //	Font style
    textScore.font = 'KrungThep';
    textScore.fontSize = 72;
    // textScore.fontWeight = 'bold';

    // //	Stroke color and thickness
    // textScore.stroke = '#FFFFFF';
    // textScore.strokeThickness = 6;
    textScore.fill = '#FFFFFF';

    // TIMER SECTION

    // var textTimer = game.add.text(25, 15, timerNumMinutes, generalStyle);
    var timerNumMinutes = '00';

    // Text Style
    var generalStyle = {
      // width: '200px',
      // font: '50px Krungthep',
      // fill: 'black',
      // allign: 'left'
    }

    var textTimerMinutes = game.add.text(548, 40, timerNumMinutes);

    //	Center align
    textTimerMinutes.anchor.set(0.5);
    textTimerMinutes.align = 'center';

    //	Font style
    textTimerMinutes.font = 'KrungThep';
    textTimerMinutes.fontSize = 72;
    // textTimerMinutes.fontWeight = 'bold';

    // //	Stroke color and thickness
    // textTimerMinutes.stroke = '#FFFFFF';
    // textTimerMinutes.strokeThickness = 6;
    textTimerMinutes.fill = '#FFFFFF';


    // var textTimerMinutes = game.add.text(25, 15, timerNum, generalStyle);

    // var textTimer = game.add.text(25, 15, timerNumMinutes, generalStyle);
    var timerNumSeconds = '00';

    // Text Style
    var generalStyle = {
      // width: '200px',
      // font: '50px Krungthep',
      // fill: 'black',
      // allign: 'left'
    }

    var textTimerSeconds = game.add.text(668, 40, timerNumSeconds);

    //	Center align
    textTimerSeconds.anchor.set(0.5);
    textTimerSeconds.align = 'center';

    //	Font style
    textTimerSeconds.font = 'KrungThep';
    textTimerSeconds.fontSize = 72;
    // textTimerSeconds.fontWeight = 'bold';

    // //	Stroke color and thickness
    // textTimerSeconds.stroke = '#FFFFFF';
    // textTimerSeconds.strokeThickness = 6;
    textTimerSeconds.fill = '#FFFFFF';


    // var textTimerSeconds = game.add.text(25, 15, timerNum, generalStyle);

    var timerNumColon = ':';

    // Text Style
    var generalStyle = {
      // width: '200px',
      // font: '50px Krungthep',
      // fill: 'black',
      // allign: 'left'
    }

    const textTimerColon = game.add.text(608, 40, timerNumColon);

    //	Center align
    textTimerColon.anchor.set(0.5);
    textTimerColon.align = 'center';

    //	Font style
    textTimerColon.font = 'KrungThep';
    textTimerColon.fontSize = 72;
    // textTimerColon.fontWeight = 'bold';

    // //	Stroke color and thickness
    // textTimerColon.stroke = '#FFFFFF';
    // textTimerColon.strokeThickness = 6;
    textTimerColon.fill = '#FFFFFF';


    // var textTimerColon = game.add.text(25, 15, timerNum, generalStyle);

  } // end of create function


  function actionOnClick() {
    alert('Play button clicked');
  }

} // end onload function