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

        this.load.image('help_bones', 'img/help_bones.png');

        this.preloadBG = this.add.sprite((820 - 297) / 2, (700 - 145) / 2, 'preloaderBg');
        // bar width 158
        // bar height 50
        this.preloadBar = this.add.sprite((820 - 158) / 2, (700 - 50) / 2, 'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar);



    },
    create: function () {

        // jump to Start
        this.state.start('Start');

    }
};