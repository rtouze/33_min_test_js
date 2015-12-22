describe('Bowling game', function () {
    var game = null;

    beforeEach(function () {
        game = new bowling.BowlingGame();
    });

    it('should return a score of 0 if no pin hit', function () {
        for (var i = 0; i < 20; i++ ) {
            game.roll(0);
        }
        expect(game.getScore()).toEqual(0);
    });

    it('should return 60 when always hit 3 pins', function () {
        for (var i = 0; i < 20; i++ ) {
            game.roll(3);
        }
        expect(game.getScore()).toEqual(60);
    });
});

