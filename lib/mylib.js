;
(function (global) {
    'use strict';
    function BowlingGame() {
        this.rolls = [];
    }

    BowlingGame.prototype.roll = function(pinsHit) {
        this.rolls.push(pinsHit);
    };

    BowlingGame.prototype.getScore  = function() {
        var i = 0;
        var score = 0;
        for (i; i < this.rolls.length; i++) {
            score += this.rolls[i];
        }
        return score;
    };

    global.bowling = { BowlingGame: BowlingGame };
})(window);
