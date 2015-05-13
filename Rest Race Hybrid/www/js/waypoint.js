$(document).ready(function() {
	
	alert("Device:  " + window.device.platform);
	
	var allRaces = JSON.parse(sessionStorage.getItem("allRaces"));
	var race = $.grep(allRaces, function(e){ return e._id == getUrlParameter("idRace"); })[0];
	var waypoint = $.grep(race.locations, function(e){ return e.location._id == getUrlParameter("idWaypoint"); })[0];
	
	$("#naam").text(waypoint.location.name);
	if (waypoint.location.description != null) {
		$("#omschrijving").append("<b>Omschrijving:</b><br /><span>" + waypoint.location.description + "</span>");
	}
	
	$("#link_toonOpKaart").on("tap", function() {
		if (device.platform == "Android") {
			window.location = "geo:" + waypoint.location.lat + "," + waypoint.location.long; // Android
		}
		else if (device.platform == "iOS") {
			window.location = "maps://maps.google.com/maps?daddr=" + waypoint.location.lat + "," + waypoint.location.long; // iOS
		} 
		else {
			window.location = "http://maps.google.com/maps?daddr=" + waypoint.location.lat + "," + waypoint.location.long;
		}
	});
		
});	

$("#page_waypoint").on("swiperight", function(event){
	history.back();
});

