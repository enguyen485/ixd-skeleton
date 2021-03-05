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
    // navigation bar
    $('#navbar').each(function(){
        //if statement here 
        // use $(this) to reference the current div in the loop
        //you can try something like...
        var fav = '<a href="favorite"><i id="btn" class="fa fa-heart fa-lg"></i></a>';
        var ser = '<a href="search"><i id="btn" class="fa fa-search fa-lg"></i></a>';
        var prof = '<a href="profile"><i id="btn" class="fa fa-user fa-lg"></i></a>';
        $(this).html(fav+ser+prof);
     });

     // logout button
     $('.logoutbtn').each(function(){
        //if statement here 
        // use $(this) to reference the current div in the loop
        //you can try something like...
        var lgout = '<a href="/"><button id="logout" class="logout"><i class="fa fa-sign-out fa-lg"></i></button></a>'
        $(this).html(lgout);
     });

    $('#yes').click(function(e) {
		e.preventDefault();
        $("#yes").css('background-color', 'grey');
        $("#no").css('background-color', 'black');
	});

    $('#no').click(function(e) {
		e.preventDefault();
        $("#no").css('background-color', 'grey');
        $("#yes").css('background-color', 'black');
	});

    $('#searchbar').keydown(function (e){
        if(e.keyCode == 13){
            if($('#searchbar').val() == '') {
                document.querySelector("#viewrep").disabled = true;
                document.getElementById("viewrep").style.display = 'none';
                document.getElementById("searchbar").style.width = '90vw';
            }
            else {
                document.querySelector("#viewrep").disabled = false;
                document.getElementById("searchbar").style.width = '60vw';
                document.getElementById("viewrep").style.display = 'block';

                // get search results
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
    var loc = $('#searchbar').val()
    $.get("/addReport",{Location: loc}, function (data) {  
        console.log(data);  
    });
    window.location.href = "/report";

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
