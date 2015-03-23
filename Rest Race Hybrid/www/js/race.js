$("#page_race").on("pageshow", onPageShow);

function onPageShow(e,data) {
	$("#titel").text("Race " + getUrlParameter("id"));
}

$(document).ready(function() {
	displayWaypoints();
});

function displayWaypoints() {
	var allWaypoints = [
		{"_id":"1", "name":"Waypoint 1"}, 
		{"_id":"2", "name":"Waypoint 2"}, 
		{"_id":"3", "name":"Waypoint 3"}, 
		{"_id":"4", "name":"Waypoint 4"}, 
		{"_id":"5", "name":"Waypoint 5"}
	];
	
	var waypoints = "";
	for(var i = 0; i < allWaypoints.length; i++) {
		waypoints += "<li id=" + allWaypoints[i]._id + " class='waypoint' rel='external'>" + allWaypoints[i].name + "</li>";
	}
	$("#waypoints").append(waypoints).listview().listview("refresh");
	
	$(".waypoint").on("tap", function() {
		//window.location = "waypoint.html?id=" + $(this).attr("id");
	});
}
		