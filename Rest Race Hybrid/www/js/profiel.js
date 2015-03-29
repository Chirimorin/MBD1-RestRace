$("#page_profiel").on("swiperight", function(event){
    $("#menu").panel("open");
});

$("#page_profiel").on("swipeleft", function(event){
    $("#menu").panel("close");
});

$("#menu_item_races").on("tap", function() {
	window.location = "races.html";
});

$("#menu_item_profiel").on("tap", function() {
	window.location = "profiel.html";
});

$("#menu_item_settings").on("tap", function() {
	window.location = "settings.html";
});

$("#menu_item_uitloggen").on("tap", function() {
	window.location = "index.html";
});

$("#menu").on("tap", function() {
	$("#menu").panel( "close" );
});

$("#link_wachtwoord_wijzigen").on("tap", function() {
	window.location = "wachtwoordWijzigen.html";
});
