gameObj.Start = function (game) {};

gameObj.Start.prototype = {
  create: function () {
    console.log('State - Start');

    // Add button
    // The number given are the indexes of the frames in this order: OVER, OUT, DOWN
    // bt short for button
    var btPlay = this.add.button(this.world.centerX + 1, this.world.centerY + 47, 'playButton', this.playButtonClicked, this, 1, 0, 2);
    btPlay.anchor.setTo(0.5, 0.5);

    // Add button
    // The number given are the indexes of the frames in this order: OVER, OUT, DOWN
    // bt short for button
    var btHelp = this.add.button(this.world.centerX + 1, this.world.centerY + 303, 'helpButton', this.helpButtonClicked, this, 1, 0, 2);
    btHelp.anchor.setTo(0.5, 0.5);

    // text

    // Title

    var so_help_1 = this.add.text(this.world.centerX - 1, 88, 'So Help');
    so_help_1.anchor.set(0.5, 0.5);
    so_help_1.align = 'center';
    so_help_1.font = 'KrungThep';
    so_help_1.fontSize = 144;
    so_help_1.fill = '#F5A623';

    var so_help_2 = this.add.text(this.world.centerX + 5, 96, 'So Help');
    so_help_2.anchor.set(0.5, 0.5);
    so_help_2.align = 'center';
    so_help_2.font = 'KrungThep';
    so_help_2.fontSize = 144;
    so_help_2.fill = '#FFFFFF';

    var me_god_1 = this.add.text(this.world.centerX - 1, 272, 'Me God');
    me_god_1.anchor.set(0.5, 0.5);
    me_god_1.align = 'center';
    me_god_1.font = 'KrungThep';
    me_god_1.fontSize = 144;
    me_god_1.fill = '#F5A623';

    var me_god_2 = this.add.text(this.world.centerX + 5, 280, 'Me God');
    me_god_2.anchor.set(0.5, 0.5);
    me_god_2.align = 'center';
    me_god_2.font = 'KrungThep';
    me_god_2.fontSize = 144;
    me_god_2.fill = '#FFFFFF';


  }, // end of create function


  playButtonClicked: function () {
    console.log('play button clicked');
    this.state.start('Play');
  },

  helpButtonClicked: function () {
    console.log('help button clicked');
    this.state.start('Help');
  }
};