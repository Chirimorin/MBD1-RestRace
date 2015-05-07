var race = "";

$(document).ready(function() {
	var allRaces = JSON.parse(sessionStorage.getItem("allRaces"));
	race = $.grep(allRaces, function(e){ return e._id == getUrlParameter("id"); })[0];
	
	$("#naam").text(race.name);
	
	var start = new Date(race.startTime);
	$("#startTijd").text(	('0' + start.getDate()).slice(-2) + "-" + start.getMonth() + 1 + "-" + start.getFullYear() + " " + 
							('0' + start.getHours()).slice(-2) + ":" + ('0' + start.getMinutes()).slice(-2));
	
	if (race.endTime != null) {
		var eind = new Date(race.endTime);
		$("#eindTijd").text(('0' + eind.getDate()).slice(-2) + "-" + eind.getMonth() + 1 + "-" + eind.getFullYear() + " " + 
							('0' + eind.getHours()).slice(-2) + ":" + ('0' + eind.getMinutes()).slice(-2));
	}
	
	displayWaypoints();	
});		

function displayWaypoints() {
	var waypoints = "";
	for(var i = 0; i < race.locations.length; i++) {
		waypoints += 	"<li data-icon='carat-r'><a href='#' id=" + race.locations[i].location._id + " class='waypoint listItem'><span>" + race.locations[i].location.name + "</span>";
		load("visitedWaypoints").indexOf(race.locations[i].location._id) != -1 ? waypoints += "<span class='status'>Ingecheckt</span></a></li>" : waypoints += "</a></li>"
	}
	$("#waypoints").append(waypoints).listview().listview("refresh");
	
	$(".waypoint").on("tap", function() {
		window.location = "waypoint.html?idRace=" + race._id + "&idWaypoint=" + $(this).attr("id");
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
			  'Timestamp: '         + position.timestamp                + '\n');*/
			  
		/*$.ajax({
			type: "PUT",
			url: restrace + "races/" + race._id + "/location/ + position.coords.latitude + "/" + position.coords.longitude",
			headers: {
				Accept: "application/json"
			},
			dataType: "json",
			success: function(data) {
				if (data.checkedIn) {
					toonToast("U bent ingecheckt.");
					playAudio("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
				}
				else {
					toonToast("U bent niet ingecheckt.");
					playAudio("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
				}
			}
		});*/
	/*};
	
	function onError(error) {
		toonToast("Geen locatie gevonden.");
	}*/

	//navigator.geolocation.getCurrentPosition(onSuccess, onError);
	
	toonToast("Test.");
	
	/*alert("Test1");
	playAudio("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
	alert("Test2");*/
});

function playAudio(url) {
    /*var my_media = new Media(url,
		function() { console.log("playAudio():Audio Success"); },
		function(err) { console.log("playAudio():Audio Error: " + err); }
    );*/
	var my_media = new Media(url);
    my_media.play();
}
		