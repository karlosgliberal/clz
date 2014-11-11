var global = window['colapso'] = {
  juego: {
    numeroJugadores : 4,
    jugadorNumero: 1,
    escenario: 'marine',
    superviviente: 'eledificio'
  },
  supervivientes: [
    {
      marine: {
        id: 'marine',
        titulo: 'Marine',
        descripcion: 'El marine'
      },
      ratero: {
        id: 'ratero',
        titulo: 'ratero',
        descripcion: 'El raterojjk'
      },
      monje: {
        id: 'monje',
        titulo: 'monje',
        descripcion: 'El monje'
      }
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
        "id": "roba_carta",
        "titulo": "Roba carta",
        "descripcion": "Has tenido suerte, puedes robar carta",
        "typo": "robar",
    },
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
export default global;
