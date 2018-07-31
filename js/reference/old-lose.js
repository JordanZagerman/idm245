window.onload = function () {

  var game = new Phaser.Game(720, 960, Phaser.AUTO, 'phaser-canvas', {
    preload: preload,
    create: create
  });

  // Images must be preloaded
  function preload() {
    this.game.load.bitmapFont('Krungthep', 'assets/font/font.png', 'assets/font/font.fnt');

    // game.load.image('background', '../img/lose_background.png');
    game.load.image('dead_character_1', '../img/dead_character_1.png');
    game.load.image('dead_character_2', '../img/dead_character_2.png');
    // Images is 1089 pixels wide divided up into 363 pixel wide chunks
    game.load.spritesheet('losePlayAgainButton', '../img/lose_play_again_button.png', 437, 120);
  }

  // Text doesn't need to be preloaded
  function create() {
    // // backgrounds

    // var spBackground = game.add.sprite(0, 0, 'background');
    game.stage.backgroundColor = "#CA0019";

    // game.stage.backgroundColor = "#CA0019";

    // images

    // left
    var dead_character_1 = game.add.sprite(14.57, 115.96, 'dead_character_1');
    // right
    var dead_character_2 = game.add.sprite(487, 607, 'dead_character_2');

    // text

    // Title

    // var youCheated1 = game.add.text(game.world.centerX - 1, 107, 'DEAD');
    var youCheated1 = game.add.text(game.world.centerX - 8, 90, 'DEAD');
    youCheated1.anchor.set(0.5, 0.5);
    youCheated1.align = 'center';
    youCheated1.font = 'KrungThep';
    youCheated1.fontSize = 144;
    youCheated1.fill = '#4A4A4A';

    // var youCheated2 = game.add.text(game.world.centerX + 5, 117, 'DEAD');
    var youCheated2 = game.add.text(game.world.centerX - 2, 97, 'DEAD');
    youCheated2.anchor.set(0.5, 0.5);
    youCheated2.align = 'center';
    youCheated2.font = 'KrungThep';
    youCheated2.fontSize = 144;
    youCheated2.fill = '#000000';

    // Score and Time

    // Score

    var score_title = game.add.text(115, 364, 'Score:');
    score_title.align = 'center';
    score_title.font = 'KrungThep';
    score_title.fontSize = 72;
    score_title.fill = '#000000';

    // make this variable changable later
    var final_lose_score = 342;

    var score_number = game.add.text(435, 364, final_lose_score);
    score_number.align = 'center';
    score_number.font = 'KrungThep';
    score_number.fontSize = 72;
    score_number.fill = '#000000';

    // Time

    var time_title = game.add.text(115, 504, 'Time:');
    time_title.align = 'center';
    time_title.font = 'KrungThep';
    time_title.fontSize = 72;
    time_title.fill = '#000000';

    var final_time = "2:34";

    var score_number = game.add.text(435, 504, final_time);
    score_number.align = 'center';
    score_number.font = 'KrungThep';
    score_number.fontSize = 72;
    score_number.fill = '#000000';
    // Add button
    // The number given are the indexes of the frames in this order: OVER, OUT, DOWN
    // bt short for button
    var btPlay = game.add.button(game.world.centerX, game.world.centerY + 380, 'playButton', actionOnClick, this, 1, 0, 2);
    btPlay.anchor.setTo(0.5, 0.5);
  } // end of create function


  function actionOnClick() {
    // open("game_screen.html");
  }

} // end onload function