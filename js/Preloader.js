// the second state that's called
// all images
// all spritesheets
// all sounds
// for everyscreen
// creates preloader animations

gameObj.Preloader = function (game) {};

gameObj.Preloader.prototype = {
    preload: function () {
        console.log("State - Preloader");
        // USE THIS. NOT GAME.

        // Fonts /Bitmaps        // USE THIS. NOT GAME.

        this.game.load.bitmapFont('Krungthep', 'assets/font/font.png', 'assets/font/font.fnt');


        // Background colors        // USE THIS. NOT GAME.

        this.stage.backgroundColor = '#680000';
        // USE THIS. NOT GAME.

        // Spitesheets         // USE THIS. NOT GAME.


        this.load.spritesheet('playButton', 'img/proceed_button.png', 363, 120);
        this.load.spritesheet('helpButton', 'img/help_button.png', 177, 100);

        // Images        // USE THIS. NOT GAME.

        // Help Images
        this.load.image('help_bones', 'img/help_bones.png');

        // Play Images
        this.load.image('yellow_spike', 'img/yellow_spike.png');
        this.load.image('orange_spike', 'img/orange_spike.png');
        this.load.image('block', 'img/block.png');
        this.load.image('timer_up', 'img/timer_up.png');
        this.load.image('timer_down', 'img/timer_down.png');
        
        this.load.spritesheet('single_character', 'img/single_character.png', 93, 175);


        // Win Images
        this.load.image('win_character_1', 'img/win_character_1.png');
        this.load.spritesheet('winPlayButton', 'img/win_play_again_button.png', 437, 120);

        // Lose Images
        this.load.image('dead_character_1', 'img/dead_character_1.png');
        this.load.image('dead_character_2', 'img/dead_character_2.png');
        // Images is 1089 pixels wide divided up into 363 pixel wide chunks
        this.load.spritesheet('losePlayAgainButton', 'img/lose_play_again_button.png', 437, 120);


        // this.preloadBG = this.add.sprite((820 - 297) / 2, (700 - 145) / 2, 'preloaderBg');
        // bar width 158
        // bar height 50
        this.preloadBar = this.add.sprite((820 - 158) / 2, (700 - 50) / 2, 'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar);

        // Audio
        this.load.audio('death', 'assets/snd/pong.mp3');
        this.load.audio('point', 'assets/snd/point.mp3');
        this.load.audio('left', 'assets/snd/left.mp3');
        this.load.audio('right', 'assets/snd/right.mp3');
        this.load.audio('down_right', 'assets/snd/down_right.mp3');
        this.load.audio('down_left', 'assets/snd/down_left.mp3');
        this.load.audio('up_left', 'assets/snd/up_left.mp3');
        this.load.audio('up_right', 'assets/snd/up_right.mp3');
        this.load.audio('up', 'assets/snd/up.mp3');
        this.load.audio('down', 'assets/snd/down.mp3');
        this.load.audio('flight', 'assets/snd/flight.mp3');
        this.load.audio('screams', 'assets/snd/screams.mp3');
        this.load.audio('shining', 'assets/snd/shining.mp3');

    },
    create: function () {

        // jump to Start
        this.state.start('Start');

    }
};