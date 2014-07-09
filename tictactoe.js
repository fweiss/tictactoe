Board = {
    CATS_GAME: 'cat\'s game',
    WINNER_X: 'winner X',
    WINNER_O: 'winner O',
    newBoard: function() {
        var spaces = ['-', '-', '-', '-', '-', '-', '-', '-', '-' ];
        return {
            markAll: function(marks) {
                spaces = marks.split('');
            },
            status: function() {
                if (checkCatsGame()) {
                    return Board.CATS_GAME;
                } else if(isWinner('X')) {
                    return Board.WINNER_X;
                } else if(isWinner('O')) {
                    return Board.WINNER_O;
                } else {
                    return null;
                }
            }
        };
        function checkCatsGame() {
            for (var i=0; i<9; i++) {
                if (spaces[i] == '-') {
                    return false;
                }
            }
            return true;
        }
        function isWinner(mark) {
            return checkRow(0, mark) || checkRow(1, mark) || checkRow(2, mark)
                || checkColumn(0, mark) || checkColumn(1, mark) || checkColumn(2, mark)
                || checkDiagonals(mark);
        }
        function checkRow(row, mark) {
            var count = 0;
            for (var i=0; i<3; i++) {
                if (spaces[row * 3 + i] == mark) {
                    count++;
                }
            }
            return count == 3;
        }
        function checkColumn(col, mark) {
            var count = 0;
            for (var i=0; i<3; i++) {
                if (spaces[i * 3 + col] == mark) {
                    count++;
                }
            }
            return count == 3;
        }
        function checkDiagonals(mark) {
            var left = 0;
            var right = 0;
            for (var i=0; i<3; i++) {
                if (spaces[i * 3 + i] == mark) {
                    left++;
                }
                if (spaces[i * 3 + 2 - i] == mark) {
                    right++;
                }
            }
            return left == 3 || right == 3;
        }
    }
};

