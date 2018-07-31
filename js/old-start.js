window.onload = function () {

    var game = new Phaser.Game(720, 960, Phaser.AUTO, 'phaser-canvas', {
      preload: preload,
      create: create
    });

    // Images must be preloaded
    function preload() {
      this.game.load.bitmapFont('Krungthep', 'assets/font/font.png', 'assets/font/font.fnt');

      // Images is 1089 pixels wide divided up into 363 pixel wide chunks
      game.load.spritesheet('playButton', '../img/proceed_button.png', 363, 120);
      game.load.spritesheet('helpButton', '../img/help_button.png', 177, 100);
      
    }

    // Text doesn't need to be preloaded
    function create() {
      // backgrounds

      // var spBackground = game.add.sprite(0, 0, 'background');
      game.stage.backgroundColor = "#680000";

      
      // Add button
      // The number given are the indexes of the frames in this order: OVER, OUT, DOWN
      // bt short for button
      var btPlay = game.add.button(game.world.centerX + 1, game.world.centerY + 47 , 'playButton', actionOnClick, this, 1, 0, 2);
      btPlay.anchor.setTo(0.5, 0.5);
      
      // Add button
      // The number given are the indexes of the frames in this order: OVER, OUT, DOWN
      // bt short for button
      var btHelp = game.add.button(game.world.centerX + 1, game.world.centerY + 303 , 'helpButton', actionOnClick, this, 1, 0, 2);
      btHelp.anchor.setTo(0.5, 0.5);

      // text

          // Title

    var so_help_1 = game.add.text(game.world.centerX - 1, 88, 'So Help');
    so_help_1.anchor.set(0.5, 0.5);
    so_help_1.align = 'center';
    so_help_1.font = 'KrungThep';
    so_help_1.fontSize = 144;
    so_help_1.fill = '#F5A623';

    var so_help_2 = game.add.text(game.world.centerX + 5, 96, 'So Help');
    so_help_2.anchor.set(0.5, 0.5);
    so_help_2.align = 'center';
    so_help_2.font = 'KrungThep';
    so_help_2.fontSize = 144;
    so_help_2.fill = '#FFFFFF';

    var me_god_1 = game.add.text(game.world.centerX - 1, 272, 'Me God');
    me_god_1.anchor.set(0.5, 0.5);
    me_god_1.align = 'center';
    me_god_1.font = 'KrungThep';
    me_god_1.fontSize = 144;
    me_god_1.fill = '#F5A623';

    var me_god_2 = game.add.text(game.world.centerX + 5, 280, 'Me God');
    me_god_2.anchor.set(0.5, 0.5);
    me_god_2.align = 'center';
    me_god_2.font = 'KrungThep';
    me_god_2.fontSize = 144;
    me_god_2.fill = '#FFFFFF';
    } // end of create function


    function actionOnClick () {
      // alert('Play button clicked');
      // open("pages/win.html");
    }

  } // end onload function