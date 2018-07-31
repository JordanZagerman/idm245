gameObj.Help = function (game) {};

gameObj.Help.prototype = {
  create: function () {
    console.log('State - Help');

    var help_bones = this.add.sprite(this.world.centerX - 116, this.world.centerY + 47, 'help_bones');
        // top left is 0,0 bottom right is 1,1
        help_bones.anchor.setTo(0.5, 0.5);


        // Add button
        // The number given are the indexes of the frames in this order: OVER, OUT, DOWN
        // bt short for button
        var btPlay = this.add.button(this.world.centerX + 1, this.world.centerY + 382, 'playButton', this.playButtonClicked, this, 1, 0, 2);
        btPlay.anchor.setTo(0.5, 0.5);

        // Text Starting at the top

        var Help_2 = this.add.text(this.world.centerX - 1, 56, 'Help');
        Help_2.anchor.set(0.5);
        Help_2.align = 'center';
        Help_2.font = 'KrungThep';
        Help_2.fontSize = 72;
        Help_2.fill = '#F5A623';

        var Help_1 = this.add.text(this.world.centerX + 2, 60, 'Help');
        Help_1.anchor.set(0.5);
        Help_1.align = 'center';
        Help_1.font = 'KrungThep';
        Help_1.fontSize = 72;
        Help_1.fill = '#FFFFFF';

        var line_1 = this.add.text(this.world.centerX - 52, 150, 'Try to outlive the clock.');
        line_1.anchor.set(0.5);
        line_1.align = 'center';
        line_1.font = 'KrungThep';
        line_1.fontSize = 30;
        line_1.fill = '#FFFFFF';

        var line_2 = this.add.text(this.world.centerX - 11, 196, 'Use the arrow keys to move.');
        line_2.anchor.set(0.5);
        line_2.align = 'center';
        line_2.font = 'KrungThep';
        line_2.fontSize = 30;
        line_2.fill = '#FFFFFF';

        var line_3 = this.add.text(this.world.centerX, 266, 'AVOID');
        line_3.anchor.set(0.5);
        line_3.align = 'center';
        line_3.font = 'KrungThep';
        line_3.fontSize = 30;
        line_3.fill = '#FFFFFF';

        var line_4 = this.add.text(this.world.centerX - 42, 363, 'Falling spikes');
        line_4.anchor.set(0.5);
        line_4.align = 'center';
        line_4.font = 'KrungThep';
        line_4.fontSize = 30;
        line_4.fill = '#FFFFFF';

        var line_5 = this.add.text(this.world.centerX - 9, 462, '1 minute addition');
        line_5.anchor.set(0.5);
        line_5.align = 'center';
        line_5.font = 'KrungThep';
        line_5.fontSize = 30;
        line_5.fill = '#FFFFFF';

        var line_6 = this.add.text(this.world.centerX - 40, 564, 'Sweeping box');
        line_6.anchor.set(0.5);
        line_6.align = 'center';
        line_6.font = 'KrungThep';
        line_6.fontSize = 30;
        line_6.fill = '#FFFFFF';

        var line_7 = this.add.text(this.world.centerX, 659, 'CHASE');
        line_7.anchor.set(0.5);
        line_7.align = 'center';
        line_7.font = 'KrungThep';
        line_7.fontSize = 30;
        line_7.fill = '#FFFFFF';

        var line_8 = this.add.text(this.world.centerX + 28, 745, '30 second subtraction');
        line_8.anchor.set(0.5);
        line_8.align = 'center';
        line_8.font = 'KrungThep';
        line_8.fontSize = 30;
        line_8.fill = '#FFFFFF';

  },
  playButtonClicked: function () {
    console.log('play button clicked');
    this.state.start('Play');
    }
};
