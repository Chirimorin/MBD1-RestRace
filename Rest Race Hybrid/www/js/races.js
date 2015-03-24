$(document).ready(function() {
	displayRaces();
});

function displayRaces() {
	var allRaces = [
		{"_id":"1", "name":"Race 1", "aantal_waypoints":"10", "bezochte_waypoints":"2"}, 
		{"_id":"2", "name":"Race 2", "aantal_waypoints":"5", "bezochte_waypoints":"0"}, 
		{"_id":"3", "name":"Race 3", "aantal_waypoints":"12", "bezochte_waypoints":"7"}, 
		{"_id":"4", "name":"Race 4", "aantal_waypoints":"3", "bezochte_waypoints":"3"}, 
		{"_id":"5", "name":"Race 5", "aantal_waypoints":"15", "bezochte_waypoints":"3"}
	];
	
	var races = "";
	for(var i = 0; i < allRaces.length; i++) {
		races += 	"<li data-icon='carat-r'><a href='#' id=" + allRaces[i]._id + " class='race'>" + allRaces[i].name + 
					"<br/ >" + allRaces[i].bezochte_waypoints + "/" + allRaces[i].aantal_waypoints + " waypoints</a></li>";
	}
	$("#races").append(races).listview().listview("refresh");
	
	$(".race").on("tap", function() {
		window.location = "race.html?id=" + $(this).attr("id");
	});
}

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

$("#btn_race_toevoegen").on("tap", function() {
	window.location = "raceToevoegen.html";
});
