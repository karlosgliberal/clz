
import Analytics from 'utils/analytics';

import Boot from 'scenes/boot';
import Preload from 'scenes/preload';
import Menu from 'scenes/menu';
import Game from 'scenes/game';
import Numeros from 'scenes/setupNumeros';
import Escenario from 'scenes/setupEscenario';


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

export default App;
