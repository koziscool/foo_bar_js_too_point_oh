// ----------------------------------------
// Controller
// ----------------------------------------

var JC = JC || {};

JC.controller = ( function( ) {

  var _handleClick = function( index ) {
    JC.model.processSquareClick( index );
  }

  var gameLoop = function() {
    setInterval( function(){
      JC.model.activateRandomSquare();
      var score = JC.model.getScore();
      var squares = JC.model.getSquares();
      JC.view.updateScore(score);
      JC.view.updateSquares(squares);
    }, 1000);
  }

  var init = function($, _, JC ) {
    // JC.model.init();
    JC.view.init( _handleClick );
    gameLoop();
  };

  return {
    init: init,
  };

})();


