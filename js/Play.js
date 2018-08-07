gameObj.Play = function (game) {

    var txScore;
    var scoreX;


    // display time
    var txTime;

    var timerObj; //timer Object
    var timerSeconds; // Current countdown timer
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

        // SCORE SCORE SCORE SCORE SCORE SCORE SCORE SCORE SCORE SCORE SCORE SCORE 
        var scoreNum = 0;

        scoreX = 15;
        txScore = this.add.text(scoreX, -5, scoreNum);

        //	Center align
        txScore.align = 'left';

        //	Font style
        txScore.font = 'KrungThep';
        txScore.fontSize = 72;

        // Stroke color and thickness
        txScore.fill = '#FFFFFF';

        // TIMER TIMER TIMER TIMER TIMER TIMER TIMER TIMER TIMER TIMER TIMER TIMER 

        // Minutes Minutes Minutes Minutes Minutes Minutes Minutes 

        // var timerNumMinutes = '00';

        // var textTimerMinutes = this.add.text(548, 40, timerNumMinutes);

        // //	Center align
        // textTimerMinutes.anchor.set(0.5);
        // textTimerMinutes.align = 'center';

        // //	Font style
        // textTimerMinutes.font = 'KrungThep';
        // textTimerMinutes.fontSize = 72;

        // // Stroke color and thickness
        // textTimerMinutes.fill = '#FFFFFF';

        // // Seconds Seconds Seconds Seconds Seconds Seconds Seconds Seconds 

        // var timerNumSeconds = '00';
        // var textTimerSeconds = this.add.text(668, 40, timerNumSeconds);

        // //	Center align
        // textTimerSeconds.anchor.set(0.5);
        // textTimerSeconds.align = 'center';

        // //	Font style
        // textTimerSeconds.font = 'KrungThep';
        // textTimerSeconds.fontSize = 72;

        // // Stroke color and thickness
        // textTimerSeconds.fill = '#FFFFFF';

        // // Colon Colon Colon Colon Colon Colon Colon Colon Colon Colon Colon
        // var timerNumColon = ':';
        // const textTimerColon = this.add.text(608, 40, timerNumColon);

        // //	Center align
        // textTimerColon.anchor.set(0.5);
        // textTimerColon.align = 'center';

        // //	Font style
        // textTimerColon.font = 'KrungThep';
        // textTimerColon.fontSize = 72;

        // // //	Stroke color and thickness
        // textTimerColon.fill = '#FFFFFF';

        // BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS 

        //The numbers given in parameters are the indexes of the frames, in this order: OVER, OUT, DOWN
        var btWin = this.add.button(10, 600, 'winButton', this.winnerFun, this, 1, 0, 2);
        var btLose = this.add.button(110, 600, 'loseButton', this.loserFun, this, 1, 0, 2);

        // points button
        var btPoints = this.add.button(210, 600, 'pointsButton', this.pointsFun, this, 1, 0, 2);

        // resets score back to 12000
        gameObj.gScore = 0;
        gameObj.gTime = 70;

        // NEW TIMER NEW TIMER NEW TIMER NEW TIMER NEW TIMER NEW TIMER NEW TIMER NEW TIMER 

        //Add text
        var timeStr = '01:10';

        txTime = this.add.text(608, 40, timeStr);

        txTime.fill = '#FFFFFF';
        txTime.font = 'KrungThep';
        txTime.fontSize = 72;
        txTime.anchor.set(0.5);

        // countdown
        timerSeconds = 70; // 01:10 = 70 seconds
        timerObj = this.game.time.create(false); // creates time object
        // set timer to occur every second
        // first perameter how often do you want it to occur in milaseconds
        // second which function do you wanna call
        timerObj.loop(1000, this.updateTimerFun, this);
        // start timer
        timerObj.start();



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
        
        txScore.text = gameObj.gScore;
    },

    updateTimerFun: function () {
        console.log('updateTimer called');

        timerSeconds = timerSeconds - 1;

        if (timerSeconds >= 0) {

            var displayMin = Math.floor(timerSeconds / 60);

            if (displayMin < 10) {
                displayMin = '0' + displayMin;
            }

            var displaySec = timerSeconds % 60;
            txTime.text = displayMin + ":" + displaySec;

            if (displaySec < 10) {
                displaySec = '0' + displaySec;
            }
            gameObj.gTime = displayMin + ":" + displaySec;
            txTime.text = gameObj.gTime;
        } else {
            this.loserFun();
        }
    }
};