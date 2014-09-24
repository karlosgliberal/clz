define("global",
  ["exports"],
  function(__exports__) {
    "use strict";
    var global = window['colapso'] = {
      juego: {
        numeroJugadores : 4,
        escenario: ''
      }
    };

    //var juego = { numerJugadores: 4 };

    // Put your global variables into this object
    __exports__["default"] = global;
  });
define("main",
  ["utils/analytics","scenes/boot","scenes/preload","scenes/menu","scenes/game","scenes/setupNumeros","scenes/setupEscenario","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __dependency7__, __exports__) {
    "use strict";

    var Analytics = __dependency1__["default"];

    var Boot = __dependency2__["default"];
    var Preload = __dependency3__["default"];
    var Menu = __dependency4__["default"];
    var Game = __dependency5__["default"];
    var Numeros = __dependency6__["default"];
    var Escenario = __dependency7__["default"];


    var game, App = {};


    App.start = function () {
      game = new Phaser.Game(
        960, 640,
        Phaser.AUTO,
        'colapso'
      );
      game.analytics = new Analytics('colapso');

      game.state.add('boot', Boot);
      game.state.add('preload', Preload);
      game.state.add('menu', Menu);
      game.state.add('game', Game);
      game.state.add('setupNumeros', Numeros);
      game.state.add('setupEscenario', Escenario);

      game.state.start('boot');

      return game;
    };

    __exports__["default"] = App;
  });
define("prefabs/rotate-logo",
  ["exports"],
  function(__exports__) {
    "use strict";
    function RotateLogo(game, x, y, rotateSpeed) {
        Phaser.Sprite.call(this, game, x, y, 'logo');
        this.anchor.setTo(0.5);

        this.rotateSpeed = rotateSpeed;
    }

    RotateLogo.prototype = Object.create(Phaser.Sprite.prototype);
    RotateLogo.prototype.constructor = RotateLogo;

    RotateLogo.prototype.update = function() {
        this.angle += this.rotateSpeed;
    };

    __exports__["default"] = RotateLogo;
  });
define("prefabs/vidas",
  ["exports"],
  function(__exports__) {
    "use strict";
    function Vidas(game, x, y/*, your-params-here */) {
        Phaser.Sprite.call(this, game, x, y, 'logo');

        /* init code here */
        this.anchor.setTo(0.5);
    }

    Vidas.prototype = Object.create(Phaser.Sprite.prototype);
    Vidas.prototype.constructor = Vidas;

    Vidas.prototype.update = function() {};

    __exports__["default"] = Vidas;
  });
define("scenes/boot",
  ["exports"],
  function(__exports__) {
    "use strict";
    function Boot() {}

    Boot.prototype.preload = function () {
      this.load.image('preloader', 'assets/preloader.gif');
    };

    Boot.prototype.create = function () {
      // max number of fingers to detect
      this.input.maxPointers = 1;
      // auto pause if window looses focus
      this.stage.disableVisibilityChange = true;

      if (this.game.device.desktop) {
        this.stage.scale.pageAlignHorizontally = true;
      }
      this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.game.scale.setScreenSize(true);
      this.game.scale.pageAlignHorizontally = true;
      this.game.scale.pageAlignVertically = true;
      this.game.scale.stopFullScreen();

      this.game.canvas.id = 'colapso';



      this.game.state.start('preload', true, false);
    };

    __exports__["default"] = Boot;
  });
define("scenes/game",
  ["prefabs/rotate-logo","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var RotateLogo = __dependency1__["default"];

    function Game() {}

    var logo;
    Game.prototype.create = function () {
      logo = new RotateLogo(
        this.game,
        this.game.width / 2, this.game.height / 2,
        0.5
      );

      this.add.existing(logo);
      this.game.input.onDown.add(this.startGame, this);
    };

    Game.prototype.startGame = function () {
      this.game.state.start('setupNumeros', true, false);
    };

    __exports__["default"] = Game;
  });
define("scenes/menu",
  ["exports"],
  function(__exports__) {
    "use strict";
    function Menu() {}

    var logo;
    var text;
    var style;
    var t;
    var textura;

    Menu.prototype.create = function () {
      textura = this.add.sprite(0, 0, 'textura');
      text = "Configurar partida";
      style = { font: "65px Arial", fill: "#ff0044", align: "center" };
      t = game.add.text(game.world.centerX - 300, 0, text, style);
      logo = this.add.button(this.game.world.centerX, game.world.centerY, 'button-start', this.startGame, this, 1, 2, 0);
      logo.anchor.setTo(0.5);

      this.game.input.onDown.add(this.startGame, this);
    };

    Menu.prototype.startGame = function () {
      this.game.state.start('game', true, false);
    };

    __exports__["default"] = Menu;
  });
