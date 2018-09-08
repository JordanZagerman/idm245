gameObj.Play = function (game) {

    var txScore;
    var scoreX;


    // display time
    var txTime;

    var timerObj; //timer Object
    var timerSeconds; // Current countdown timer

    var txDice; // Display text dice rolled
    var single_character; // main character
    var orange_spike; // more dangerous spikes, that should split into two yellow spikes
    var yellow_spike; // normal dangerous spikes

    var block; // semi harmless, only does damage when character is smushed
    var baseBlock; // might need this to contain the block inside the canvas, because worldbounds will likely be off
    var timer_down; // Power Up that takes some time off of the timer, and likely gives a score boost

    // var floatingCircle;

    var single_character_speed; // speed of the main character's movements

    var knifeObj;
    var pointSound;
    var screamSound;
    var leftSound;
    var rightSound;
    var upSound;
    var downSound;
    var downLeftSound;
    var downRightSound;
    var upLeftSound;
    var upRightSound;
    var shiningSound;

    // sound effect
    var soundsLoadedFlag;
    // all sounds loaded flag

    // navigation variable
    var cursors;
    // fallings pikes
    var fallingTimer;
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
        this.physics.enable(yellow_spike, Phaser.Physics.ARCADE);

        timer_down = this.add.group();
        timer_down.createMultiple(10, 'timer_down', 0, false);
        timer_down.name = 'timer_down';
        this.physics.enable(timer_down, Phaser.Physics.ARCADE);





        single_character = this.add.sprite(this.world.centerX + 50, this.world.centerY, 'single_character');
        this.physics.enable(single_character, Phaser.Physics.ARCADE);
        // keeps chracter within the walls of the canvas
        single_character.body.collideWorldBounds = true;
        single_character.body.bounce.y = 0.8;
        single_character.name = 'single_character';


        // timer_down.body.velocity.x = -200;
        // timer_down.body.allowGravity = false;

        // timer_down = this.add.sprite(-2700, 30, 'timer_down');
        // timer_down.name = 'timer_down';
        // this.physics.enable(timer_down, Phaser.Physics.ARCADE);
        // timer_down.body.velocity.x = 200;
        // timer_down.body.allowGravity = false;



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

        single_character_speed = 6;

        // load sounds into memory
        knifeObj = this.add.audio('death');
        shiningSound = this.add.audio('shining');
        pointSound = this.add.audio('point');
        screamSound = this.add.audio('screams');
        leftSound = this.add.audio('left');
        rightSound = this.add.audio('right');
        upSound = this.add.audio('up');
        downSound = this.add.audio('down');
        downLeftSound  = this.add.audio('down_left');
        downRightSound = this.add.audio('down_right');
        upLeftSound = this.add.audio('up_left');
        upRightSound  = this.add.audio('up_right');
    
        // mp3 files take time to decode
        // check to make sure they are loaded and decoded
        soundsLoadedFlag = false;
        // first perameter arrray
        // second function called after all sounds are loaded 
        // third "this"

        this.sound.setDecodedCallback([knifeObj], this.soundsLoadedFun, this);

        // Navigation
        cursors = this.input.keyboard.createCursorKeys();

        // this.physics.arcade.enable(this.world, true);
        this.time.events.loop(300, this.fire, this);
        this.time.events.loop(300, this.fireTimerDown, this);
        // this.time.events.loop(300, this.fireCirlces, this);

    },

    fire: function () {

        var fallingSpike = yellow_spike.getFirstExists(false);

        if (fallingSpike) {
            fallingSpike.exists = true;
            fallingSpike.reset(this.world.randomX, -200);
        }


    },
    fireTimerDown: function () {

        fallingTimer = timer_down.getFirstExists(false);

        if (fallingTimer) {
            fallingTimer.exists = true;
            fallingTimer.reset(this.world.randomX, -400);
        } 

    },



    soundsLoadedFun: function () {
        console.log('soundsLoadedFun called')
        soundsLoadedFlag = true;
    },


    winnerFunction: function () {
        console.log('WINNER');
        // jump to Win
        this.state.start('Win');
        shiningSound.play();
    },

    loserFunction: function () {
        console.log('LOSER!');
        // jump to Lose
        this.state.start('Lose');
        screamSound.play();
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
        } else {
            this.winnerFunction();
        }
    },
    checkBounds: function (fallingSpike) {

        if (fallingSpike.y > this.world.height) {
            fallingSpike.kill();
            gameObj.gScore = gameObj.gScore + 1;
            txScore.text = gameObj.gScore;
            pointSound.play();
        }


    },
    checkBoundsTimer: function (fallingTimer) {

        if (fallingTimer.y > this.world.height) {
            fallingTimer.kill();
        } else {
            fallingTimer.reset(this.world.randomX, -400);
        }


    },

    collisionHandler: function (obj1, obj2) {
        console.log('Player Hit');
        knifeObj.play();
        this.loserFunction();

    },
    collisionHandlerTimerDownPowerUp: function (obj1, obj2) {
        console.log('collisionHandlerTimerDownPowerUp Called');

        this.stage.backgroundColor = '#00052B';
        gameObj.gScore = gameObj.gScore + 15;
        txScore.text = gameObj.gScore;
        timer_down.kill();

        
        
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
            leftSound.play();
            
            // right
        } else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            single_character.x += single_character_speed + 3;
            single_character.frame = 5;
            single_character.body.allowGravity = true;
            rightSound.play();
            
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
            downRightSound.play();

            // Down Left
        } else if (this.input.keyboard.isDown(Phaser.Keyboard.DOWN) &&
            this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            console.log('Down Left vertical');
            single_character.y += single_character_speed * 3;
            single_character.frame = 6;
            single_character.body.allowGravity = true;
            downLeftSound.play();


            // UP Left
        } else if (this.input.keyboard.isDown(Phaser.Keyboard.UP) &&
            this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            console.log('up left vertical');
            single_character.y -= single_character_speed;
            single_character.frame = 0;
            single_character.body.allowGravity = false;
            upLeftSound.play();

            // Up Right
        } else if (this.input.keyboard.isDown(Phaser.Keyboard.UP) &&
            this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            console.log('up right vertical');
            single_character.y -= single_character_speed;
            single_character.frame = 2;
            single_character.body.allowGravity = false;
            upRightSound.play();

            // UP
        } else if (this.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            single_character.y -= single_character_speed;
            single_character.frame = 1;
            single_character.body.allowGravity = false;
            upSound.play();

            // DOWN
        } else if (this.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            single_character.y += single_character_speed * 3;
            single_character.frame = 7;
            single_character.body.allowGravity = true;
            downSound.play();
        }


        this.physics.arcade.collide(single_character, yellow_spike, this.collisionHandler, null, this);
        this.physics.arcade.collide(single_character, timer_down, this.collisionHandlerTimerDownPowerUp, null, this);
        yellow_spike.forEachAlive(this.checkBounds, this);
        timer_down.forEachAlive(this.checkBoundsTimer, this);
        // timer_down.forEachAlive(this.checkBoundsTimerDown, this);


    },


    render: function () {
        // called after update, apply post render effects
        // or extra debug overlays
        // jervis barely uses render



    }

};