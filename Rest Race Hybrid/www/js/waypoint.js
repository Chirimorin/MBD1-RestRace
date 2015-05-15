var device = "";

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){
	device = window.device.platform;
}

$(document).on("pagebeforeshow", "#page_waypoint", function(){
	
	var allRaces = JSON.parse(sessionStorage.getItem("allRaces"));
	var race = $.grep(allRaces, function(e){ return e._id == load("race_id"); })[0]; // Haalt de goede race uit de opgeslagen races
	var waypoint = $.grep(race.locations, function(e){ return e.location._id == load("waypoint_id"); })[0]; // Haalt het goede waypoint uit de waypoint van de race
	
	$("#naam_waypoint").text(waypoint.location.name);
	if (waypoint.location.description != null && waypoint.location.description != "") {
		$("#omschrijving").append("<b>Omschrijving:</b><br /><span>" + waypoint.location.description + "</span><br /><br />");
	}
	
	// Opent native maps app
	$("#link_toonOpKaart").on("tap", function() {
		if (device == "Android") {
			window.location = "geo:" + waypoint.location.lat + "," + waypoint.location.long; // Android
		}
		else if (device == "iOS") {
			window.location = "maps://maps.google.com/maps?daddr=" + waypoint.location.lat + "," + waypoint.location.long; // iOS
		} 
		else {
			window.location = "http://maps.google.com/maps?daddr=" + waypoint.location.lat + "," + waypoint.location.long; // Default
		}
	});
	
	// Swipe naar de vorige pagina
	$("#page_waypoint").off("swiperight").on("swiperight", function(event){
		history.back();
	});
		
});	


