var menuPanel = '<div data-role="panel" data-position="left" display="overlay" id="menu"><ul data-role="listview" id="listItems" ><li data-icon="star"><a href="#" id="menu_item_races" class="menuItem">Races</a></li><li data-icon="user"><a href="#" id="menu_item_profiel" class="menuItem">Profiel</a></li><li data-icon="gear"><a href="#" id="menu_item_settings" class="menuItem">Settings</a></li><li data-icon="power"><a href="#" id="menu_item_uitloggen" class="menuItem">Uitloggen</a></li></ul></div>';

$(document).one('pagebeforecreate', function () {
	$.mobile.pageContainer.prepend(menuPanel);
	$("#menu").panel().enhanceWithin();
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
		
		$.ajax({
			type: "GET",
			url: restrace + "logout",
			headers: {
				Accept: "application/json"
			},
			success: function() {
				save("authKey", "");
				window.location = "index.html";
			}
		});
		
	});

	$("#menu").on("tap", function() {
		$("#menu").panel("close");
	});
});

$(document).on("swiperight", function(event){
    $("#menu").panel("open");
});


