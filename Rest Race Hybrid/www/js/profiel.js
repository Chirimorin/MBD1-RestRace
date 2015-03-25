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

$("#link_wachtwoord_wijzigen").on("tap", function() {
	window.location = "wachtwoordWijzigen.html";
});

$("#menu").on("tap", function() {
	$("#menu").panel( "close" );
});