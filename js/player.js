/**
 * Created by arunakumavat on 19/04/14.
 */

window.ticTacToe = window.ticTacToe || {};

(function(ttt){

    'use strict';

    var Player = function() {
        this.name = 'player';
    };

    Player.prototype.move = function(pos){
        var elem = document.getElementById('position' + pos);
            elem.innerHTML = 'X';
    };

    ttt.Player = Player;
})(window.ticTacToe);
