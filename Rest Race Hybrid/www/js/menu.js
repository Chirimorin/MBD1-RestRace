var menuPanel = '<div data-role="panel" data-position="left" display="overlay" id="menu"><ul data-role="listview" id="listItems"><li data-icon="star"><a href="#" id="menu_item_races" class="menuItem">Races</a></li><li data-icon="user"><a href="#" id="menu_item_profiel" class="menuItem">Profiel</a></li><li data-icon="gear"><a href="#" id="menu_item_settings" class="menuItem">Settings</a></li><li data-icon="power"><a href="#" id="menu_item_uitloggen" class="menuItem">Uitloggen</a></li></ul></div>';

$(document).one('pagebeforeshow', function () {
	
	// Voegt het menu toe aan de pagina
	$.mobile.pageContainer.prepend(menuPanel);
	$("#menu").panel().enhanceWithin();
	
	$("#menu_item_races").on("tap", function() {
		$.mobile.changePage("#page_races"); // Toont race overzicht pagina
	});

	$("#menu_item_profiel").on("tap", function() {
		$.mobile.changePage("#page_profiel"); // Toont profiel pagina
	});

	$("#menu_item_settings").on("tap", function() {
		$.mobile.changePage("#page_settings"); // Toont settings pagina
	});

	// Logt de gebruiker uit
	$("#menu_item_uitloggen").on("tap", function() {
		save("authKey", "");
		save("nickname", "");
		save("visitedWaypoints", "");
		save("code", "");
		
		sessionStorage.setItem("allRaces", "");
		
		$.mobile.changePage("#page_inloggen", {reverse: true});		
	});

	// Sluit menu als er op wordt geklikt
	$("#menu").on("tap", function() {
		$("#menu").panel("close");
	});
});



