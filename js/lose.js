gameObj.Lose = function (game) {};

gameObj.Lose.prototype = {
    create: function () {
        console.log('State - Lose');

        // // backgrounds

        // var spBackground = this.add.sprite(0, 0, 'background');
        this.stage.backgroundColor = "#CA0019";

        // this.stage.backgroundColor = "#CA0019";

        // images

        // left
        var dead_character_1 = this.add.sprite(14.57, 115.96, 'dead_character_1');
        // right
        var dead_character_2 = this.add.sprite(487, 607, 'dead_character_2');

        // text

        // Title

        // var youCheated1 = this.add.text(this.world.centerX - 1, 107, 'DEAD');
        var youCheated1 = this.add.text(this.world.centerX - 8, 90, 'DEAD');
        youCheated1.anchor.set(0.5, 0.5);
        youCheated1.align = 'center';
        youCheated1.font = 'KrungThep';
        youCheated1.fontSize = 144;
        youCheated1.fill = '#4A4A4A';

        // var youCheated2 = this.add.text(this.world.centerX + 5, 117, 'DEAD');
        var youCheated2 = this.add.text(this.world.centerX - 2, 97, 'DEAD');
        youCheated2.anchor.set(0.5, 0.5);
        youCheated2.align = 'center';
        youCheated2.font = 'KrungThep';
        youCheated2.fontSize = 144;
        youCheated2.fill = '#000000';

        // Score and Time

            //Global Score
    var scoreStr = gameObj.gScore;

    // Global Time
    var timeStr = gameObj.gTime;

    // var txScore = this.add.text(25, 15, scoreStr);
    // var txTime = this.add.text(this.world.width - 115, 15, timeStr);

        // Score

        var score_title = this.add.text(115, 364, 'Score:');
        score_title.align = 'center';
        score_title.font = 'KrungThep';
        score_title.fontSize = 72;
        score_title.fill = '#000000';

        // make this variable changable later
        var final_lose_score = 342;

        var score_number = this.add.text(435, 364, scoreStr);
        score_number.align = 'center';
        score_number.font = 'KrungThep';
        score_number.fontSize = 72;
        score_number.fill = '#000000';

        // Time

        var time_title = this.add.text(115, 504, 'Time:');
        time_title.align = 'center';
        time_title.font = 'KrungThep';
        time_title.fontSize = 72;
        time_title.fill = '#000000';

        var final_time = "02:34";

        var score_number = this.add.text(375, 504, final_time);
        score_number.align = 'center';
        score_number.font = 'KrungThep';
        score_number.fontSize = 72;
        score_number.fill = '#000000';
        // Add button
        // The number given are the indexes of the frames in this order: OVER, OUT, DOWN
        // bt short for button
        var btPlay = this.add.button(this.world.centerX, this.world.centerY + 380, 'losePlayAgainButton', this.losePlayAgainOnClick, this, 1, 0, 2);
        btPlay.anchor.setTo(0.5, 0.5);

    },
    losePlayAgainOnClick: function () {
        console.log('play again lose screen button clicked');
        this.state.start('Play');
    }
};