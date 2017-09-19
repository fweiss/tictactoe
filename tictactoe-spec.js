describe('Tic Tac Toe Kata', function() {
    var board = null;
    beforeEach(function() {
        board = Board.newBoard();
    });
    it('should get winner X when all fields in a column are X', function() {
        board.setAll('X--X--X--');
        expect(board.getStatus()).toEqual(Board.WINNER_X);
        board.setAll('-X--X--X-');
        expect(board.getStatus()).toEqual(Board.WINNER_X);
        board.setAll('--X--X--X');
        expect(board.getStatus()).toEqual(Board.WINNER_X);
    });
    it('should get winner O when all fields in a row ar O', function() {
        board.setAll('OOO------');
        expect(board.getStatus()).toEqual(Board.WINNER_O);
        board.setAll('---OOO---');
        expect(board.getStatus()).toEqual(Board.WINNER_O);
        board.setAll('------OOO');
        expect(board.getStatus()).toEqual(Board.WINNER_O);
    });
    it('should get winner X when left diagonal is X', function() {
        board.setAll('X---X---X');
        expect(board.getStatus()).toEqual(Board.WINNER_X);
    });
    it('should get winner O when right diagonal is O', function() {
        board.setAll('--O-O-O--');
        expect(board.getStatus()).toEqual(Board.WINNER_O);
    });
    it('should get draw when all spaces are taken', function() {
        board.setAll('XOOOXXXXO');
        expect(board.getStatus()).toEqual(Board.DRAW);
    });
});