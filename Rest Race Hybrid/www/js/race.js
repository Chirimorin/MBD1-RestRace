$("#page_race").on("pageshow", onPageShow);

function onPageShow(e,data) {
	$("#naam").text("Race " + getUrlParameter("id"));
	$("#omschrijving").append("<p>Omschrijving van de race met het id: " + getUrlParameter("id") + "</p>");
}

$(document).ready(function() {
	displayWaypoints();
});

function displayWaypoints() {
	var race = {
		"id": getUrlParameter("id"),
		"naam": "Race " + getUrlParameter("id"),
		"omschrijving": "Omschrijving van de race met het id: " + getUrlParameter("id"),
		"waypoints": [
			{"_id":"1", "name":"Waypoint 1", "status":"ingecheckt", "ingecheckte_deelnemers":"8"}, 
			{"_id":"2", "name":"Waypoint 2", "status":"", "ingecheckte_deelnemers":"3"}, 
			{"_id":"3", "name":"Waypoint 3", "status":"ingecheckt", "ingecheckte_deelnemers":"10"}, 
			{"_id":"4", "name":"Waypoint 4", "status":"", "ingecheckte_deelnemers":"2"}, 
			{"_id":"5", "name":"Waypoint 5", "status":"", "ingecheckte_deelnemers":"0"}
		],
		"aantal_deelnemers": 13
	};
	var allWaypoints = race.waypoints;
	
	var waypoints = "";
	for(var i = 0; i < allWaypoints.length; i++) {
		waypoints += "<li id=" + allWaypoints[i]._id + " class='waypoint' rel='external'>" + allWaypoints[i].name;
		if (allWaypoints[i].status == "ingecheckt") {
			waypoints += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V";
		}
		waypoints += "<br>" + allWaypoints[i].ingecheckte_deelnemers + "/" + race.aantal_deelnemers + " deelnemers</li>";
	}
	$("#waypoints").append(waypoints).listview().listview("refresh");
	
	$(".waypoint").on("tap", function() {
		window.location = "waypoint.html?id=" + $(this).attr("id");
	});
}
		