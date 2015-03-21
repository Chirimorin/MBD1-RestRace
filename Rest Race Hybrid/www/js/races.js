$(document).ready(function() {
	displayRaces();
});

function displayRaces() {
	var allRaces = [
		{"_id":"1", "name":"Race 1"}, 
		{"_id":"2", "name":"Race 2"}, 
		{"_id":"3", "name":"Race 3"}, 
		{"_id":"4", "name":"Race 4"}, 
		{"_id":"5", "name":"Race 5"}
	];
	
	var races = "";
	for(var i = 0; i < allRaces.length; i++) {
		races += "<li id=" + allRaces[i]._id + " class='race' rel='external'>" + allRaces[i].name + "</li>";
	}
	$("#races").append(races).listview().listview("refresh");
	
	$(".race").on("tap", function() {
		window.location = "race.html?id=" + $(this).attr("id") + "&bla=abc";
	});
}
