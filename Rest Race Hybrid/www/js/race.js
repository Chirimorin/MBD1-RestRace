var race = "";



displayRaceDetails = function(){

    // Haalt de goede race uit de opgeslagen races
    var allRaces = JSON.parse(sessionStorage.getItem("allRaces"));
    race = $.grep(allRaces, function(e){ return e._id == load("race_id"); })[0];

    $("#naam_race").text(race.name);

    // Geeft de startdatum goed weer
    var start = new Date(race.startTime);
    $("#startTijd").text(	('0' + start.getDate()).slice(-2) + "-" + ('0' + (start.getMonth() + 1)).slice(-2) + "-" + start.getFullYear() + " " +
    ('0' + start.getHours()).slice(-2) + ":" + ('0' + start.getMinutes()).slice(-2));

    // Geeft de einddatum goed weer
    if (race.endTime != null) {
        var eind = new Date(race.endTime);
        $("#eindTijd").text(('0' + eind.getDate()).slice(-2) + "-" + ('0' + (eind.getMonth() + 1)).slice(-2) + "-" + eind.getFullYear() + " " +
        ('0' + eind.getHours()).slice(-2) + ":" + ('0' + eind.getMinutes()).slice(-2));
    }

    // Toont race info pagina van de website
    $("#link_racePagina").on("tap", function() {
        window.location = restrace + "races/" + race._id + "?apikey=" + load("authKey");
    });

    displayWaypoints();

}

//$(document).on("pagebeforeshow", "#page_race", displayRaceDetails);

function displayWaypoints() {
	$("#waypoints").empty();
	
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
		save("waypoint_id", $(this).attr("id"));
		$.mobile.changePage("#page_waypoint"); // Toont waypoint info pagina
	});
}

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){
	$("#btn_inchecken").on("tap", function(){
		
		var onSuccess = function(position) {

			if (checkConnection()) {
					
				// Toont loading spinner
				$.mobile.loading("show", {
					text: msgText,
					textVisible: textVisible,
					theme: theme,
					textonly: textonly,
					html: html
				});
				
				$.ajax({
					type: "PUT",
					url: restrace + "races/" + race._id + "/location/" + position.coords.latitude + "/" + position.coords.longitude + "?apikey=" + load("authKey"),
					headers: {
						Accept: "application/json"
					},
					dataType: "json",
					success: function(data) {
						$.mobile.loading("hide"); // Verbergt loading spinner
						
						if (data.checkedIn) {
							playAudio(getPhoneGapPath() + "sounds/success.mp3");
							alert("U bent ingecheckt.");
							save("visitedWaypoints", data.locations);
							displayWaypoints();
						}
						else {
							playAudio(getPhoneGapPath() + "sounds/failure.mp3");
							alert("U bent niet ingecheckt.");
						}
					}
				});
			}
			else {
				alert("Geen verbinding met het internet.");
			}
		};
		
		function onError(error) {
			$.mobile.loading("hide"); // Verbergt loading spinner
			
			alert("Geen locatie gevonden.");
		}

		navigator.geolocation.getCurrentPosition(onSuccess, onError);
	});
	
	// Swipe naar de vorige pagina
	$("#page_race").off("swiperight").on("swiperight", function(event){
		history.back();
	});
}

function playAudio(url) {
	var my_media = new Media(url);
	my_media.play();
}

		