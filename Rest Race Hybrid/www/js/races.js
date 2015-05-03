$(document).ready(function() {
	displayRaces();
});

function displayRaces() {
	
	$.ajax({
		type: "GET",
		url: restrace + "races?apikey=" + load("authKey") + "&type=participant&pageSize=100",
		headers: {
			Accept: "application/json"
		},
		success: function(allRaces) {
			
			sessionStorage.setItem("allRaces", JSON.stringify(allRaces));
			
			if (allRaces.length > 0) {
				var races = "";
				for(var i = 0; i < allRaces.length; i++) {
					
					aantalVisitedWaypoints = 0;
					for(var j = 0; j < allRaces[i].locations.length; j++) {
						if (load("visitedWaypoints").indexOf(allRaces[i].locations[j].location._id) != -1) {
							aantalVisitedWaypoints++;
						}
					}
					
					races += 	"<li data-icon='carat-r'><a href='#' id=" + allRaces[i]._id + " class='race listItem'>" + allRaces[i].name + 
								"<br/ ><span class='tekst'>" + aantalVisitedWaypoints + "/" + allRaces[i].locations.length + " waypoints</span>";
								
					aantalVisitedWaypoints == allRaces[i].locations.length ? races += "<span class='status'>Voltooid</span></a></li>" : races += "</a></li>"
					
				}
				$("#races").append(races).listview().listview("refresh");
				
				$(".race").on("tap", function() {
					window.location = "race.html?id=" + $(this).attr("id");
				});			
			}
			else {
				$("#races").hide();
				$("[data-role='main']").append("<span>Er zijn nog geen races waar u aan deelneemt.</span>");
			}	
			
		}
	});

}

$("#btn_race_toevoegen").on("tap", function() {
	window.location = "raceToevoegen.html";
});
