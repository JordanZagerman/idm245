gameObj.Play = function (game) {

    var txScore;
    var scoreX;


    // display time
    var txTime;

    var timerObj; //timer Object
    var timerSeconds; // Current countdown timer

    var txDice; // Display text dice rolled
    var single_character;
    var orange_spike;
    var yellow_spike;

    var block;
    var baseBlock;

    var single_character_speed;

    var fallingObjectGroup;
    // how many pixels per instance
    var pongObj;
    // button sound effect
    var soundsLoadedFlag;
    // all sounds loaded flag

    // navigation variable
    var cursors;
    // fallings pikes
};

gameObj.Play.prototype = {
    create: function () {
        console.log('State - Play');
        // Game background color
        this.stage.backgroundColor = '#680000';
        // //  Set the world (global) gravity
        this.physics.startSystem(Phaser.Physics.ARCADE);

        // this.game.physics.arcade.enable(sprite);
        // sprite.enableBody = true;
        // sprite.body.immovable = true;

        this.physics.arcade.gravity.y = 400;


        //this.world.centerX/Y is an equation that automatically does the anchor point centering equations
        yellow_spike = this.add.group();
        yellow_spike.createMultiple(8, 'yellow_spike', 0, false);

        // top left is 0,0 bottom right is 1,1
        // yellow_spike.anchor.setTo(0.5, 0.5);
        this.physics.enable(yellow_spike, Phaser.Physics.ARCADE);
        // yellow_spike.name = 'yellow_spike';
        // yellow_spike.body.velocity.y = 200;


        // // Orange Spike

        // orange_spike = this.add.sprite(this.world.centerX + 200, -200, 'orange_spike');
        // // top left is 0,0 bottom right is 1,1
        // orange_spike.anchor.setTo(0.5, 0.5);
        // this.physics.enable(orange_spike, Phaser.Physics.ARCADE);
        // orange_spike.name = 'orange_spike';
        // orange_spike.body.velocity.y = 100;
        // orange_spike.body.gravity.y = 50;

        // Red Block

        // block = this.add.sprite(this.world.centerX - 200, -200, 'block');
        // block.anchor.setTo(0.5, 0.5);
        // this.physics.enable(block, Phaser.Physics.ARCADE);
        // block.name = 'block';
        // block.body.velocity.y = 100;
        // block.body.collideWorldBounds = true;

        // baseBlock = this.add.sprite(0, 10, 'baseBlock');
        // this.physics.enable(baseBlock, Phaser.Physics.ARCADE);
        // baseBlock.name = 'baseBlock';



        single_character = this.add.sprite(this.world.centerX + 50, this.world.centerY, 'single_character');
        this.physics.enable(single_character, Phaser.Physics.ARCADE);
        // keeps chracter within the walls of the canvas
        single_character.body.collideWorldBounds = true;
        single_character.body.bounce.y = 0.8;
        single_character.name = 'single_character';



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

        // //The numbers given in parameters are the indexes of the frames, in this order: OVER, OUT, DOWN
        // var btWin = this.add.button(10, 600, 'winButton', this.winnerFunction, this, 1, 0, 2);
        // var btLose = this.add.button(110, 600, 'loseButton', this.loserFunction, this, 1, 0, 2);

        // // points button
        // var btPoints = this.add.button(210, 600, 'pointsButton', this.pointsFunction, this, 1, 0, 2);

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

        // txDice = this.add.text(this.world.centerX - 50, 50, 'Dice: 0');
        // txDice.fill = 'black';
        // txDice.fontSize = 30;
        // var btRoll = this.add.button(110, 400, 'rollButton', this.rollFun, this, 1, 0, 2);

        single_character_speed = 6;

        // load sounds into memory
        pongObj = this.add.audio('pong');
        // mp3 files take time to decode
        // check to make sure they are loaded and decoded
        soundsLoadedFlag = false;
        // first perameter arrray
        // second function called after all sounds are loaded 
        // third "this"

        this.sound.setDecodedCallback([pongObj], this.soundsLoadedFun, this);

        // Navigation
        cursors = this.input.keyboard.createCursorKeys();

        // this.physics.arcade.enable(this.world, true);
        this.time.events.loop(300, this.fire, this);

    },

    fire: function () {

        var fallingSpike = yellow_spike.getFirstExists(false);

        if (fallingSpike) {
            fallingSpike.frame = this.rnd.integerInRange(0, 10);
            fallingSpike.exists = true;
            fallingSpike.reset(this.world.randomX, -30);

            // fallingSpike.body.bounce.y = 0.8;
        }

    },

    hitBySpike: function (a, fallingSpike) {

        if (fallingSpike.y > (single_character.y + 5)) {
            return true;
        } else {
            // Lose, Player Hit
            this.stage.backgroundColor = '#4d2d2d';

            return false;
        }

    },

    soundsLoadedFun: function () {
        console.log('soundsLoadedFun called')
        soundsLoadedFlag = true;
    },


    // // INCLASSCHANGE
    // rollFun: function () {
    //     console.log('rollFun called');
    //     var diceNum = this.rnd.integerInRange(1, 12);
    //     txDice.text = 'Dice: ' + diceNum;
    //     if (soundsLoadedFlag == true) {
    //         pongObj.play();

    //     }
    // },
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
     checkBounds: function (fallingSpike) {

        if (fallingSpike.y > this.world.height) {
            fallingSpike.kill();
            gameObj.gScore = gameObj.gScore + 1;
            txScore.text = gameObj.gScore;
        }


    },

    update: function () {
        // CORE GAME LOOP


        // Horizontal

        // Down Right
        if (this.input.keyboard.isDown(Phaser.Keyboard.DOWN) &&
            this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            console.log('down right horizontal');
            single_character.x += single_character_speed;
            single_character.frame = 8;
            single_character.body.allowGravity = true;

            // UP Right
        } else if (this.input.keyboard.isDown(Phaser.Keyboard.UP) &&
            this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            console.log('up right horizontal');
            single_character.x += single_character_speed;
            single_character.frame = 2;
            single_character.body.allowGravity = true;

            // UP Left
        } else if (this.input.keyboard.isDown(Phaser.Keyboard.UP) &&
            this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            console.log('up left horizontal');
            single_character.x -= single_character_speed;
            single_character.frame = 0;
            single_character.body.allowGravity = true;

            // Down Left
        } else if (this.input.keyboard.isDown(Phaser.Keyboard.DOWN) &&
            this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            console.log('down left horizontal');
            single_character.x -= single_character_speed;
            single_character.frame = 6;
            single_character.body.allowGravity = true;

            // left
        } else if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            single_character.x -= single_character_speed + 3;
            single_character.frame = 3;
            single_character.body.allowGravity = true;

            // right
        } else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            single_character.x += single_character_speed + 3;
            single_character.frame = 5;
            single_character.body.allowGravity = true;

        } else {
            // single_character.angle = 0;
            single_character.frame = 4;
            single_character.body.allowGravity = true;
        }


        // Vertical

        // Down Right
        if (this.input.keyboard.isDown(Phaser.Keyboard.DOWN) &&
            this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            console.log('down right vertical');
            single_character.y += single_character_speed * 3;
            single_character.frame = 8;
            single_character.body.allowGravity = true;

            // Down Left
        } else if (this.input.keyboard.isDown(Phaser.Keyboard.DOWN) &&
            this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            console.log('Down Left vertical');
            single_character.y += single_character_speed * 3;
            single_character.frame = 6;
            single_character.body.allowGravity = true;

            // UP Left
        } else if (this.input.keyboard.isDown(Phaser.Keyboard.UP) &&
            this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            console.log('up left vertical');
            single_character.y -= single_character_speed;
            single_character.frame = 0;
            single_character.body.allowGravity = false;

            // Up Right
        } else if (this.input.keyboard.isDown(Phaser.Keyboard.UP) &&
            this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            console.log('up right vertical');
            single_character.y -= single_character_speed;
            single_character.frame = 2;
            single_character.body.allowGravity = false;

            // UP
        } else if (this.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            single_character.y -= single_character_speed;
            single_character.frame = 1;
            single_character.body.allowGravity = false;

            // DOWN
        } else if (this.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            single_character.y += single_character_speed * 3;
            single_character.frame = 7;
            single_character.body.allowGravity = true;
        }


        this.physics.arcade.collide(single_character, yellow_spike, this.collisionHandler, null, this);
        // this.physics.arcade.collide(single_character, orange_spike, this.collisionHandler, null, this);
        // this.physics.arcade.collide(single_character, block, this.collisionHandlerBlock, null, this);
        yellow_spike.forEachAlive(this.checkBounds, this);


    },
    collisionHandler: function (obj1, obj2) {
        console.log('Player Hit');
        this.stage.backgroundColor = '#773ddd';
        this.state.start('Lose');

    },
    collisionHandlerBlock: function (obj1, obj2) {
        console.log('Player Hit');

        // if (){}
        // this.stage.backgroundColor = '#F8F8F8';

        timerSeconds = timerSeconds - 20;

        block.body.velocity.x = 100;
        block.body.collideWorldBounds = false;


    },


    render: function () {
        // called after update, apply post render effects
        // or extra debug overlays
        // jervis barely uses render



    }

};