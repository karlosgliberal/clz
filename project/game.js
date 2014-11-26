define("global",
  ["exports"],
  function(__exports__) {
    "use strict";
    var global = window['colapso'] = {
      juego: {
        numeroJugadores : 4,
        jugadorNumero: 1,
        escenario: 'eledificio',
        superviviente: 'hennai'
      },
      supervivientes: [
        {
          june: {
            id: 'June',
            titulo: 'JUNE',
            subtitulo: 'Mano de vida',
            descripcion: 'Media vida dedica como cirujana en uno de los hospitales mas agetreado de la ciudad',
            imagen: 'marine.png',
            habilidad: 'Se cura un punto de daño',
            cartas: [
              {
                burlar: 5,
                dañar: 5,
                curar: 15,
                comunes: 15
              }
            ]
          },
          kyuzu: {
            id: 'kyuzu',
            titulo: 'KYUZU',
            subtitulo: 'Duro como los bloques del norte',
            descripcion: 'En la zona norte en el barrio de los bloques la carcel fue su segunda casa y su escuela',
            imagen: 'marine.png',
            habilidad: 'Mata a un zombi',
            cartas: [
              {
                burlar: 5,
                dañar: 15,
                curar: 5,
                comunes: 15
              }
            ]
          },
          hennai: {
            id: 'hennai',
            titulo: 'HENNAI',
            subtitulo: '¿ah es tu cartera? 15 5 8',
            descripcion: 'Antes de lo acontecido fue un triste oficinista, no sabía que tenia otras habilidades, cuidado que no te engañe ',
            imagen: 'marine.png',
            habilidad: 'roba una carta de la basura',
            cartas: [
              {
                burlar: 15,
                dañar: 5,
                curar: 5,
                comunes: 15
              }
            ]
          },
          jacco: {
            id: 'jacco',
            titulo: 'JACCO',
            subtitulo: 'De mantenimiento por obligación',
            descripcion: 'Toda la vida arreglando cosas no pensaba que le iba a salvar la vida',
            imagen: 'marine.png',
            habilidad: 'intercambia una carta',
            cartas: [
              {
                burlar: 10,
                dañar: 10,
                curar: 10,
                comunes: 10
              }
            ]
          },
        }
      ],
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
          "id": "roba_una_carta",
          "titulo": "Roba una Carta",
          "descripcion": "Has tenido suerte (por ahora) Roba una carta",
          "tipo": 1
        },
        {
          "id": "por_detras",
          "titulo": "¡Por detrás!",
          "descripcion": "Te despistas con una oferta de chocolate. ¡Quién tuviera ahora una tableta! Te toma por sorpresa 1 zombi y te da un susto de muerte.\nDescarta 1 carta de tu mano y después enfréntate a él.",
          "tipo": 1
        },
        {
          "id": "no_tu_no",
          "titulo": "¡No, tú no!",
          "descripcion": "Daniel, tu mejor amigo desde la infancia, te ataca convertido en zombi. Intentas zafarte de él, pero te cuesta mucho abrirle la cabeza.\n¡La mejor parte de tu infancia la pasaste con él! Pierdes 1 vida en el forcejeo. Te enfrentas a 1 zombi.",
          "tipo": 1
        },
        {
          "id": "rodeado",
          "titulo": "¡Rodeado!",
          "descripcion": "Te has despistado con una súper oferta en cerveza y te has separado del grupo. 3 zombis quieren comerte el cerebro.\n¡Ahora tú eres la mejor oferta del supermercado! Si los eliminas a todos roba 1 carta de tu mazo.",
          "tipo": 1
        },
        {
          "id": "oferta_en_refrescos",
          "titulo": "Oferta en refrescos",
          "descripcion": "En una oscura esquina resalta el cartel de neón en el que se lee: \"Oferta en refrescos\". Una lata de Red Bull es custodiada por 2 zombis.\nPuedes elegir enfrentarte a ellos o no. Si eliminas a ambos roba 2 cartas de tu mazo.",
          "tipo": 1
        },
        {
          "id": "estante_de_bricolaje",
          "titulo": "Estante de bricolaje",
          "descripcion": "Te atrae un cartel amarillo en el que se lee: \"oferta superpegamento\". Pierdes por un momento a tu grupo y un macabro susurro envuelto en un \nolor sanguinoliento te toma por sorpresa. Te enfrentas a 1 zombi. Si lo eliminas coge 1 carta de tu basura.",
          "tipo": 1
        },
        {
          "id": "perro_zombi",
          "titulo": "¡Perro zombi!",
          "descripcion": "Un perro zombi se te echa encima. Quiere devorarte y llevarse tus huesos. ¡Deja de acariciarlo y mátalo! Te enfrentas a 1 perro zombi.\nCada jugador perderá 1 vida hasta que sea eliminado.",
          "tipo": 1
        },
        {
          "id": "el_charcutero",
          "titulo": "El charcutero",
          "descripcion": "¿Por qué te detienes a mirar precios en la sección de charcutería? ¡Todo está podrido! Te has separado de tu grupo y ahora te enfrentas\nal charcutero y a sus dos aprendices. Todo por soñar con un bocata de chopped. Te enfrentas a 3 zombis.",
          "tipo": 1
        },
        {
          "id": "sorprendidos",
          "titulo": "¡Sorprendidos!",
          "descripcion": "Ha sido mala idea entrar en el almacén. ¿Pensábais que estaría vacío? Os asustáis al entrar en el pasillo C.\nCada jugador descarta 1 carta de su mano. Os enfrentáis a 3 zombis.",
          "tipo": 0
        },
        {
          "id": "camion_empotrado",
          "titulo": "Camión empotrado",
          "descripcion": "La cabina de un gran camión empotrado en la zona de cajas es un buen refugio para esconder vuestros cerebros de 3 zombis. Los jugadores que\naporten (colocar en su basura) 1 cinturón de herramientas se esconden en la cabina del camión y no recibirán ningún punto de daño\nen este suceso colectivo. Los jugadores que no aporten dicha carta se enfrentan a 3 zombis.",
          "tipo": 0
        },
        {
          "id": "heroe_caido",
          "titulo": "Héroe caído",
          "descripcion": "Llegáis tarde a ayudar a un hombre que está siendo devorado por unos zombis. ¿Llevará algo de utilidad encima ese pobre desgraciado?\nOs enfrentais a 3 zombis. Los jugadores que eliminen zombis en este suceso roban 1 carta de su mazo al finalizar el mismo.",
          "tipo": 0
        },
        {
          "id": "el_techo_cede",
          "titulo": "¡El techo cede!",
          "descripcion": "Las oficinas del piso de arriba están infestadas de zombis. Hay tantos en una zona que el techo ha cedido en el mismo instante en que vosotros\npasábais. Habéis quedado atrapados entre los escombros y los zombis. ¡Pero qué mala suerte tenéis! Los jugadores descartan 1 carta de su mano y pierden 1 vida.",
          "tipo": 0
        },
        {
          "id": "necesito_armas",
          "titulo": "¡Necesito armas!",
          "descripcion": "Os encontráis a un hombre desquiciado que se ha atrincherado en los lavabos. A través de una rendija de la puerta os propone un intercambio. Él\nnecesita armas y tiene medicamentos de sobra. Los jugadores que intercambien (colocar en su basura) 1 carta de arma, ganan 2 vidas.",
          "tipo": 0
        },
        {
          "id": "enfermera_caida",
          "titulo": "Enfermera caída",
          "descripcion": "Una mujer vestida de enfermera ha sido devorada por 3 zombis en la sección de alimentos ecológicos. Vuestros cuerpos calientes son ahora\nel plato principal de esos malnacidos. Os enfrentáis a 3 zombis. Los jugadores que eliminen zombis en este suceso ganan 1 punto de vida.",
          "tipo": 0
        },
        {
          "id": "aparcamiento_privado",
          "titulo": "Aparcamiento privado",
          "descripcion": "Encontráis una puerta de acceso a un diminuto aparcamiento subterráneo. Entráis en busca de una salida al exterior, pero lo único que encontráis\nson más zombis. Os han tomado por sorpresa. No se pueden usar las habilidades de los supervivientes en este suceso. Os enfrentáis a 3 zombis.",
          "tipo": 0
        },
        {
          "id": "puerta_reventada",
          "titulo": "Puerta reventada",
          "descripcion": "Los zombis revientan una puerta justo cuando os acercáis a ella, y quedáis rodeados. Os alejáis corriendo al tiempo que os los quitáis de encima como\npodéis. Los jugadores no podéis jugar cartas en este suceso. Os enfrentáis a 2 zombis.",
          "tipo": 0
        },
        {
          "id": "ayudadme",
          "titulo": "¡Ayudadme!",
          "descripcion": "Los jugadores no pueden jugar cartas de su mano en este suceso. El jugador de tu derecha queda atrapado por varios brazos de zombis\nque asoman por una rendija del suelo y pierde todas sus cosas (coloca todas las cartas de su mano en su basura). ",
          "tipo": 1
        },
        {
          "id": "un_mal_paso",
          "titulo": "Un mal paso",
          "descripcion": "El suelo cede bajo tus pies, tropiezas y caes de bruces pierdes parte de tu equipo. Pones 2 cartas en el centro de la mesa el jugador de tu derecha elige que hacer con ellas ",
          "tipo": 1
        },
        {
          "id": "ruleta_rusa",
          "titulo": "Ruleta rusa",
          "descripcion": "ataque de 3 zombies por sorpresa, huis a la carrera, todos descartais una carta ",
          "tipo": 0
        },
        {
          "id": "decisiones_dificiles",
          "titulo": "Decisiones dificiles",
          "descripcion": "ataque 2 zombies, elige a un jugador que no seas tu, este se libra del suceso ",
          "tipo": 0
        },
        {
          "id": "Nunca_te_fies_de_un_anister",
          "titulo": "Nunca te fies de un Lanister",
          "descripcion": "todos se curan menos uno, tu eliges quien",
          "tipo": 0
        },
        {
          "id": "super_heroe",
          "titulo": "Super heroe",
          "descripcion": "ataque 2 zombies, tu eliges quienes se enfrentan a ellos",
          "tipo": 0
        },
        {
          "id": "mediador",
          "titulo": "Mediador",
          "descripcion": "Pelea en el grupo. el jugador de tu derecha se enfentra a al de tu izquierda. los 2 reciben un punto de daño",
          "tipo": 1
        },
        {
          "id": "gatito_gatito ",
          "titulo": "gatito gatito ",
          "descripcion": "mordisco de gato rabioso 1 punto de daño",
          "tipo": 1
        },
        {
          "id": "la_voz_de_juez",
          "titulo": "La voz de juez",
          "descripcion": "tu elijes quien no participa en este suceso el resto se enfrentan a 2 zombies",
          "tipo": 0
        },
        {
          "id": "suerte_por_un_dia",
          "titulo": "Suerte por un dia",
          "descripcion": "cogeis una carta de la basura y recuperar 1 vida",
          "tipo": 0
        },
        {
          "id": "cuchipanda",
          "titulo": "Cuchipanda",
          "descripcion": "tu y otro jugador  de tu eleccion recuperais 1 vida",
          "tipo": 1
        },
        {
          "id": "mal_menor",
          "titulo": "Mal menor",
          "descripcion": "ataque de 3 zombis, zancadilleas al jugador elegido cae y recibe un punto de daño el resto se enfrentan a los zombis",
          "tipo": 0
        },
        {
          "id": "manos_de_trapo",
          "titulo": "Manos de trapo",
          "descripcion": "Te dije que esta trampa para zombies nos quitaria de problemas, pero activas sin querer el detonador. Tú, el jugador de la derecha y el de tu izquierda recibis 1 punto de daño ",
          "tipo": 1
        },
        {
          "id": "el_elegido",
          "titulo": "El elegido",
          "descripcion": "elige un jugador pone carta bocaabajo y te enfrentas a un zombie si lo matas el recupera carta, si no a la basura",
          "tipo": 1
        },
        {
          "id": "amigo_o_enemigo",
          "titulo": "Amigo o enemigo",
          "descripcion": "Se derrumba el techo una nube de polvo lo cubre todo.No distingues si esas figuras son zombis o tus compañeros. Cada jugador puede enfrentarse a otro jugador como si de zombis se tratasen ",
          "tipo": 0
        },
        {
          "id": "manos_ocupadas",
          "titulo": "Manos ocupadas",
          "descripcion": "El suelo cede bajo tus pies logras agarrarte a una estanteria, alguien te ayuda? el jugador de tu derecha puede mirar en tu mano y quitarte una carta. si lo hace no recibes 1 punto de daño.",
          "tipo": 1
        },
        {
          "id": "emociones_aventuras_no_es_algo_que_anele_un_edi",
          "titulo": "Emociones, aventuras, no es algo que anele un Jedi.",
          "descripcion": "Os sorprende unos zombis hambrientos tu y el superviviente que tu elijas correis hacia una puerta y la cerrais de golpe, el resto se enfrentan a 2 zombies",
          "tipo": 0
        },
        {
          "id": "acero_puro",
          "titulo": "Acero puro",
          "descripcion": "Ves un grupo de zombis, dos estan un poco mas separado que el resto, si matais a 2 sin armas de fuego, todos robais una carta , si no os enfrentais a 4 zombies ",
          "tipo": 0
        },
        {
          "id": "locura_transitoria",
          "titulo": "Locura transitoria",
          "descripcion": "Empiezas a ver zombis donde solo hay humanos haces un punto de daño a un jugador que tu eligas como si de un zombi se tratase",
          "tipo": 1
        },
        {
          "id": "in_extremis",
          "titulo": "In extremis",
          "descripcion": "Unos zombies te persiguen caes al suelo y tu arma se pierde, deja 3 cartas en el centro de la mesa si alguien te pasa una carta de arma. Recuperas las cartas, si no van a la basura y recibes 2 puntos de daño",
          "tipo": 1
        },
        {
          "id": "bocado_apetitoso",
          "titulo": "Bocado apetitoso",
          "descripcion": "Pasas entre un grupo de numeros zombis. 1 se fija en ti no se pueden utilizar armas de fuego para eliminarlo",
          "tipo": 1
        },
        {
          "id": "bofetada",
          "titulo": "Bofetada",
          "descripcion": "Te da un ataque de pánico, gritas como si no hubiera un mañana, caminas fuera de si. Los zombis comienzan ha aparecer el jugador de la derecha roba una carta de tu mano. y te hace 1 punto de daño",
          "tipo": 0
        },
        {
          "id": "donde_estas_ratita",
          "titulo": "Donde estas ratita?",
          "descripcion": "Pensaste que podias amaestrar a esa rata, lo habias visto en mil peliculas, le das un trozito de pan y esta te pega un mordisco que apocas te arranca medio dedo. Recibes 1 pt de daño",
          "tipo": 1
        },
        {
          "id": "todos_a_una",
          "titulo": "Todos a una",
          "descripcion": "Una pesada estanteria esta caida, sospechais que debajo puede haber alguna sorpresa, 2 jugadores se dedican a moverla el resto a vigilar a esos zombis que se estan acercando, tu eliges quien mueve la estanteria y quienes se enfrantan a 2 zombis. Si cumplis la mision todos robais una carta",
          "tipo": 0
        },
        {
          "id": "mientras_duermen",
          "titulo": "Mientras duermen",
          "descripcion": "Te despiertas en mitad de la noche, no puedes parar de pensar en las mochilas de tus compañeros repletas de armas, botiquines , enseña una carta de arma al resto y coge una carta del mazo del jugador de tu elección. Has echo ruido y te enfentas a 1 zombi ",
          "tipo": 1
        },
        {
          "id": "mas_solo_que_la_una",
          "titulo": "Mas solo que la una",
          "descripcion": "Un zombie se acerca y te ha pillado por sorpresa, pides desesperadamente ayuda a un compañero, alguien puede matar 1 zombie por ti, si nadie te ayuda recibes un punto de daño",
          "tipo": 1
        },
        {
          "id": "bollitos_para_desayunar",
          "titulo": "Bollitos para desayunar",
          "descripcion": "Sabes que los bollitos que guardas en tu mochila esta en muy mal estado, se los ofreces a un jugador este recibe 1 pt de daño",
          "tipo": 1
        }
      ]
    };

    //var juego = { numerJugadores: 4 };

    // Put your global variables into this object
    __exports__["default"] = global;
  });
