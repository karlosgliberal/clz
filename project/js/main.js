
import Analytics from 'utils/analytics';
import Boot from 'scenes/boot';
import Preload from 'scenes/preload';
import Menu from 'scenes/menu';
import Numeros from 'scenes/setupNumeros';
import Jugador from 'scenes/numeroJugador';
import Escenario from 'scenes/setupEscenario';
import Superviviente from 'scenes/setupSuperviviente';
import Game from 'scenes/game';
import InitJuego from 'scenes/initJuego';
var game, App = {};
console.log('delfin');
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

export default App;