define("scenes/preload",
  ["exports"],
  function(__exports__) {
    "use strict";
    function Preload() {
      this.loadingSprite = null;
    }

    Preload.prototype.preload = function () {
      this.loadingSprite = this.add.sprite(320, 480, 'preloader');
      this.loadingSprite.anchor.setTo(0.5, 0.5);

      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.setPreloadSprite(this.loadingSprite);

      // Load game assets here
      this.load.image('logo', 'assets/logo.png');
      this.load.image('textura', 'assets/textura.png');
      this.load.image('titulo', 'assets/title.png');
      this.load.spritesheet('button-start', 'assets/botones.png', 212, 52);
      this.load.spritesheet('numeros', 'assets/number-buttons.png', 160, 160);
    };

    Preload.prototype.create = function () {
    };

    Preload.prototype.onLoadComplete = function () {
      this.game.state.start('menu', true, false);
    };

    __exports__["default"] = Preload;
  });
define("scenes/setupEscenario",
  ["global","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Juego = __dependency1__["default"];

    function SetupEscenario() {}

    var logo;
    SetupEscenario.prototype.create = function () {
      var text = "Selecciona el escenario";
      var style = { font: "45px Arial", fill: "#ff0044", align: "center" };
      game.add.text(game.world.centerX - 300, 10, text, style);
      logo = this.add.button(this.game.world.centerX, game.world.centerY, 'button-start', this.startGame, this, 1, 2, 0);
      logo.anchor.setTo(0.5);
      console.log(Juego);
    };

    SetupEscenario.prototype.startGame = function () {
      this.game.state.start('game', true, false);
    };

    __exports__["default"] = SetupEscenario;
  });
define("scenes/setupNumeros",
  ["global","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Juego = __dependency1__["default"];

    function SetupNumeros() {}

    var logo;
    var grupoNumeros;

    SetupNumeros.prototype.create = function () {
      var text = "Elije el numero de jugadores";
      var style = { font: "45px Arial", fill: "#ff0044", align: "center" };
      game.add.text(game.world.centerX - 300, 10, text, style);
      // var numero = game.add.sprite(300, 200, 'numeros');
      // numero.animations.add('walk');
      // numero.animations.play('walk', 20, true);
      grupoNumeros = game.add.group();
      var item;

      for (var i = 0; i < 6; i++) {
        item = grupoNumeros.create(150 + 168 * i, game.world.centerX, 'numeros', i);
          // Enable input.
        item.inputEnabled = true;
        item.input.start(0, true);
        item.events.onInputDown.add(this.select);
          // item.events.onInputUp.add(release);
          // item.events.onInputOut.add(moveOff);
        grupoNumeros.getAt(i).alpha = 0.5;
      }
      grupoNumeros.scale.set(0.7, 0.7);

      logo = this.add.button(this.game.world.centerX, game.world.centerY + 250, 'button-start', this.startGame, this, 1, 2, 0);
      logo.anchor.setTo(0.5);

    };

    SetupNumeros.prototype.select = function (item) {
      grupoNumeros.forEach(function (losOtrosItems) {
        losOtrosItems.alpha = 0.5;
      });
      item.alpha = 1;
      console.log(Juego); // if (item.alpha === 1) {
    };

    SetupNumeros.prototype.startGame = function () {
      this.game.state.start('setupEscenario', true, false);
    };


    __exports__["default"] = SetupNumeros;
  });
define("utils/analytics",
  ["exports"],
  function(__exports__) {
    "use strict";
    var Analytics = function(category) {
        if (!category) {
            throw new this.exception('No category defined');
        }

        this.active = (window.ga) ? true : false;
        this.category = category;
    };

    Analytics.prototype.trackEvent = function(action, label, value) {
        if (!this.active) {
            return;
        }

        if (!action) {
            throw new this.exception('No action defined');
        }

        if (value) {
            window.ga('send', this.category, action, label, value);
        }
        else if (label) {
            window.ga('send', this.category, action, label);
        }
        else {
            window.ga('send', this.category, action);
        }

    };

    Analytics.prototype.exception = function(message) {
        this.message = message;
        this.name = 'AnalyticsException';
    };

    __exports__["default"] = Analytics;
  });