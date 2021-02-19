'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $("#yes").css('background-color', 'white');
    $("#yes").css('color', 'black');
    $("#no").css('background-color', 'white');
    $("#no").css('color', 'black');
	// your code here
	$("#yes").click(function(e) {
		e.preventDefault();
		$("#yes").css('background-color', 'black');
        $("#yes").css('color', 'white');
        $("#no").css('background-color', 'white');
        $("#no").css('color', 'black');
	});

    $('#no').click(function(e) {
		e.preventDefault();
        $("#no").css('background-color', 'black');
        $("#no").css('color', 'white');
        $("#yes").css('background-color', 'white');
        $("#yes").css('color', 'black');
	});
}