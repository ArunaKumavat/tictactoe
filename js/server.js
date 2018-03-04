/**
 * Created by arunakumavat on 19/04/14.
 */
window.ticTacToe = window.ticTacToe || {};

(function(ttt){

    'use strict';

    var Server = function() {
        this.name = 'server';
    };

    Server.prototype.move = function(pos){
        var elem = document.getElementById('position' + pos);
        elem.innerHTML = 'O';
    };

    ttt.Server = Server;
})(window.ticTacToe);