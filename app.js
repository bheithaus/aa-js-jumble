$(window).on('click', function(event) {
	console.log( event.type );    // The event type, eg. "click"
  console.log( event.which );   // The button or key that was pressed.
  console.log( event.target );  // The originating element.
  console.log( event.pageX );   // The document mouse X coordinate.
  console.log( event.pageY );
	event.preventDefault();
	$(this).detach();
});

$("#content").append('<img src="http://upload.wikimedia.org/wikipedia/commons/2/2b/Andy_Warhol_by_Jack_Mitchell.jpg">');

function addElvis () {
  // a little too much Elvis
  $("#content").append('<img src="http://upload.wikimedia.org/wikipedia/en/b/be/Eight_Elvises.jpg">');

  // schedule addElvis to get called again in 1sec
  window.setTimeout(addElvis, 1000);
}

// kick off adding Elvises
addElvis();