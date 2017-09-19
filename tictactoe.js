var Board = {
    WINNER_X: 'winner X',
    WINNER_O: 'winner O',
    IN_PROGRESS: 'in progress',
    DRAW: 'draw',
    newBoard: function() {
        var BOARD_BITS = [ 1, 2, 4, 8, 16, 32, 64, 128, 256 ];
        var WINNER_BITS = [ 1+2+4, 8+16+32, 64+128+256, 1+8+64, 2+16+128, 4+32+256, 1+16+256, 4+16+64 ];
        var bits = {
            X: 0,
            Y: 0,
            '-': 0
        };
        function checkWinner(field) {
            for (var i=0; i<WINNER_BITS.length; i++) {
                if (WINNER_BITS[i] == bits[field]) {
                    return true;
                }
            }
            return false;
        }
        return {
            setAll: function(fields) {
                bits['X'] = 0;
                bits['O'] = 0;
                bits['-'] = 0;
                for (var i=0; i<9; i++) {
                    var bit = BOARD_BITS[i];
                    var field = fields.substr(i, 1);
                    bits[field] |= bit;
                }
            },
            getStatus: function() {
                if (bits['-'] == 0) {
                    return Board.DRAW;
                }
                if (checkWinner('X')) {
                    return Board.WINNER_X;
                }
                if (checkWinner('O')) {
                    return Board.WINNER_O
                }
                return Board.IN_PROGRESS;
            }
        };
    }
}