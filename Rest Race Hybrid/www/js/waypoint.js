$(document).ready(function() {
	var allRaces = JSON.parse(sessionStorage.getItem("allRaces"));
	var race = $.grep(allRaces, function(e){ return e._id == getUrlParameter("idRace"); })[0];
	var waypoint = $.grep(race.locations, function(e){ return e.location._id == getUrlParameter("idWaypoint"); })[0];
	
	$("#naam").text(waypoint.location.name);
	if (waypoint.location.description != null) {
		$("#omschrijving").append("<b>Omschrijving:</b><br /><span>" + waypoint.location.description + "</span>");
	}
	
	$("#link_toonOpKaart").on("tap", function() {
		//window.location = "geo:" + waypoint.location.lat + "," + waypoint.location.long;
		window.open("http://maps.google.com/?q=" + waypoint.location.lat + "," + waypoint.location.long + ",_system"); // Android
		window.open("http://maps.apple.com/?q=" + waypoint.location.lat + "," + waypoint.location.long + "_system"); // iOS
	});
});	

$("#page_waypoint").on("swiperight", function(event){
	history.back();
});

