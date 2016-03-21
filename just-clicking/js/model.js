// ----------------------------------------
// Model
// ----------------------------------------

var JC = JC || {};

JC.model = (function() {

  var _score = 0;
  var _squares = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  var getScore = function() {
    return _score;
  };

  var getSquares = function() {
    var squaresCopy = _squares.slice();
    return squaresCopy;
    // return squaresCopy.filter( function(elt){
    //   return elt === 1;
    // });
  };

  var activateRandomSquare = function() {
    var indexes = [];
    for (var i = 0; i < _squares.length;i++ ){
      if( _squares[i] === 0 ) {
        indexes.push(i);
      }
    }

    if (indexes.length === 0) {
      return
    } else {
      return _.shuffle(indexes)[0];
    }
  };

  var processSquareClick = function(index) {
    if( _squares[index] === 1) {
      _score += 10;
    }
  };


  return {
    getScore: getScore,
    getSquares: getSquares,
    activateRandomSquare: activateRandomSquare,
    processSquareClick: processSquareClick,
  };

})();
