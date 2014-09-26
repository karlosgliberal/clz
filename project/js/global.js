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
export default global;
