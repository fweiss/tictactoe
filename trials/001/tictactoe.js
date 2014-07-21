var Game = function() {


    var Board = {
        CATS_GAME: 'cats game',
        WINNER_O: 'winner O',
        WINNER_X: 'winner X',
        newBoard: function() {
            var spaces = ['-', '-', '-', '-', '-', '-', '-', '-', '-' ];
            var rules = [
                { status: Board.CATS_GAME, rule: function () {
                        for (var i = 0; i < 9; i++) {
                            if (spaces[i] == '-') {
                                return false;
                            }
                        }
                        return true;
                    }
                },
                { status: Board.WINNER_O, rule: function() {
                        return isWinner('O');
                    }
                },
                { status: Board.WINNER_X, rule: function() {
                    return isWinner('X');
                }}
            ];
            return {
                markAll: function(marks) {
                     spaces = marks.split('');
                },
                status: function() {
                    for (var i=0; i<rules.length; i++) {
                        if (rules[i].rule()) {
                            return rules[i].status;
                        }
                    }
                    return null;
                 }
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
                right = 0;
                for (var i=0; i<3; i++) {
                    if (spaces[i * 3 + i] == mark) {
                        left++;
                    }
                    if (spaces[i * 3 +2 - i] == mark) {
                        right++;
                    }
                }
                return left == 3 || right == 3;
            }
        }
    };

    return {
        Board: Board
    };
}();
