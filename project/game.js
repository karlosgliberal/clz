define("global",
  ["exports"],
  function(__exports__) {
    "use strict";
    var global = window['colapso'] = {
      juego: {
        numeroJugadores : 4,
        escenario: ''
      },
      escenarios: [
        {
          eledificio: {
            id: 'eledificio',
            titulo: 'El edificio',
            descripcion: 'Teneis que sobrevivir por lo menos dos jugadores, durante 20 minutos, para que os rescaten (solo a dos)'
          },
          supermercado: {
            id: 'supermercado',
            titulo: 'El supermercado',
            descripcion: 'Solo uno sobrevivira en el supermercado, pero solo con ayuda agantarás hata el final'
          },
          estadio: {
            id: 'estadio',
            titulo: 'El estadio',
            descripcion: 'Buscar la llave de la entrada (carta de suceso) todos y llegar a la puerta (carta de suceso), mientra tanto sobrevivir como podais'
          }
        }
      ]
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
define("prefabs/escenario",
  ["exports"],
  function(__exports__) {
    "use strict";

    function Escenario(game, objeto, accion) {
      var style = { font: "46px eurostileregular", fill: '#fff', fontSize: '50px', align: "center" };
      var styleDescripcion = { font: "46px eurostileregular", fill: '#fff', fontSize: '50px', align: "center" };
      var group = Phaser.Group.call(this, game);
      var  sprite = this.create(0, 0, 'seccionGrande');
      sprite.anchor.setTo(0, 0);
      var cerrar = this.create(865, 45, 'cerrar');
      cerrar.anchor.setTo(0, 0);
      var imagen = this.create(105, 215, 'eledificio');
      imagen.scale.setTo(1, 1.5);
      imagen.anchor.setTo(0, 0);
      //var text = game.add.text(105, 120, "El edificio", style);
      //group.add(text);
      var textDescripcion = game.add.text(105, 120, "Teneis que sobrevivir por lo menos dos jugadores, durante 20 minutos, para que os rescaten (solo a dos)", styleDescripcion);
      group.add(textDescripcion);
      var tweenContendero = game.add.tween(this);
      tweenContendero.to({x: 590}, 1000, Phaser.Easing.Linear.None);
      tweenContendero.start();
    }

    Escenario.prototype = Object.create(Phaser.Group.prototype);
    Escenario.prototype.constructor = Escenario;


    __exports__["default"] = Escenario;
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
      this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
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
  ["utils/mediaCordova","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var MediaCordova = __dependency1__["default"];

    function Menu() {}

    var empezar,
        image,
        textura,
        blopAudioAssets,
        blopAudio;

    Menu.prototype.create = function () {
      blopAudioAssets = this.game.add.audio('blop');
      blopAudio = new MediaCordova(blopAudioAssets);
      textura = this.add.sprite(0, 0, 'textura');
      image =  this.game.add.image(this.game.world.centerX, 200, 'logo');
      image.anchor.setTo(0.5, 0.5);
      empezar = this.add.button(this.game.world.centerX, game.world.centerY + 150, 'button-start', this.startGame, this, 1, 2, 0);
      empezar.anchor.setTo(0.5);
    };

    Menu.prototype.startGame = function () {
      //blop.play();
      blopAudio.play();
      this.game.state.start('setupNumeros', true, false);
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
      this.load.image('eledificio', 'assets/eledificio.png');
      this.load.image('supermercado', 'assets/eledificio.png');
      this.load.image('estadio', 'assets/eledificio.png');
      this.load.image('interrogante', 'assets/interrogante.png');
      this.load.image('siguiente', 'assets/siguiente.png');
      this.load.image('flechaDerecha', 'assets/flecha_derecha.png');
      this.load.image('flechaIzquierda', 'assets/flecha_izquierda.png');
      this.load.image('numeroJugadores', 'assets/numero-jugadores.png');
      this.load.image('seccionMini', 'assets/seccionMini.png');
      this.load.image('cerrar', 'assets/cerrar.png');
      this.load.image('seccionGrande', 'assets/seccionGrande.png');

      this.load.audio('blop', 'assets/audio/blop.mp3');

      this.load.spritesheet('button-start', 'assets/botones.png', 371, 100);
      this.load.spritesheet('numeros', 'assets/botones_numero.png', 94, 92);
    };

    Preload.prototype.create = function () {
    };

    Preload.prototype.onLoadComplete = function () {
      this.game.state.start('menu', true, false);
    };

    __exports__["default"] = Preload;
  });
define("scenes/setupEscenario",
  ["global","prefabs/escenario","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Juego = __dependency1__["default"];
    var Escenario = __dependency2__["default"];

    function SetupEscenario() {}
    var textura,
        espacioEscenarios = 0,
        contenedor,
        botonDerecha,
        botonIzquierda,
        tweenContendero,
        interrogante,
        escenariosObj = Juego.escenarios[0],
        escenarios = [],
        siguiente;

    SetupEscenario.prototype.create = function () {
      textura = this.add.sprite(0, 0, 'textura');
      var style = { font: "26px eurostileregular", fill: '#fff', fontSize: '50px', align: "center" };
      var that = this;
      contenedor = game.add.sprite(100, 0, null);
      var escenariosKey = Object.keys(escenariosObj);

      for (var i = escenariosKey.length - 1; i >= 0; i--) {
        escenarios.push(escenariosKey[i]);
      }
      escenarios.forEach(function (item, index) {
          if (index !== 0) {
            espacioEscenarios = espacioEscenarios + 450;
          }
          contenedor.seccion = game.add.sprite((game.world.centerX - espacioEscenarios) + 150, game.world.centerY, 'seccionMini');
          contenedor.seccion.anchor.setTo(0.5);
          contenedor.addChild(contenedor.seccion);

          contenedor.escenario = game.add.sprite((game.world.centerX - espacioEscenarios) + 150, game.world.centerY - 60, escenariosObj[item].id);
          contenedor.escenario.scale.setTo(-0.9, -0.9);
          contenedor.escenario.anchor.setTo(0.5);
          contenedor.addChild(contenedor.escenario);

          var tituloEscenario = escenariosObj[item].titulo;
          contenedor.texto = game.add.text((game.world.centerX - espacioEscenarios) + 10, game.world.centerY + 70, tituloEscenario, style);
          contenedor.addChild(contenedor.texto);

          contenedor.interrogante = game.add.sprite((game.world.centerX - espacioEscenarios) + 270, game.world.centerY + 150, 'interrogante');
          contenedor.interrogante.escenario = escenariosObj[item].id;
          contenedor.interrogante.inputEnabled = true;
          contenedor.interrogante.events.onInputDown.add(that.interroganteBoton, this);
          //contenedor.interrogante = game.add.button((game.world.centerX - espacioEscenarios) + 280, game.world.centerY + 120, 'interrogante', that.interroganteBoton, this);
          contenedor.interrogante.anchor.setTo(0.5);
          contenedor.addChild(contenedor.interrogante);
        }
      );


      botonDerecha = this.add.button(50, game.world.centerY, 'flechaDerecha', this.itemDeDerecha, this);
      botonDerecha.anchor.setTo(0.5);

      siguiente = this.add.button(this.game.world.centerX + 310, game.world.centerY + 220, 'siguiente', this.startGame, this);
      siguiente.anchor.setTo(0.5);
    };

    SetupEscenario.prototype.startGame = function () {
      this.game.state.start('game', true, false);
    };

    SetupEscenario.prototype.interroganteBoton = function (conteexto) {
      console.log(conteexto.escenario);
      var escenario = new Escenario(game, 'accion', 'accion2');
      // contenedor.texto = game.add.text((game.world.centerX - espacioEscenarios), game.world.centerY + 120, tituloEscenario, style);
    };

    SetupEscenario.prototype.itemDeDerecha = function () {
      tweenContendero = game.add.tween(contenedor);
      tweenContendero.to({x: 590}, 1000, Phaser.Easing.Linear.None);
      tweenContendero.start();

      //this.game.state.start('game', true, false);
    };

    __exports__["default"] = SetupEscenario;
  });
define("scenes/setupNumeros",
  ["global","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Juego = __dependency1__["default"];

    function SetupNumeros() {}

    var siguiente;
    var grupoNumeros;
    var textura;
    var jugadores;

    SetupNumeros.prototype.create = function () {
      textura = this.add.sprite(0, 0, 'textura');
      jugadores =  this.game.add.image(this.game.world.centerX, 100, 'numeroJugadores');
      jugadores.anchor.setTo(0.5, 0.5);
      grupoNumeros = game.add.group();

      var item;
      for (var i = 0; i < 4; i++) {
        item = grupoNumeros.create(200 + 168 * i, game.world.centerX - 200, 'numeros', i);
        item.inputEnabled = true;
        item.input.start(0, true);
        item.events.onInputDown.add(this.select, {valor: i});
        grupoNumeros.getAt(i).alpha = 0.9;
      }
      //grupoNumeros.scale.set(0.7, 0.7);

      siguiente = this.add.button(this.game.world.centerX + 310, game.world.centerY + 220, 'siguiente', this.startGame, this);
      siguiente.anchor.setTo(0.5);

    };

    SetupNumeros.prototype.select = function (item) {
      grupoNumeros.forEach(function (losOtrosItems) {
        losOtrosItems.alpha = 0.5;
      });
      item.alpha = 1;
      Juego.numeroJugadores = this.valor;
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
define("utils/mediaCordova",
  ["exports"],
  function(__exports__) {
    "use strict";
    var MediaCordova = function (sound) {
      if (!sound) {
        throw new this.exception('No src defined');
      }
      this.sound = sound;
      if (!game.device.desktop) {
        this.src = this.sound._sound.currentSrc;
        this.soundObj = new Media(this.src,
          function () {
            console.log("playAudio():Audio Success");
          }, function (err) {
            console.log(err);
          }
        );
      } else {
        this.soundObj = this.sound;
      }
    };

    MediaCordova.prototype.play = function () {
      this.soundObj.play();
    };


    __exports__["default"] = MediaCordova;
  });