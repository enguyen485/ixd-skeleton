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

    if($('#searchbar').val() == '') {
        document.querySelector("#viewrep").disabled = true;
        console.log("empty");
    }
    else {
        document.querySelector("#viewrep").disabled = false;
        console.log("NOT empty");
    }
}


function altertChange() {
    alert("Success! Your password has been updated.");
}

function alertNO() {
    alert("Thank you for notifying us of your negative result.");
}

function alertYES() {
    alert("Thank you for notifying us of your positive result.");
}
