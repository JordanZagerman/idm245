window.onload = function () {

  var game = new Phaser.Game(720, 960, Phaser.AUTO, 'phaser-canvas', {
    preload: preload,
    create: create
  });

  // Images must be preloaded
  function preload() {
    // images
    game.load.image('win_character_1', '../img/win_character_1.png');

    // spritesheets
    // Images is 1089 pixels wide divided up into 363 pixel wide chunks
    game.load.spritesheet('winPlayButton', '../img/win_play_again_button.png', 437, 120);

    // fonts
    this.game.load.bitmapFont('Krungthep', 'assets/font/font.png', 'assets/font/font.fnt');
  }

  // Text doesn't need to be preloaded
  function create() {

    // // backgrounds

    game.stage.backgroundColor = "#417505";

    // images

    // top left
    var win_character_1 = game.add.sprite(20, 197, 'win_character_1');
    // top right
    var win_character_1 = game.add.sprite(566, 197, 'win_character_1');
    // bottom left
    var win_character_1 = game.add.sprite(20, 612, 'win_character_1');
    // bottom right
    var win_character_1 = game.add.sprite(566, 612, 'win_character_1');

    // text

    // Title

    var youCheated1 = game.add.text(game.world.centerX - 1, 107, 'YOU CHEATED');
    youCheated1.anchor.set(0.5, 0.5);
    youCheated1.align = 'center';
    youCheated1.font = 'KrungThep';
    youCheated1.fontSize = 100;
    youCheated1.fill = '#F5A623';

    var youCheated2 = game.add.text(game.world.centerX + 5, 117, 'YOU CHEATED');
    youCheated2.anchor.set(0.5, 0.5);
    youCheated2.align = 'center';
    youCheated2.font = 'KrungThep';
    youCheated2.fontSize = 100;
    youCheated2.fill = '#FFFFFF';

    var Death1 = game.add.text(game.world.centerX - 1, 234, 'DEATH!');
    Death1.anchor.set(0.5, 0.5);
    Death1.align = 'center';
    Death1.font = 'KrungThep';
    Death1.fontSize = 100;
    Death1.fill = '#F5A623';

    var Death2 = game.add.text(game.world.centerX + 5, 244, 'DEATH!');
    Death2.anchor.set(0.5, 0.5);
    Death2.align = 'center';
    Death2.font = 'KrungThep';
    Death2.fontSize = 100;
    Death2.fill = '#FFFFFF';

    // Score and Time

    // Score

    var score_title = game.add.text(122, 392, 'Score:');
    score_title.align = 'center';
    score_title.font = 'KrungThep';
    score_title.fontSize = 72;
    score_title.fill = '#F8E71C';

    // make this variable changable later
    var final_score = 9632;

    var score_number = game.add.text(406, 392, final_score);
    score_number.align = 'center';
    score_number.font = 'KrungThep';
    score_number.fontSize = 72;
    score_number.fill = '#F8E71C';

    // Time

    var time_title = game.add.text(162, 532, 'Time:');
    time_title.align = 'center';
    time_title.font = 'KrungThep';
    time_title.fontSize = 72;
    time_title.fill = '#F8E71C';

    var final_time = "00:00";

    var score_number = game.add.text(375, 532, final_time);
    score_number.align = 'center';
    score_number.font = 'KrungThep';
    score_number.fontSize = 72;
    score_number.fill = '#F8E71C';

    // Add button
    // The number given are the indexes of the frames in this order: OVER, OUT, DOWN
    // bt short for button
    var btPlay = game.add.button(game.world.centerX, game.world.centerY + 374, 'winPlayButton', winPlayAgainOnClick, this, 1, 0, 2);
    btPlay.anchor.setTo(0.5, 0.5);
  } // end of create function


  function winPlayAgainOnClick() {
    // open("lose.html");
  }

} // end onload function