define("main",
  ["utils/analytics","scenes/boot","scenes/preload","scenes/menu","scenes/setupNumeros","scenes/numeroJugador","scenes/setupEscenario","scenes/setupSuperviviente","scenes/game","scenes/initJuego","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __dependency7__, __dependency8__, __dependency9__, __dependency10__, __exports__) {
    "use strict";

    var Analytics = __dependency1__["default"];
    var Boot = __dependency2__["default"];
    var Preload = __dependency3__["default"];
    var Menu = __dependency4__["default"];
    var Numeros = __dependency5__["default"];
    var Jugador = __dependency6__["default"];
    var Escenario = __dependency7__["default"];
    var Superviviente = __dependency8__["default"];
    var Game = __dependency9__["default"];
    var InitJuego = __dependency10__["default"];
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
      game.state.add('setupNumeros', Numeros);
      game.state.add('numeroJugador', Jugador);
      game.state.add('setupEscenario', Escenario);
      game.state.add('setupSuperviviente', Superviviente);
      game.state.add('game', Game);
      game.state.add('initJuego', InitJuego);


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
define("prefabs/gestionarTiempo",
  ["prefabs/suceso","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Suceso = __dependency1__["default"];
    var times;

    function GestionarTiempo(game) {
      this.individualColectivo = 0;
      this.roboCarta = 1;
      Phaser.Time.call(this, game);
    }

    GestionarTiempo.prototype = Object.create(Phaser.Time.prototype);
    GestionarTiempo.prototype.constructor = GestionarTiempo;

    GestionarTiempo.prototype.add = function (time) {
      var aleatorio = game.rnd.integerInRange(500, time);
      times  = game.time.events.loop(aleatorio, terminado, this, 1);
    };

    GestionarTiempo.prototype.sucesoIndiviudal = function () {
      times  = game.time.events.loop(0, terminado, this, 1);
    };

    GestionarTiempo.prototype.remove = function () {
      game.time.events.remove(times);
    };

    GestionarTiempo.prototype.tenerSuerte = function () {
      this.roboCarta = game.rnd.integerInRange(0, 1);
      if (this.roboCarta === 0) {
        this.individualColectivo = 1;
        this.roboCarta = 0;
      } else {
        this.individualColectivo = 1;
        this.roboCarta = 1;
      }
      this.sucesoIndiviudal(0);
    };

    function terminado() {
      this.remove();
      var that = this;
      console.log('terminado: ', this.individualColectivo, this.roboCarta);
      var suceso = new Suceso(game, this.individualColectivo, this.roboCarta);
      suceso.onClose = function () {
        that.add(240000);
        that.individualColectivo = 0;
        that.roboCarta = 1;
      };
    }


    __exports__["default"] = GestionarTiempo;
  });
define("prefabs/suceso",
  ["global","utils/mediaCordova","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Juego = __dependency1__["default"];
    var MediaCordova = __dependency2__["default"];

    var text, textDescripcion, group, sosAudioAssets, sosAudio;

    function Suceso(game, individalColectivo, roboCarta) {
      var cartaObjeto = this.obtenerCarta(individalColectivo, roboCarta);
      sosAudioAssets = game.add.audio('sos');
      sosAudio = new MediaCordova(sosAudioAssets);
      if (individalColectivo === 0) {
        sosAudio.play();
      }

      var style = { font: "46px eurostileregular", fill: '#fff', fontSize: '50px', align: "center" };
      var styleDescripcion = { font: "30px eurostileregular", fill: '#fff', fontSize: '25px', align: "center" };

      group = Phaser.Group.call(this, game);

      var  sprite = this.create(-465, 0, 'individual');
      sprite.anchor.setTo(0, 0);


      var cerrar = this.create(0, 45, 'cerrar');
      cerrar.inputEnabled = true;
      cerrar.events.onInputDown.add(interroganteBotonSuperviviente, this);


      text = game.add.text(-465, 55, cartaObjeto.titulo + ': ' + cartaObjeto.tipo, style);

      textDescripcion = game.add.text(-400, 220, cartaObjeto.descripcion, styleDescripcion);
      textDescripcion.wordWrap = true;
      textDescripcion.align = 'left';
      textDescripcion.wordWrapWidth =  800;

      tweenEscenario(this, 465, 300);
      tweenEscenario(cerrar, 400, 100);
      // tweenEscenario(imagen, 50, 100);
      tweenEscenario(text, 105, 300);
      tweenEscenario(textDescripcion, 100, 300);
      // tweenEscenario(cerrar, 865);
    }

    function tweenEscenario(obj, coord, vel) {
      var tweenContendero = game.add.tween(obj);
      tweenContendero.to({x : coord }, vel, Phaser.Easing.Linear.None);
      tweenContendero.start();
    }

    function interroganteBotonSuperviviente() {
      this.destroy();
      textDescripcion.destroy();
      text.destroy();
      this.onClose();
    }


    Suceso.prototype = Object.create(Phaser.Group.prototype);
    Suceso.prototype.constructor = Suceso;

    Suceso.prototype.obtenerCarta = function (individualColectivo, roboCarta) {
      var cartas = [];
      if (roboCarta === 0) {
        return Juego.sucesos[0];
      }
      for (var i = Juego.sucesos.length - 1; i >= 0; i--) {
        if (Juego.sucesos[i].tipo === individualColectivo) {
          cartas.push(Juego.sucesos[i]);
        }
      }
      var id = game.rnd.integerInRange(1, cartas.length);
      return cartas[id];
    };

    __exports__["default"] = Suceso;
  });
define("prefabs/superviviente",
  ["global","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Juego = __dependency1__["default"];

    var supervivientesObj = Juego.supervivientes[0];
    var titulo, subtitulo, textDescripcion, cartas, group, imagen, burlar, dañar, curar, comunes, habilidad;
    var juego = Juego.juego;


    function Superviviente(game, objeto) {
      // var style = { font: "46px Avalon", fill: '#fff', fontSize: '50px', align: "center" };
      var tituloStyle = {font: '50px curlyjoeregular', fill: '#ffffff', align: 'left'};
      var habilidadStyle = { font: "45px curlyjoeregular", fill: '#fff', fontSize: '25px', align: "center" };
      var styleSubtitulo = { font: "18px eurostileregular", fill: '#fff', fontSize: '25px', align: "center" };

      group = Phaser.Group.call(this, game);
      var cartasDatos = supervivientesObj[objeto].cartas[0];

      // var cerrar = this.create(0, 45, 'cerrar');
      // cerrar.inputEnabled = true;
      // cerrar.events.onInputDown.add(interroganteBotonSuperviviente, this);
      //cerrar.anchor.setTo(0, 0);

      imagen = game.add.image(5, 50, juego.superviviente);
      titulo = game.add.text(260, 58, supervivientesObj[objeto].titulo, tituloStyle);
      titulo.anchor.setTo(0, 0);

      subtitulo = game.add.text(titulo.x + 100, titulo.y + 32, supervivientesObj[objeto].subtitulo, styleSubtitulo);
      cartas = game.add.image(imagen.x + 350, imagen.y + 180, 'cartas');
      cartas.anchor.setTo(0, 0);

      burlar = game.add.text(cartas.x + 22, cartas.y + 25, cartasDatos.burlar, styleSubtitulo);
      burlar.anchor.setTo(0.5);

      curar = game.add.text(cartas.x + 75, cartas.y + 100, cartasDatos.curar, styleSubtitulo);
      curar.anchor.setTo(0.5);

      dañar = game.add.text(cartas.x + 76, cartas.y + 189, cartasDatos.dañar, styleSubtitulo);
      dañar.anchor.setTo(0.5);

      comunes = game.add.text(cartas.x + 21, cartas.y + 260, cartasDatos.comunes, styleSubtitulo);
      comunes.anchor.setTo(0.5);

      habilidad = game.add.text(cartas.x + 260, cartas.y + 30, supervivientesObj[objeto].habilidad, habilidadStyle);



      textDescripcion = game.add.text(-400, 220, supervivientesObj[objeto].descripcion, habilidadStyle);
      textDescripcion.wordWrap = true;
      textDescripcion.align = 'left';
      textDescripcion.wordWrapWidth =  340;

      // imagen.scale.setTo(1, 1.5);
      imagen.anchor.setTo(0, 0);

      // tweenEscenario(this, 465, 300);
      // tweenEscenario(cerrar, 400, 100);
      // tweenEscenario(imagen, 50, 200);
      // tweenEscenario(text, 105, 300);
      // tweenEscenario(textDescripcion, 100, 300);
      // tweenEscenario(cerrar, 865);
    }

    // function tweenEscenario(obj, coord, vel) {
    //   var tweenContendero = game.add.tween(obj);
    //   tweenContendero.to({x : coord }, vel, Phaser.Easing.Linear.None);
    //   tweenContendero.start();
    // }

    // function interroganteBotonSuperviviente() {
    //   this.destroy();
    //   textDescripcion.destroy();
    //   text.destroy();
    // }

    Superviviente.prototype = Object.create(Phaser.Group.prototype);
    Superviviente.prototype.constructor = Superviviente;


    __exports__["default"] = Superviviente;
  });
define("prefabs/vidas",
  ["utils/mediaCordova","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var MediaCordova = __dependency1__["default"];

    var group, fondoVidas, vidaMas, vidaMenos, vidaNumeros, bellAudioAssets, bellAudio, malAudioAssets, malAudio;

    function Vidas(game) {
      bellAudioAssets = game.add.audio('bell');
      bellAudio = new MediaCordova(bellAudioAssets);

      malAudioAssets = game.add.audio('mal');
      malAudio = new MediaCordova(malAudioAssets);

      group = Phaser.Group.call(this, game);
      vidaMas = game.add.button(game.world.centerX + 430, 126, 'vidaMas');
      vidaMas.events.onInputDown.add(addVida, this);
      vidaMas.anchor.setTo(0.5);
      //vidaMas = game.add.button(game.world.centerX + 430, 126, 'vidaMas', addVida, this);

      vidaMenos = game.add.button(game.world.centerX + 185, 126, 'vidaMenos');
      vidaMenos.events.onInputDown.add(rmVida, this);
      vidaMenos.anchor.setTo(0.5);

      fondoVidas = this.create(game.world.centerX + 150, 55, 'fondoVidas');
      fondoVidas.anchor.setTo(0, 0);

      vidaNumeros = game.add.sprite(game.world.centerX + 250, 85, 'vidaNumeros');
      vidaNumeros.anchor.setTo(0, 0);
      vidaNumeros.frame = 5;
      vidaNumeros.numeroFrames = vidaNumeros.animations._frameData._frames.length - 1;
    }

    function addVida() {
      vidaNumeros.frame =  vidaNumeros.frame + 1;
      vidaMenos.alpha = 1;
      vidaMenos.input.enabled = true;
      if (vidaNumeros.frame === vidaNumeros.numeroFrames) {
        vidaMas.alpha = 0.1;
        vidaMas.input.enabled = false;
        vidaNumeros.frame = vidaNumeros.numeroFrames;
      }
      console.log(bellAudio);
      bellAudio.play();
    }

    function rmVida() {
      vidaNumeros.frame =  vidaNumeros.frame - 1;
      vidaMas.alpha = 1;
      vidaMas.input.enabled = true;
      if (vidaNumeros.frame === 0) {
        vidaMenos.alpha = 0.1;
        vidaMenos.input.enabled = false;
        vidaNumeros.frame = 0;
      }
      malAudio.play();
    }

    Vidas.prototype = Object.create(Phaser.Group.prototype);
    Vidas.prototype.constructor = Vidas;

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
      //this.game.scale.stopFullScreen();

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

    var text;
    var juego = Juego.juego;
    Game.prototype.create = function () {

      var style = { font: "46px eurostileregular", fill: '#fff', fontSize: '50px', align: "center" };
      text = game.add.text(250, 420, "Superviviente: " + juego.superviviente, style);
      text = game.add.text(250, 460, "Número de jugadores: " + juego.numeroJugadores, style);
      text = game.add.text(250, 500, "Eres el Jugador: " + juego.jugadorNumero, style);
      text = game.add.text(250, 540, "Escenario: " + juego.escenario, style);

      var siguiente = this.add.button(this.game.world.centerX + 310, game.world.centerY + 220, 'siguiente', this.startGame, this);
      siguiente.anchor.setTo(0.5);

    };

    Game.prototype.startGame = function () {
      this.game.state.start('initJuego', true, false);
    };

    __exports__["default"] = Game;
  });
define("scenes/initJuego",
  ["global","prefabs/gestionarTiempo","prefabs/vidas","prefabs/superviviente","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Juego = __dependency1__["default"];
    var GestionarTiempo = __dependency2__["default"];
    var Vidas = __dependency3__["default"];
    var Superviviente = __dependency4__["default"];

    var tiempo, textura, vidas, superviviente;
    var juego = Juego.juego;

    function InitJuego() {}

    InitJuego.prototype.create = function () {
      textura = this.add.sprite(0, 0, 'fondoJuego');
      var siguiente = this.add.button(this.game.world.centerX + 250, game.world.centerY + 250, 'siguiente', startGame, this);
      siguiente.anchor.setTo(0.5);

      superviviente = new Superviviente(game, juego.superviviente);

      vidas =  new Vidas(game);

      tiempo = new GestionarTiempo();
      tiempo.add(240000);
    };

    function startGame() {
      tiempo.remove();
      tiempo = new GestionarTiempo();
      tiempo.tenerSuerte(0);
    }

    __exports__["default"] = InitJuego;
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
      blopAudio.play();
      // this.game.state.start('initJuego', true, false);
      this.game.state.start('setupNumeros', true, false);
    };



    __exports__["default"] = Menu;
  });
define("scenes/numeroJugador",
  ["global","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Juego = __dependency1__["default"];

    function numeroJugador() {}

    var siguiente;
    var grupoJugador;
    var textura;
    var text;

    numeroJugador.prototype.create = function () {
      textura = this.add.sprite(0, 0, 'textura');
      var style = { font: "52px eurostileregular", fill: '#fff', fontSize: '50px', align: "center" };
      text = game.add.text(170, 130, "¿Qué número de jugador eres?", style);
      // jugadores =  this.game.add.image(this.game.world.centerX, 100, 'numeroJugadores');
      // jugadores.anchor.setTo(0.5, 0.5);
      grupoJugador = game.add.group();

      var item;
      for (var i = 0; i < 4; i++) {
        item = grupoJugador.create(200 + 168 * i, game.world.centerX - 200, 'numeros', i);
        item.inputEnabled = true;
        item.input.start(0, true);
        item.events.onInputDown.add(this.select, {valor: i});
        grupoJugador.getAt(i).alpha = 0.9;
      }
      siguiente = this.add.button(this.game.world.centerX + 310, game.world.centerY + 220, 'siguiente', this.startGame, this);
      siguiente.anchor.setTo(0.5);
    };

    numeroJugador.prototype.select = function (item) {
      grupoJugador.forEach(function (losOtrosItems) {
        losOtrosItems.alpha = 0.5;
      });
      item.alpha = 1;
      Juego.juego.jugadorNumero = this.valor;
    };

    numeroJugador.prototype.startGame = function () {
      this.game.state.start('setupEscenario', true, false);
    };


    __exports__["default"] = numeroJugador;
  });
define("scenes/preload",
  ["global","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Juego = __dependency1__["default"];

    var supervivientesObj = Juego.supervivientes[0],
        supervivientes = [];

    function Preload() {
      this.loadingSprite = null;
    }

    Preload.prototype.preload = function () {
      var that = this;
      this.loadingSprite = this.add.sprite(320, 480, 'preloader');
      this.loadingSprite.anchor.setTo(0.5, 0.5);

      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.setPreloadSprite(this.loadingSprite);

      var supervivientesKey = Object.keys(supervivientesObj);

      for (var i = supervivientesKey.length - 1; i >= 0; i--) {
        supervivientes.push(supervivientesKey[i]);
      }
      supervivientes.forEach(function (item) {
        that.load.image(item, 'assets/supervivientes/' + item + '.png');
      });

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
      this.load.image('individual', 'assets/individual.png');
      this.load.image('empezar', 'assets/empezar.png');

      //Juego Ui
      this.load.image('fondoJuego', 'assets/juegoUi/fondo-superviviente.png');

      //Vida Ui
      this.load.image('fondoVidas', 'assets/juegoUi/fondo-vidas.png');
      this.load.image('vidaMenos', 'assets/juegoUi/vidas-menos.png');
      this.load.image('vidaMas', 'assets/juegoUi/vidas-mas.png');
      this.load.image('cartas', 'assets/juegoUi/cartas.png');
      this.load.spritesheet('vidaNumeros', 'assets/juegoUi/vidas-numeros.png', 121, 90, 21);


      //Sonido
      this.load.audio('blop', 'assets/audio/blop.mp3');
      this.load.audio('sos', 'assets/audio/sos.mp3');
      this.load.audio('bell', 'assets/audio/bell.mp3');
      this.load.audio('mal', 'assets/audio/mal.mp3');

      this.load.spritesheet('button-start', 'assets/botones.png', 371, 100);
      this.load.spritesheet('numeros', 'assets/botones_numero.png', 94, 92);
    };

    Preload.prototype.create = function () {
    };

    Preload.prototype.onLoadComplete = function () {
      this.game.state.start('initJuego', true, false);
      // this.game.state.start('menu', true, false);
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
        tweenContendero,
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
          console.log(contenedor);
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
      this.game.state.start('setupSuperviviente', true, false);
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
      this.game.state.start('numeroJugador', true, false);
    };


    __exports__["default"] = SetupNumeros;
  });
define("scenes/setupSuperviviente",
  ["global","prefabs/superviviente","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Juego = __dependency1__["default"];
    var Superviviente = __dependency2__["default"];

    function setupSuperviviente() {}
    var textura,
        espacioSupervivientes = 0,
        contenedor,
        botonDerecha,
        tweenContendero,
        supervivientesObj = Juego.supervivientes[0],
        supervivientes = [],
        superviviente,
        siguiente;

    setupSuperviviente.prototype.create = function () {
      textura = this.add.sprite(0, 0, 'textura');
      var style = { font: "26px eurostileregular", fill: '#fff', fontSize: '50px', align: "center" };
      var that = this;
      contenedor = game.add.sprite(100, 0, null);
      var supervivientesKey = Object.keys(supervivientesObj);

      for (var i = supervivientesKey.length - 1; i >= 0; i--) {
        supervivientes.push(supervivientesKey[i]);
      }
      supervivientes.forEach(function (item, index) {
          if (index !== 0) {
            espacioSupervivientes = espacioSupervivientes + 450;
          }
          contenedor.seccion = game.add.sprite((game.world.centerX - espacioSupervivientes) + 150, game.world.centerY, 'seccionMini');
          contenedor.seccion.anchor.setTo(0.5);
          contenedor.addChild(contenedor.seccion);

          // contenedor.superviviente = game.add.sprite((game.world.centerX - espacioSupervivientes) + 150, game.world.centerY - 60, supervivientesObj[item].id);
          // contenedor.superviviente.scale.setTo(-0.9, -0.9);
          // contenedor.superviviente.anchor.setTo(0.5);
          // contenedor.addChild(contenedor.superviviente);

          var tituloSuperviviente = supervivientesObj[item].titulo;
          contenedor.texto = game.add.text((game.world.centerX - espacioSupervivientes) + 10, game.world.centerY + 70, tituloSuperviviente, style);
          contenedor.addChild(contenedor.texto);

          contenedor.interrogante = game.add.sprite((game.world.centerX - espacioSupervivientes) + 270, game.world.centerY + 150, 'interrogante');
          contenedor.interrogante.superviviente =  supervivientesObj[item].id;
          contenedor.interrogante.inputEnabled = true;
          contenedor.interrogante.events.onInputDown.add(that.interroganteBoton, this);
          contenedor.interrogante.anchor.setTo(0.5);
          contenedor.addChild(contenedor.interrogante);

          contenedor.seleccion = game.add.sprite((game.world.centerX - espacioSupervivientes) + 50, game.world.centerY + 150, 'interrogante');
          contenedor.seleccion.superviviente = supervivientesObj[item].id;
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

    setupSuperviviente.prototype.interroganteBoton = function (conteexto) {
      superviviente = new Superviviente(game, conteexto.superviviente);
    };

    setupSuperviviente.prototype.seleccionBoton = function (conteexto) {
      contenedor.children.forEach(function (losOtrosItems) {
        losOtrosItems.alpha = 1;
      });
      conteexto.alpha = 0.5;
      Juego.juego.superviviente = conteexto.superviviente;
    };

    setupSuperviviente.prototype.itemDeDerecha = function () {
      tweenContendero = game.add.tween(contenedor);
      tweenContendero.to({x: 590}, 1000, Phaser.Easing.Linear.None);
      tweenContendero.start();
    };

    setupSuperviviente.prototype.startGame = function () {
      this.game.state.start('game', true, false);
    };


    __exports__["default"] = setupSuperviviente;
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
        if (game.device.iOS) {
          this.src = 'assets/audio/' + sound.key + '.mp3';
        } else if (game.device.android) {
          this.src = '/android_asset/www/assets/audio/' + sound.key + '.mp3';
          console.log(this.src);
        } else {
          this.src = this.sound._sound.currentSrc;
        }
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