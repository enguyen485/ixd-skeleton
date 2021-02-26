'use strict';
// const data = require('../../data.json');

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

    document.getElementById("viewrep").style.display = 'none';
    document.getElementById("searchbar").style.width = '90vw';
    document.getElementById("myForm").style.display = "none";

    $('#searchbar').keydown(function (e){
        if(e.keyCode == 13){
            if($('#searchbar').val() == '') {
                document.querySelector("#viewrep").disabled = true;
                console.log("empty");
                document.getElementById("viewrep").style.display = 'none';
                document.getElementById("searchbar").style.width = '90vw';
                document.getElementById("myForm").style.display = "none";
            }
            else {
                document.querySelector("#viewrep").disabled = false;
                console.log("NOT empty");
                document.getElementById("searchbar").style.width = '65vw';
                document.getElementById("viewrep").style.display = 'block';
                var search = $('#searchbar').val();
                var address = search.split(' ').join('%20');
                var newHTML = '<iframe id="gmap_canvas" src="https://maps.google.com/maps?q=' + address + '&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>';
                console.log(newHTML);
                $(".details").html(newHTML);
            }
        }
    })
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
    var found = 'unknown'
    var newHTML = '<p>This feature HAS NOT been implemented yet. There is an <b>' + found + '</b> number of Positive Reports of COVID-19 at this location.</p>';
    $("#myForm").html(newHTML);
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
