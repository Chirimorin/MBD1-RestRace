var pageSetup = false;

$(document).ready(function() {
    // Toont race toevoegen pagina
    $("#race_toevoegen").off("tap").on("tap", function() {
        console.log("blah!");
        $.mobile.changePage("#page_race_toevoegen");
    });
});

$(document).on("pageshow", "#page_races", function() {
	if (load("toon_aantalIngecheckteWaypoints") === null || load("toon_aantalIngecheckteWaypoints") == "") {
		save("toon_aantalIngecheckteWaypoints", "Aan");
	}
	
	getRaces();
	
	// Swipe om menu te openen
	$("#page_races").off("swiperight").on("swiperight", function(event){
        if ($("#races_list").hasClass("active") || window.matchMedia("all and (min-width: 50em)").matches) {
            $("#menu").panel("open");
        } else {
            $("#races_list").addClass("active");
            $("#races_detail").removeClass("active");
        }
	});

});
	
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
		displayRaces(JSON.parse(sessionStorage.getItem("allRaces")));
	}
};

function displayRaces(allRaces) {
	$("#races").empty();

	if (allRaces.length > 0) {
		if ($("[data-role='main'] #melding").length > 0) {
			$("[data-role='main']").remove("#melding");
		}
		
		$("#races").show();
        $("#noRaces").addClass("hidden");
		
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

            displayRaceDetails();

            //var tabletLayout = window.matchMedia("all and (min-width: 50em)").matches;
//
			//var transition = tabletLayout ? 'none' : 'slide';
//
            //
            //$.mobile.changePage("#page_race", {transition: transition}); // Toont race info pagina
//
            //if (tabletLayout) {
            //    // Ga meteen terug naar de races lijst in het geval van tablet layout. Beide staan op het scherm.
            //    $.mobile.changePage("#page_races", {transition: 'none'}); // Toont race list pagina
            //}
		});			
	}
	else {
		$("#races").hide();
        $("#noRaces").removeClass("hidden");
		//$("[data-role='main']").append("<span id='melding'>Er zijn nog geen races waar u aan deelneemt.</span>");
}
};


