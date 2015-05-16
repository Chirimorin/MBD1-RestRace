$(document).on("pagebeforeshow", "#page_races", function(){
	
	if (load("toon_aantalIngecheckteWaypoints") === null || load("toon_aantalIngecheckteWaypoints") == "") {
		save("toon_aantalIngecheckteWaypoints", "Aan");
	}
	
	getRaces();
	
	// Toont race toevoegen pagina
	$("#race_toevoegen").on("tap", function() {
		$.mobile.changePage("#page_race_toevoegen");
	});
	
	// Swipe om menu te openen
	$("#page_races").off("swiperight").on("swiperight", function(event){
		$("#menu").panel("open");
	});

});

$(document).ready(function() {
	
	function getRaces() {
		
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
				type: "GET",
				url: restrace + "races?apikey=" + load("authKey") + "&type=participant&pageSize=100",
				headers: {
					Accept: "application/json"
				},
				success: function(allRaces) {
					$.mobile.loading("hide"); // Verbergt loading spinner
					sessionStorage.setItem("allRaces", JSON.stringify(allRaces)); // Slaat opgehaalde races op
					displayRaces(allRaces);	
				}
			});
		}
		else {
			alert("Geen verbinding met het internet.");
			displayRaces(JSON.parse(sessionStorage.getItem("allRaces"));	
		}

	}

	function displayRaces(allRaces) {
		$("#races").empty();
		
		if (allRaces.length > 0) {
			$("#meldingGeenRaces").hide();
			$("#races").show();
			
			var races = "";
			for(var i = 0; i < allRaces.length; i++) {
				
				// Bepaalt het aantal visited waypoint per race
				aantalVisitedWaypoints = 0;
				for(var j = 0; j < allRaces[i].locations.length; j++) {
					for(var k = 0; k < load("visitedWaypoints").length; k++) {
						if(load("visitedWaypoints")[k].location == allRaces[i].locations[j].location._id) {
							aantalVisitedWaypoints++;
						}
					}
				}
				
				races += 	"<li data-icon='carat-r'><a href='#' id=" + allRaces[i]._id + " class='race listItem'>" + allRaces[i].name;
				
				// Toont het afhankelijk van de setting het aantal visited waypoints wel of niet
				if (load("toon_aantalIngecheckteWaypoints") == "Aan") {
					races += "<br/ ><span class='tekst'>" + aantalVisitedWaypoints + "/" + allRaces[i].locations.length + " waypoints</span>";
				}
				
				aantalVisitedWaypoints == allRaces[i].locations.length ? races += "<span class='status'>Voltooid</span></a></li>" : races += "</a></li>"
				
			}
			$("#races").append(races).listview().listview("refresh");
			
			$(".race").on("tap", function() {
				save("race_id", $(this).attr("id"));
				$.mobile.changePage("#page_race"); // Toont race info pagina
			});			
		}
		else {
			$("#races").hide();
			$("#meldingGeenRaces").show();
		}	
	}
});


