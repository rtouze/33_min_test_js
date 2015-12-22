;
(function (global) {
    'use strict';
    function BowlingGame() {
    }

    BowlingGame.prototype.roll = function(pinsHit) {

    };

    BowlingGame.prototype.getScore  = function() {
        return 0;
    };

    global.bowling = { BowlingGame: BowlingGame };
})(window);
