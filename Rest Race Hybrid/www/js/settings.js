$(document).ready(function() {
	
	$("#toon_aantalIngecheckteWaypoints").val(load("toon_aantalIngecheckteWaypoints")).slider("refresh");
	
	$("#toon_aantalIngecheckteWaypoints").change(function() {
		save("toon_aantalIngecheckteWaypoints", $("#toon_aantalIngecheckteWaypoints").val());
	});
	
});