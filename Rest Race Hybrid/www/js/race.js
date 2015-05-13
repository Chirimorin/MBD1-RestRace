var race = "";

$(document).ready(function() {
	var allRaces = JSON.parse(sessionStorage.getItem("allRaces"));
	race = $.grep(allRaces, function(e){ return e._id == getUrlParameter("id"); })[0];
	
	$("#naam").text(race.name);
	
	var start = new Date(race.startTime);
	$("#startTijd").text(	('0' + start.getDate()).slice(-2) + "-" + ('0' + (start.getMonth() + 1)).slice(-2) + "-" + start.getFullYear() + " " + 
							('0' + start.getHours()).slice(-2) + ":" + ('0' + start.getMinutes()).slice(-2));
	
	if (race.endTime != null) {
		var eind = new Date(race.endTime);
		$("#eindTijd").text(('0' + eind.getDate()).slice(-2) + "-" + ('0' + (eind.getMonth() + 1)).slice(-2) + "-" + eind.getFullYear() + " " + 
							('0' + eind.getHours()).slice(-2) + ":" + ('0' + eind.getMinutes()).slice(-2));
	}
	
	displayWaypoints();	
});		

function displayWaypoints() {
	var waypoints = "";
	for(var i = 0; i < race.locations.length; i++) {
		waypoints += 	"<li data-icon='carat-r'><a href='#' id=" + race.locations[i].location._id + " class='waypoint listItem'><span>" + race.locations[i].location.name + "</span>";
		
		for(var j = 0; j < load("visitedWaypoints").length; j++) {
			if(load("visitedWaypoints")[j].location == race.locations[i].location._id) {
				 waypoints += "<span class='status'>Ingecheckt</span></a></li>";
			}
		}
		
		waypoints += "</a></li>"
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
	
	var onSuccess = function(position) {			  
		$.ajax({
			type: "PUT",
			url: restrace + "races/" + race._id + "/location/" + position.coords.latitude + "/" + position.coords.longitude + "?apikey=" + load("authKey"),
			headers: {
				Accept: "application/json"
			},
			dataType: "json",
			success: function(data) {
				if (data.checkedIn) {
					playAudio(getPhoneGapPath() + "sounds/success.mp3");
					alert("U bent ingecheckt.");
				}
				else {
					playAudio(getPhoneGapPath() + "/sounds/failure.mp3");
					//playAudio("/android_asset/www/sounds/failure.mp3");
					alert("U bent niet ingecheckt.");
				}
			}
		});
	};
	
	function onError(error) {
		alert("Geen locatie gevonden.");
	}

	navigator.geolocation.getCurrentPosition(onSuccess, onError);
});

function playAudio(url) {
	var my_media = new Media(url,
		function () {
			alert("playAudio():Audio Success");
		},
		function (err) {
			alert("playAudio():Audio Error: " + err);
		}
	);
	my_media.play();
}

function getPhoneGapPath() {

    var path = window.location.pathname;
    path = path.substr( path, path.length - 10 );
    return 'file://' + path;

};

		