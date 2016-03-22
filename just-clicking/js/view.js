// ----------------------------------------
// View
// ----------------------------------------

var JC = JC || {};

JC.view = (function( $ ) {

  var $_squares;
  var $_score;

  var makeClickListeners = function( onClick ) {
    $('#game').click('.square', function(e) {
      var $square = $(e.target);
      if ($square.hasClass('active')) {
        $square.removeClass('active');
        var index = parseInt($square.attr('data-id'));
        onClick(index);
      }
    });
  };

  var init = function( onClick ) {
    $_squares = $('.square');
    $_score = $('#score');

    $_squares.each(function(index, element) {
      var $element = $(element);
      $element.attr('data-id', index);
    });
    makeClickListeners( onClick );
  };

  var updateSquares = function(dataSquares) {
    for (var i = 0; i < dataSquares.length; i++) {
      var $square = $_squares.eq(i);
      if (dataSquares[i] === 1) {
        $square.addClass('active');
      } else {
        $square.removeClass('active');
      }
    }
  };

  var updateScore = function(points) {
      $_score.text(points);
  };


  return {
    init: init,
    updateSquares: updateSquares,
    updateScore: updateScore,
  };

})( $ );

