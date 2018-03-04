window.ticTacToe = window.ticTacToe || {};

(function (ttt) {

    'use strict';

    var Game = function () {
        this.winner = 0;
        this.tic = 'x';
        this.tac = 'O';
        this.totalPos = 9;
    };

    Game.prototype.init = function () {
        this.player = new ttt.Player();
        this.server = new ttt.Server();
        this.board = new ttt.Board();
        this.eventHandler();
    };

    Game.prototype.eventHandler = function () {
        var frame;
        for (var i = 0; i < this.totalPos; i++) {
            frame = document.getElementById('position' + (i + 1).toString());

            if (frame) {
                // no parenthesis is used for onclick
                frame.addEventListener("click", this.click.bind(this), false);
            }
        }
    };

    Game.prototype.move = function (player, pos) {
        player.move(pos);
        this.board.fillPosition(pos, {Player: player.name , Position:pos});
    };

    Game.prototype.click = function (event) {

        if (event.toElement.id) {
            var id = event.toElement.id.substr(event.toElement.id.length - 1);
            this.move(this.player, id);
        }

    };


    ttt.Game = Game;
})(window.ticTacToe);