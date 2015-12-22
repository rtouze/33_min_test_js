describe('Bowling game', function () {
    it('should return a score of 0 if no pin hit', function () {
        var game = new bowling.BowlingGame();
        for (var i = 0; i < 20; i++ ) {
            game.roll(0);
        }
        expect(game.getScore()).toEqual(0);
    });
});

