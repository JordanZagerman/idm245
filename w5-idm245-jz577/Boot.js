var gameObj = {
  // Global variables are decleared here!
  // stuff like score tiem etc
  // For some reason it's called boot
  // apparently because it boots up the game
  // want to load the bare minimum
  // built in preloader for background and bar


  gScore: 3770,
  gTime: "00:00"
};

gameObj.Boot = function (game) {};

// All code goes in the prototype
gameObj.Boot.prototype = {
  preload: function () {
    console.log("State - Boot");

    // wherever you see game. replace it with this.

    this.load.image('preloaderBg', 'img/loading-bg.png');
    this.load.image('preloaderBar', 'img/loading-bar.png');


  },
  create: function () {

    // jump to preloader
    this.state.start("Preloader");

  }
};