describe('tictactoe', function() {
    var board = null;
    beforeEach(function() {
        board = Board.newBoard();
    });
    it('should get draw when all spaces are filled', function() {
        // must be a cat's game
        board.markAll('XOOOXXXXO');
        expect(board.status()).toEqual(Board.CATS_GAME);
    });
    it('should get winner X when a row is filled with X\'s', function() {
        board.markAll('XXX------');
        expect(board.status()).toEqual(Board.WINNER_X);
    });
    it('should get winner O when a column is filled with O\'s', function() {
        board.markAll('O--O--O--');
        expect(board.status()).toEqual(Board.WINNER_O);
    });
    it('should get winner X when left diagonal is filled with X\'s', function() {
        board.markAll('X---X---X');
        expect(board.status()).toEqual(Board.WINNER_X);
    });
    it('should get winner O when right diagonal is filled with O\'s', function() {
        board.markAll('--O-O-O--');
        expect(board.status()).toEqual(Board.WINNER_O);
    });
    it('should not get win or draw when game not over', function() {
        board.markAll('X-O----');
        expect(board.status()).toBeNull();
    });
});
