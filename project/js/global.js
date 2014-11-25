var global = window['colapso'] = {
  juego: {
    numeroJugadores : 4,
    jugadorNumero: 1,
    escenario: 'eledificio',
    superviviente: 'kyuzu'
  },
  supervivientes: [
    {
      june: {
        id: 'June',
        titulo: 'June',
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
        titulo: 'Kyuzu',
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
        titulo: 'hennai',
        subtitulo: '¿ah es tu cartera?',
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
        titulo: 'jacco',
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
export default global;
