gameObj.Play = function (game) {

    var txScore;
    var scoreX;


    // display time
    var txTime;

    var timerObj; //timer Object
    var timerSeconds; // Current countdown timer

    var txDice; // Display text dice rolled
    var single_character;
    var speedNum = 4;
    // how many pixels per instance
    var pongObj;
    // button sound effect
    var soundsLoadedFlag;
    // all sounds loaded flag
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

        single_character = this.add.sprite(this.world.centerX + 30, (960 - 178), 'single_character');
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

        // BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS BUTTONS 

        //The numbers given in parameters are the indexes of the frames, in this order: OVER, OUT, DOWN
        var btWin = this.add.button(10, 600, 'winButton', this.winnerFunction, this, 1, 0, 2);
        var btLose = this.add.button(110, 600, 'loseButton', this.loserFunction, this, 1, 0, 2);

        // points button
        var btPoints = this.add.button(210, 600, 'pointsButton', this.pointsFunction, this, 1, 0, 2);

        // resets score back to 12000
        gameObj.gScore = 0;
        gameObj.gTime = 80;

        // NEW TIMER NEW TIMER NEW TIMER NEW TIMER NEW TIMER NEW TIMER NEW TIMER NEW TIMER 

        //Add text
        var timeStr = '01:20';

        txTime = this.add.text(608, 40, timeStr);

        txTime.fill = '#FFFFFF';
        txTime.font = 'KrungThep';
        txTime.fontSize = 72;
        txTime.anchor.set(0.5);

        // countdown
        timerSeconds = 80; // 01:10 = 70 seconds
        timerObj = this.game.time.create(false); // creates time object
        // set timer to occur every second
        // first perameter how often do you want it to occur in milaseconds
        // second which function do you wanna call
        timerObj.loop(1000, this.updateTimerFun, this);
        // start timer
        timerObj.start();

        txDice = this.add.text(this.world.centerX - 50, 50, 'Dice: 0');
        txDice.fill = 'black';
        txDice.fontSize = 30;
        var btRoll = this.add.button(110, 400, 'rollButton', this.rollFun, this, 1, 0, 2);

        speedNum = 4;

        // load sounds into memory
        pongObj = this.add.audio('pong');
        // mp3 files take time to decode
        // check to make sure they are loaded and decoded
        soundsLoadedFlag = false;
        // first perameter arrray
        // second function called after all sounds are loaded 
        // third "this"


        this.sound.setDecodedCallback([pongObj], this.soundsLoadedFun, this);



    },
    // 
    soundsLoadedFun: function () {
        console.log('soundsLoadedFun called')
        soundsLoadedFlag = true;
    },

    // INCLASSCHANGE
    rollFun: function () {
        console.log('rollFun called');
        var diceNum = this.rnd.integerInRange(1, 12);
        txDice.text = 'Dice: ' + diceNum;
        if (soundsLoadedFlag == true) {
            pongObj.play();

        }
    },
    winnerFunction: function () {
        console.log('WINNER');
        // jump to Win
        this.state.start('Win');
    },

    loserFunction: function () {
        console.log('LOSER!');
        // jump to Lose
        this.state.start('Lose');
    },
    pointsFunction: function () {
        console.log('pointsFunction called');
        //  must put gameObj. when declaring a global variable
        gameObj.gScore = gameObj.gScore + 10;

        txScore.text = gameObj.gScore;
    },

    // Backbone of the timer
    updateTimerFun: function () {
        console.log('updateTimer called');

        // decrements the time by one second
        // timerSeconds is the raw number of seconds
        timerSeconds = timerSeconds - 1;

        // if the time is greater than or equal to 0. Meaning it has not run out yet
        if (timerSeconds >= 0) {

            // displays the raw number i.e. timerSeconds in  N:00 format
            var displayMinutes = Math.floor(timerSeconds / 60);

            // if the value of the Minutes is less than 10
            if (displayMinutes < 10) {
                // add a zero, that way it will look like 0N:00
                displayMinutes = '0' + displayMinutes;
            }

            // displays the remainder of the raw time divided by 60 i.e the seconds
            var displaySeconds = timerSeconds % 60;

            // if there is less than 10 seconds on the seconds half of the timer
            if (displaySeconds < 10) {
                // add a zero,
                // to make it appear as 00:0N instead of 00:N
                displaySeconds = '0' + displaySeconds;
            }

            // text/string representation of the time
            gameObj.gTime = displayMinutes + ":" + displaySeconds;

            // what the user will see
            txTime.text = gameObj.gTime;

            // if the time runs out
            // and the score is greater than 100
            // go to the win screen
            // by running the winnerFunction function
        } else if (gameObj.gScore > 100) {
            this.winnerFunction();
        } else {
            this.loserFunction();
        }
    },

    update: function () {
        // CORE GAME LOOP

        // left
        if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            single_character.x -= speedNum;
            single_character.angle = -15;

            // right
        } else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            single_character.x += speedNum;
            single_character.angle = 15;
        } else {
            single_character.angle = 0;
        }

    },
    render: function () {
        // called after update, apply post render effects
        // or extra debug overlays
        // jervis barely uses render

    }

};