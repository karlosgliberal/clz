var global = window['colapso'] = {
  juego: {
    numeroJugadores : 4,
    escenario: ''
  },
  escenarios: [
    {id: 'edificio', titulo: 'El edificio', descripcion: 'Teneis que sobrevivir por lo menos dos jugadores, durante 20 minutos, para que os rescaten (solo a dos)'},
    {id: 'supermercado', titulo: 'El supermercado', descripcion: 'Solo uno sobrevivira en el supermercado, pero solo con ayuda agantarás hata el final'}
  ]
};

//var juego = { numerJugadores: 4 };

// Put your global variables into this object
export default global;
