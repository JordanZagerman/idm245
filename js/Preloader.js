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

        // Load temp buttons
        this.load.spritesheet('winButton', 'img/btn_win.png', 90, 90);
        this.load.spritesheet('loseButton', 'img/btn_lose.png', 90, 90);

        // Images        // USE THIS. NOT GAME.

        // Help Images
        this.load.image('help_bones', 'img/help_bones.png');

        // Play Images
        this.load.image('yellow_spike', 'img/yellow_spike.png');
        this.load.image('orange_spike', 'img/orange_spike.png');
        this.load.image('block', 'img/block.png');
        this.load.image('single_character', 'img/single_character.png');

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

        // preload points button
        this.load.spritesheet('pointsButton', 'img/btn_points.png', 90, 90);

        
        this.load.spritesheet('rollButton', 'img/btn_roll.png', 90, 90);
        this.load.audio('pong', 'assets/snd/pong.mp3');

    },
    create: function () {

        // jump to Start
        this.state.start('Start');

    }
};