// ----------------------------------------
// Controller
// ----------------------------------------

// debugger;
var JC = JC || {};

JC.controller = ( function( JC ) {

  var _handleClick = function( index ) {
    JC.model.processSquareClick( index );
  };

  var _gameLoop = function() {
    setInterval( function( ){
      JC.model.activateRandomSquare();
      var score = JC.model.getScore();
      var squares = JC.model.getSquares();
      JC.view.updateScore(score);
      JC.view.updateSquares(squares);
    }, 1000);
  };

  var init = function() {
    // debugger;
    JC.view.init( _handleClick );
    _gameLoop();
  };

  return {
    init: init,
  };

})( JC );


