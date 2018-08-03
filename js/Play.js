gameObj.Play = function (game) {

    var txScore;
    var scoreX;
};

gameObj.Play.prototype = {
    create: function () {
        console.log('State - Play');
        this.stage.backgroundColor = '#680000';

        //this.world.centerX/Y is an equation that automatically does the anchor point centering equations
        var yellow_spike = this.add.sprite(this.world.centerX, 200, 'yellow_spike');
        // top left is 0,0 bottom right is 1,1
        yellow_spike.anchor.setTo(0.5, 0.5);

        var orange_spike = this.add.sprite(this.world.centerX + 200, 400, 'orange_spike');
        // top left is 0,0 bottom right is 1,1
        orange_spike.anchor.setTo(0.5, 0.5);

        var orange_spike = this.add.sprite(this.world.centerX + 200, 400, 'orange_spike');
        // top left is 0,0 bottom right is 1,1
        orange_spike.anchor.setTo(0.5, 0.5);

        var block = this.add.sprite(this.world.centerX - 300, 400, 'block');
        // top left is 0,0 bottom right is 1,1
        orange_spike.anchor.setTo(0.5, 0.5);

        var single_character = this.add.sprite(this.world.centerX + 30, (960 - 178), 'single_character');
        // top left is 0,0 bottom right is 1,1
        orange_spike.anchor.setTo(0.5, 0.5);

        //this.world.centerX/Y is an equation that automatically does the anchor point centering equations
        var scoreNum = 0;

        // Text Style
        var generalStyle = {
            // width: '200px',
            // font: '50px Krungthep',
            // fill: 'black',
            // allign: 'left'
        }

        // txScore = this.add.text(39, 40, scoreNum);
        // test length

        scoreX = 15;
        txScore = this.add.text(scoreX, -5, scoreNum);

        //	Center align
        txScore.align = 'left';

        //	Font style
        txScore.font = 'KrungThep';
        txScore.fontSize = 72;
        // txScore.fontWeight = 'bold';

        // //	Stroke color and thickness
        // txScore.stroke = '#FFFFFF';
        // txScore.strokeThickness = 6;
        txScore.fill = '#FFFFFF';

        // TIMER SECTION

        // var textTimer = this.add.text(25, 15, timerNumMinutes, generalStyle);
        var timerNumMinutes = '00';

        // Text Style
        var generalStyle = {
            // width: '200px',
            // font: '50px Krungthep',
            // fill: 'black',
            // allign: 'left'
        }

        var textTimerMinutes = this.add.text(548, 40, timerNumMinutes);

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


        // var textTimerMinutes = this.add.text(25, 15, timerNum, generalStyle);

        // var textTimer = this.add.text(25, 15, timerNumMinutes, generalStyle);
        var timerNumSeconds = '00';

        // Text Style
        var generalStyle = {
            // width: '200px',
            // font: '50px Krungthep',
            // fill: 'black',
            // allign: 'left'
        }

        var textTimerSeconds = this.add.text(668, 40, timerNumSeconds);

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


        // var textTimerSeconds = this.add.text(25, 15, timerNum, generalStyle);

        var timerNumColon = ':';

        // Text Style
        var generalStyle = {
            // width: '200px',
            // font: '50px Krungthep',
            // fill: 'black',
            // allign: 'left'
        }

        const textTimerColon = this.add.text(608, 40, timerNumColon);

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

        //The numbers given in parameters are the indexes of the frames, in this order: OVER, OUT, DOWN
        var btWin = this.add.button(10, 600, 'winButton', this.winnerFun, this, 1, 0, 2);
        var btLose = this.add.button(110, 600, 'loseButton', this.loserFun, this, 1, 0, 2);

        // points button

        var btPoints = this.add.button(210, 600, 'pointsButton', this.pointsFun, this, 1, 0, 2);

        // resets score back to 12000
        gameObj.gScore = 0;
        gameObj.gTime = 70;

    },
    winnerFun: function () {
        console.log('WINNER');
        // jump to Win
        this.state.start('Win');
    },

    loserFun: function () {
        console.log('LOSER!');
        // jump to Lose
        this.state.start('Lose');
    },
    pointsFun: function () {
        console.log('pointsFun called');
        //  must put gameObj. when declaring a global variable
        gameObj.gScore = gameObj.gScore + 10;

        // if (gameObj.gScore >= 10) {
        //     console.log('score greater than 10');
        //     scoreX = scoreX + 10;
        //   } else if (gameObj.gScore >= 100) {
        //     console.log('score greater than 100');
        //     scoreX = scoreX + 10;
        //   }
        txScore.text = gameObj.gScore;
    }
};