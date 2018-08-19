gameObj.Win = function (game) {};

gameObj.Win.prototype = {
    create: function () {
        console.log('State - Win');

        this.stage.backgroundColor = "#417505";

        // images

        // top left
        var win_character_1 = this.add.sprite(20, 197, 'win_character_1');

        win_character_1.animations.add('swim');

        //  Play the animation at 30fps on a loop
        win_character_1.animations.play('swim', 30, true);

        //  Bob the win_character_1 up and down with a tween
        this.add.tween(win_character_1).to({
            y: 300
        }, 2000, Phaser.Easing.Bounce.In, true, 0, 1000, true);

        // top right
        var win_character_1 = this.add.sprite(566, 197, 'win_character_1');

        win_character_1.animations.add('swim');

        //  Play the animation at 30fps on a loop
        win_character_1.animations.play('swim', 30, true);

        //  Bob the win_character_1 up and down with a tween
        this.add.tween(win_character_1).to({
            y: 300
        }, 2000, Phaser.Easing.Cubic.Out, true, 0, 1000, true);

        // bottom left
        var win_character_1 = this.add.sprite(20, 612, 'win_character_1');

        win_character_1.animations.add('swim');

        //  Play the animation at 30fps on a loop
        win_character_1.animations.play('swim', 30, true);

        //  Bob the win_character_1 up and down with a tween
        this.add.tween(win_character_1).to({
            y: 300
        }, 2000, Phaser.Easing.Elastic.In, true, 0, 1000, true);
        // bottom right
        var win_character_1 = this.add.sprite(566, 612, 'win_character_1');

        win_character_1.animations.add('swim');

        //  Play the animation at 30fps on a loop
        win_character_1.animations.play('swim', 30, true);

        //  Bob the win_character_1 up and down with a tween
        this.add.tween(win_character_1).to({
            y: 300
        }, 2000, Phaser.Easing.Elastic.InOut, true, 0, 1000, true);


        // text

        // Title

        var youCheated1 = this.add.text(this.world.centerX - 1, 107, 'YOU CHEATED');
        youCheated1.anchor.set(0.5, 0.5);
        youCheated1.align = 'center';
        youCheated1.font = 'KrungThep';
        youCheated1.fontSize = 100;
        youCheated1.fill = '#F5A623';

        var youCheated2 = this.add.text(this.world.centerX + 5, 117, 'YOU CHEATED');
        youCheated2.anchor.set(0.5, 0.5);
        youCheated2.align = 'center';
        youCheated2.font = 'KrungThep';
        youCheated2.fontSize = 100;
        youCheated2.fill = '#FFFFFF';

        var Death1 = this.add.text(this.world.centerX - 1, 234, 'DEATH!');
        Death1.anchor.set(0.5, 0.5);
        Death1.align = 'center';
        Death1.font = 'KrungThep';
        Death1.fontSize = 100;
        Death1.fill = '#F5A623';

        var Death2 = this.add.text(this.world.centerX + 5, 244, 'DEATH!');
        Death2.anchor.set(0.5, 0.5);
        Death2.align = 'center';
        Death2.font = 'KrungThep';
        Death2.fontSize = 100;
        Death2.fill = '#FFFFFF';

        // Score and Time

        //Global Score
        var scoreStr = gameObj.gScore;



        // var txScore = this.add.text(25, 15, scoreStr);
        // var txTime = this.add.text(this.world.width - 115, 15, timeStr);

        // Score

        var score_title = this.add.text(122, 392, 'Score:');
        score_title.align = 'center';
        score_title.font = 'KrungThep';
        score_title.fontSize = 72;
        score_title.fill = '#F8E71C';

        // make this variable changable later
        var final_score = 9632;

        var score_number = this.add.text(375, 395, scoreStr);
        score_number.align = 'right';
        score_number.font = 'KrungThep';
        score_number.fontSize = 72;
        score_number.fill = '#F8E71C';

        // Time

        // Global Time
        var timeStr = gameObj.gTime;

        var time_title = this.add.text(162, 532, 'Time:');
        time_title.align = 'center';
        time_title.font = 'KrungThep';
        time_title.fontSize = 72;
        time_title.fill = '#F8E71C';

        var time_number = this.add.text(375, 535, timeStr);
        time_number.align = 'center';
        time_number.font = 'KrungThep';
        time_number.fontSize = 72;
        time_number.fill = '#F8E71C';

        // Add button
        // The number given are the indexes of the frames in this order: OVER, OUT, DOWN
        // bt short for button
        var btPlay = this.add.button(this.world.centerX, this.world.centerY + 374, 'winPlayButton', this.winPlayAgainOnClick, this, 1, 0, 2);
        btPlay.anchor.setTo(0.5, 0.5);

    },
    winPlayAgainOnClick: function () {
        console.log('play again win screen button clicked');
        this.state.start('Play');
    }
};