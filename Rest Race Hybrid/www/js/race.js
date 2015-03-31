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
		waypoints += "<li data-icon='carat-r'><a href='#' id=" + allWaypoints[i]._id + " class='waypoint listItem'>" + allWaypoints[i].name;
		if (allWaypoints[i].status == "ingecheckt") {
			waypoints += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V";
		}
		waypoints += "<br /><span class='tekst'>" + allWaypoints[i].ingecheckte_deelnemers + "/" + race.aantal_deelnemers + " deelnemers</span></a></li>";
	}
	$("#waypoints").append(waypoints).listview().listview("refresh");
	
	$(".waypoint").on("tap", function() {
		console.log("Test");
		console.log("Id: " + $(this).attr("id"));
		window.location = "waypoint.html?id=" + $(this).attr("id");
	});
}

$("#page_race").on("swiperight", function(event){
    window.location = "races.html";
});

$("#btn_inchecken").on("tap", function(){
	/*var onSuccess = function(position) {
		alert('Latitude: '          + position.coords.latitude          + '\n' +
			  'Longitude: '         + position.coords.longitude         + '\n' +
			  'Altitude: '          + position.coords.altitude          + '\n' +
			  'Accuracy: '          + position.coords.accuracy          + '\n' +
			  'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
			  'Heading: '           + position.coords.heading           + '\n' +
			  'Speed: '             + position.coords.speed             + '\n' +
			  'Timestamp: '         + position.timestamp                + '\n');
	};

	// onError Callback receives a PositionError object
	//
	function onError(error) {
		alert('code: '    + error.code    + '\n' +
			  'message: ' + error.message + '\n');
	}

	navigator.geolocation.getCurrentPosition(onSuccess, onError);*/
	

	alert("1");
	function onSuccess(imageData) {
		//var image = document.getElementById('myImage');
		//image.src = "data:image/jpeg;base64," + imageData;
		alert('Foto');
		
	}

	function onFail(message) {
		alert('Failed because: ' + message);
	}
	alert("2");
	navigator.camera.getPicture(onSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.DATA_URI});
alert("3");
});
		