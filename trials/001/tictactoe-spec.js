describe('ticatactoe', function() {
    describe('board', function() {
        var board = null;
        beforeEach(function() {
            board = Game.Board.newBoard();
        });
        it('should give game over when all spaces are filled', function() {
            // must be a cat's game
            board.markAll('XOOOXXXXO');
            expect(board.status()).toEqual(Game.Board.CATS_GAME);
        });
        it('should give game over when row is filled by O\'s', function() {
            board.markAll('OOO------');
            expect(board.status()).toEqual(Game.Board.WINNER_O);
        });
        it('should give game over when column is filled by X\'s', function() {
            board.markAll('X--X--X--');
            expect(board.status()).toEqual(Game.Board.WINNER_X);
        });
        it('should give game over when left diagonal is filled by X\'s', function() {
            board.markAll('X---X---X');
            expect(board.status()).toEqual(Game.Board.WINNER_X);
        });
        it('should give game over when right diagonal is filled by O\'s', function() {
            board.markAll('--O-O-O--');
            expect(board.status()).toEqual(Game.Board.WINNER_O);
        });
    });
});