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
      ],
      sucesos: [
        {
            "id": "por_detras",
            "titulo": "¡Por detrás!",
            "descripcion": "Te despistas con una oferta de chocolate. ¡Quién tuviera ahora una tableta! Te toma por sorpresa 1 zombi y te da un susto de muerte.\nDescarta 1 carta de tu mano y después enfréntate a él.",
            "typo": "Individual",
        },
        {
            "id": "tu_no",
            "titulo": "¡No, tú no!",
            "descripcion": "Daniel, tu mejor amigo desde la infancia, te ataca convertido en zombi. Intentas zafarte de él, pero te cuesta mucho abrirle la cabeza.\n¡La mejor parte de tu infancia la pasaste con él! Pierdes 1 vida en el forcejeo. Te enfrentas a 1 zombi.",
            "typo": "Individual",
        },
        {
            "id": "almacen_intacto",
            "titulo": "Almacén intacto",
            "descripcion": "Encuentras un pequeño almacén de productos farmacéuticos. ¡Está intacto! Si logras abrir la puerta ganas 2 vidas.",
            "typo": "Individual",
        },
        {
            "id": "rodeado",
            "titulo": "¡Rodeado!",
            "descripcion": "Te has despistado con una súper oferta en cerveza y te has separado del grupo. 3 zombis quieren comerte el cerebro.\n¡Ahora tú eres la mejor oferta del supermercado! Si los eliminas a todos roba 1 carta de tu mazo.",
            "typo": "Individual",
        },
        {
            "id": "contenedor_cerrado",
            "titulo": "Contenedor cerrado",
            "descripcion": "Has encontrado un pequeño contenedor cerrado con llave. En la etiqueta se lee \"Wisky de malta. Pack de lujo\".\nSi logras abrir la cerradura gana 2 vidas.",
            "typo": "Individual",
        },
        {
            "id": "oferta_refrescos",
            "titulo": "Oferta en refrescos",
            "descripcion": "En una oscura esquina resalta el cartel de neón en el que se lee: \"Oferta en refrescos\". Una lata de Red Bull es custodiada por 2 zombis.\nPuedes elegir enfrentarte a ellos o no. Si eliminas a ambos roba 2 cartas de tu mazo.",
            "typo": "Individual",
        },
        {
            "id": "oficina_supervisor",
            "titulo": "Oficina del supervisor",
            "descripcion": "Te encuentras ante una puerta de madera con un ojo de buey, por el que ves a 1 zombi. El maldito supervisor se encerró en su\ndespacho con un buen montón de productos caros. ¿Puedes abrir la cerradura? Si lo haces te enfrentas a 1 zombi y después robas 3 cartas de tu mazo.",
            "typo": "Individual",
        },
        {
            "id": "estante_bricolaje",
            "titulo": "Estante de bricolaje",
            "descripcion": "Te atrae un cartel amarillo en el que se lee: \"oferta superpegamento\". Pierdes por un momento a tu grupo y un macabro susurro envuelto en un \nolor sanguinoliento te toma por sorpresa. Te enfrentas a 1 zombi. Si lo eliminas coge 1 carta de tu basura.",
            "typo": "Individual",
        },
        {
            "id": "perro_zombi",
            "titulo": "¡Perro zombi!",
            "descripcion": "Un perro zombi se te echa encima. Quiere devorarte y llevarse tus huesos. ¡Deja de acariciarlo y mátalo! Te enfrentas a 1 perro zombi.\nCada jugador perderá 1 vida hasta que sea eliminado.",
            "typo": "Individual",
        },
        {
            "id": "el_charcutero",
            "titulo": "El charcutero",
            "descripcion": "¿Por qué te detienes a mirar precios en la sección de charcutería? ¡Todo está podrido! Te has separado de tu grupo y ahora te enfrentas\nal charcutero y a sus dos aprendices. Todo por soñar con un bocata de chopped. Te enfrentas a 3 zombis.",
            "typo": "Individual",
        },
        {
            "id": "sorprendidos",
            "titulo": "¡Sorprendidos!",
            "descripcion": "Ha sido mala idea entrar en el almacén. ¿Pensábais que estaría vacío? Os asustáis al entrar en el pasillo C.\nCada jugador descarta 1 carta de su mano. Os enfrentáis a 3 zombis.",
            "typo": "Colectivo",
        },
        {
            "id": "puerta_misteriosa",
            "titulo": "Puerta misteriosa",
            "descripcion": "Encontráis una misteriosa puerta cerrada con llave. ¿Podéis abrirla? Si la abrís, cada jugador lanza 1D6:\n1: Roba 1 carta de tu mazo.\n2-5: Roba 2 carta de tu mazo.\n6: Roba 3 cartas de tu mazo.",
            "typo": "Colectivo",
        },
        {
            "id": "camion_empotrado",
            "titulo": "Camión empotrado",
            "descripcion": "La cabina de un gran camión empotrado en la zona de cajas es un buen refugio para esconder vuestros cerebros de 3 zombis. Los jugadores que\naporten (colocar en su basura) 1 ganzúa o 1 cinturón de herramientas se esconden en la cabina del camión y no recibirán ningún punto de daño\nen este suceso colectivo. Los jugadores que no aporten dichos recursos se enfrentan a 3 zombis.",
            "typo": "Colectivo"
        },
        {
            "id": "heroe_caído",
            "titulo": "Héroe caído",
            "descripcion": "Llegáis tarde a ayudar a un hombre que está siendo devorado por unos zombis. ¿Llevará algo de utilidad encima ese pobre desgraciado?\nOs enfrentais a 3 zombis. Los jugadores que eliminen zombis en este suceso roban 1 carta de su mazo al finalizar el mismo.",
            "typo": "Colectivo"
        },
        {
            "id": "techo_cede",
            "titulo": "¡El techo cede!",
            "descripcion": "Las oficinas del piso de arriba están infestadas de zombis. Hay tantos en una zona que el techo ha cedido en el mismo instante en que vosotros\npasábais. Habéis quedado atrapados entre los escombros y los zombis. ¡Pero qué mala suerte tenéis! Los jugadores que no usen  para librarse\n(colocar en su basura) 1 carta de recurso, descartan 1 carta de su mano y pierden 1 vida.",
            "typo": "Colectivo"
        },
        {
            "id": "necesito_armas",
            "titulo": "¡Necesito armas!",
            "descripcion": "Os encontráis a un hombre desquiciado que se ha atrincherado en los lavabos. A través de una rendija de la puerta os propone un intercambio. Él\nnecesita armas y tiene medicamentos de sobra. Los jugadores que intercambien (colocar en su basura) 1 carta de arma, ganan 2 vidas.",
            "typo": "Colectivo"
        },
        {
            "id": "enfermera_caida",
            "titulo": "Enfermera caída",
            "descripcion": "Una mujer vestida de enfermera ha sido devorada por 3 zombis en la sección de alimentos ecológicos. Vuestros cuerpos calientes son ahora\nel plato principal de esos malnacidos. Os enfrentáis a 3 zombis. Los jugadores que eliminen zombis en este suceso ganan 1 punto de vida.",
            "typo": "Colectivo"
        },
        {
            "id": "aparcamiento_privado",
            "titulo": "Aparcamiento privado",
            "descripcion": "Encontráis una puerta de acceso a un diminuto aparcamiento subterráneo. Entráis en busca de una salida al exterior, pero lo único que encontráis\nson más zombis. Os han tomado por sorpresa. No se pueden usar las habilidades de los supervivientes en este suceso. Os enfrentáis a 3 zombis.",
            "typo": "Colectivo"
        },
        {
            "id": "ayudadme",
            "titulo": "¡Ayudadme!",
            "descripcion": "Los jugadores no pueden jugar cartas de su mano en este suceso. Elegid 1 jugador al azar. Ese jugador queda atrapado por varios brazos de zombis\nque asoman por una rendija del suelo y pierde gran parte de sus cosas (coloca todas las cartas de su mano en su basura). Otro jugador puede ayudarle\nsacrificándose en su lugar (colocando todas las cartas de su mano en su propia basura en lugar del jugador atrapado).",
            "typo": "Colectivo"
        },
        {
            "id": "puerta_reventada",
            "titulo": "Puerta reventada",
            "descripcion": "Los zombis revientan una puerta justo cuando os acercáis a ella, y quedáis rodeados. Os alejáis corriendo al tiempo que os los quitáis de encima como\npodéis. Los jugadores no podéis jugar cartas en este suceso. Os enfrentáis a 2 zombis.",
            "typo": "Colectivo"
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
  ["global","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Juego = __dependency1__["default"];

    var escenariosObj = Juego.escenarios[0];
    var text, textDescripcion, group;

    function Escenario(game, objeto) {
      var style = { font: "46px eurostileregular", fill: '#fff', fontSize: '50px', align: "center" };
      var styleDescripcion = { font: "30px eurostileregular", fill: '#fff', fontSize: '25px', align: "center" };
      group = Phaser.Group.call(this, game);

      var  sprite = this.create(-465, 0, 'seccionGrande');
      sprite.anchor.setTo(0, 0);

      var cerrar = this.create(0, 45, 'cerrar');
      cerrar.inputEnabled = true;
      cerrar.events.onInputDown.add(interroganteBotonEscenario, this);
      //cerrar.anchor.setTo(0, 0);

      var imagen = this.create(0, 215, 'eledificio');
      imagen.scale.setTo(1, 1.5);
      imagen.anchor.setTo(0, 0);

      text = game.add.text(-465, 120, escenariosObj[objeto].titulo, style);

      textDescripcion = game.add.text(-400, 220, escenariosObj[objeto].descripcion, styleDescripcion);
      textDescripcion.wordWrap = true;
      textDescripcion.align = 'left';
      textDescripcion.wordWrapWidth =  340;

      tweenEscenario(this, 465, 300);
      tweenEscenario(cerrar, 400, 100);
      tweenEscenario(imagen, 50, 100);
      tweenEscenario(text, 105, 300);
      tweenEscenario(textDescripcion, 100, 300);
      // tweenEscenario(cerrar, 865);
    }

    function tweenEscenario(obj, coord, vel) {
      var tweenContendero = game.add.tween(obj);
      tweenContendero.to({x : coord }, vel, Phaser.Easing.Linear.None);
      tweenContendero.start();
    }

    function interroganteBotonEscenario() {
      this.destroy();
      textDescripcion.destroy();
      text.destroy();
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
  ["global","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Juego = __dependency1__["default"];

    function Game() {}

    var text, text2;
    var juego = Juego.juego;
    Game.prototype.create = function () {

      var style = { font: "46px eurostileregular", fill: '#fff', fontSize: '50px', align: "center" };
      text = game.add.text(250, 460, "Número de jugadores: " + juego.numeroJugadores, style);
      text2 = game.add.text(250, 500, "Escenario: " + juego.escenario, style);
      console.log(Juego.sucesos);
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
        escenario,
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
          contenedor.interrogante.anchor.setTo(0.5);
          contenedor.addChild(contenedor.interrogante);

          contenedor.seleccion = game.add.sprite((game.world.centerX - espacioEscenarios) + 50, game.world.centerY + 150, 'interrogante');
          contenedor.seleccion.escenario = escenariosObj[item].id;
          contenedor.seleccion.inputEnabled = true;
          contenedor.seleccion.events.onInputDown.add(that.seleccionBoton, this);
          contenedor.seleccion.anchor.setTo(0.5);
          contenedor.addChild(contenedor.seleccion);
        }
      );


      botonDerecha = this.add.button(50, game.world.centerY, 'flechaDerecha', this.itemDeDerecha, this);
      botonDerecha.anchor.setTo(0.5);

      siguiente = this.add.button(this.game.world.centerX + 310, game.world.centerY + 220, 'siguiente', this.startGame, this);
      siguiente.anchor.setTo(0.5);
    };

    SetupEscenario.prototype.interroganteBoton = function (conteexto) {
      console.log(conteexto.escenario);
      escenario = new Escenario(game, conteexto.escenario);
    };

    SetupEscenario.prototype.seleccionBoton = function (conteexto) {
      console.log(contenedor);
      contenedor.children.forEach(function (losOtrosItems) {
        losOtrosItems.alpha = 1;
      });
      conteexto.alpha = 0.5;
      Juego.juego.escenario = conteexto.escenario;
      console.log(Juego);
    };

    SetupEscenario.prototype.itemDeDerecha = function () {
      tweenContendero = game.add.tween(contenedor);
      tweenContendero.to({x: 590}, 1000, Phaser.Easing.Linear.None);
      tweenContendero.start();
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
      Juego.juego.numeroJugadores = this.valor;
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