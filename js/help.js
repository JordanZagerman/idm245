window.onload = function () {

    var game = new Phaser.Game(720, 960, Phaser.AUTO, 'phaser-canvas', {
        preload: preload,
        create: create
    });

    // Images must be preloaded
    function preload() {
        this.game.load.bitmapFont('Krungthep', 'assets/font/font.png', 'assets/font/font.fnt');

        game.load.image('background', '../img/help_background.png');
        game.load.spritesheet('playButton', '../img/proceed_button.png', 363, 120);
        game.load.image('help_bones', '../img/help_bones.png');

    }

    // Text doesn't need to be preloaded
    function create() {
        var spBackground = game.add.sprite(0, 0, 'background');


        //game.world.centerX/Y is an equation that automatically does the anchor point centering equations
        // Y = 47
        // X = 116
        var help_bones = game.add.sprite(game.world.centerX - 116, game.world.centerY + 47, 'help_bones');
        // top left is 0,0 bottom right is 1,1
        help_bones.anchor.setTo(0.5, 0.5);


        // Add button
        // The number given are the indexes of the frames in this order: OVER, OUT, DOWN
        // bt short for button
        var btPlay = game.add.button(game.world.centerX + 1, game.world.centerY + 382, 'playButton', actionOnClick, this, 1, 0, 2);
        btPlay.anchor.setTo(0.5, 0.5);

        // Text Starting at the top

        var Help_1 = game.add.text(game.world.centerX + 2 , 60, 'Help');
        Help_1.anchor.set(0.5);
        Help_1.align = 'center';
        Help_1.font = 'KrungThep';
        Help_1.fontSize = 72;
        Help_1.fill = '#000000';

        var Help_1 = game.add.text(game.world.centerX - 3 , 56, 'Help');
        Help_1.anchor.set(0.5);
        Help_1.align = 'center';
        Help_1.font = 'KrungThep';
        Help_1.fontSize = 72;
        Help_1.fill = '#0053B4';
    
        var line_1 = game.add.text(game.world.centerX - 52 , 150, 'Try to outlive the clock.');
        line_1.anchor.set(0.5);
        line_1.align = 'center';
        line_1.font = 'KrungThep';
        line_1.fontSize = 30;
        line_1.fill = '#000000';

        var line_2 = game.add.text(game.world.centerX - 11 , 196, 'Use the arrow keys to move.');
        line_2.anchor.set(0.5);
        line_2.align = 'center';
        line_2.font = 'KrungThep';
        line_2.fontSize = 30;
        line_2.fill = '#000000';

        var line_3 = game.add.text(game.world.centerX , 266, 'AVOID');
        line_3.anchor.set(0.5);
        line_3.align = 'center';
        line_3.font = 'KrungThep';
        line_3.fontSize = 30;
        line_3.fill = '#000000';

        var line_4 = game.add.text(game.world.centerX - 42, 363, 'Falling spikes');
        line_4.anchor.set(0.5);
        line_4.align = 'center';
        line_4.font = 'KrungThep';
        line_4.fontSize = 30;
        line_4.fill = '#000000';

        var line_5 = game.add.text(game.world.centerX - 9, 462, '1 minute addition');
        line_5.anchor.set(0.5);
        line_5.align = 'center';
        line_5.font = 'KrungThep';
        line_5.fontSize = 30;
        line_5.fill = '#000000';

        var line_6 = game.add.text(game.world.centerX - 40, 564, 'Sweeping box');
        line_6.anchor.set(0.5);
        line_6.align = 'center';
        line_6.font = 'KrungThep';
        line_6.fontSize = 30;
        line_6.fill = '#000000';

        var line_7 = game.add.text(game.world.centerX, 659, 'CHASE');
        line_7.anchor.set(0.5);
        line_7.align = 'center';
        line_7.font = 'KrungThep';
        line_7.fontSize = 30;
        line_7.fill = '#000000';

        var line_8 = game.add.text(game.world.centerX + 28, 745, '30 second subtraction');
        line_8.anchor.set(0.5);
        line_8.align = 'center';
        line_8.font = 'KrungThep';
        line_8.fontSize = 30;
        line_8.fill = '#000000';
    } // end of create function


    function actionOnClick() {
        // alert('Play button clicked');
        open("pages/win.html");
    }

} // end onload function