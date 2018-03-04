window.ticTacToe = window.ticTacToe || {};

(function (ttt) {

    'use strict';

    var Board;
    Board = function () {
        this.board = [];
        this.winnerPos = [];
    };

    Board.prototype.fillPosition = function (pos, obj) {
        this.board['Position' + pos] = obj;
        this.winnerPosition(this.board['Position' + pos]);
    };

    Board.prototype.totalfilledPosition = function () {

    };

    Board.prototype.totalemptyPosition = function () {

    };

    Board.prototype.winnerPosition = function (obj) {
        var winning = null;
        if (this.winnerPos.length < 3) {
            this.winnerPos.push(obj.Position);
        } else {
            this.winnerPos = [];
            this.winnerPos.push(obj.Position);
        }

        winning = this.winnerPos.join('');
        if (winning.length >=3 ) {
            var win = this.matchWiningCombination(winning);
            if (win) {
               $('#message').append("<p>" + obj.Player + " Is a Winner </p>");
            }
        }


        console.log(this.winnerPos);
    };

    Board.prototype.matchWiningCombination = function (str) {
        var ary = ['123', '456', '789', '147', '258', '369', '159', '357'];

        for (var i = 0; i <= ary.length; i++) {
            var matches = this.allComBo(str, ary[i]);
            if (matches) {
                return true;
            }
        }

    };

    Board.prototype.allComBo = function (str, ary_str) {
            var count = 0;
            var matches = false;

            console.log(str,ary_str);

            if(count <= str.length) {
               for(var i=0 ; i < ary_str.length; i++){
                   console.log(str.charAt(count),ary_str.charAt(i));
                   if(str.charAt(count) == ary_str.charAt(i)){
                       matches = true;
                       count++;
                   } else {
                       matches = false;
                       count++;
                   }
               }
                return matches;
            }
    };

    ttt.Board = Board;
})(window.ticTacToe);
