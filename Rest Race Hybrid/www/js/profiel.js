$(document).ready(function() {
    //$("#nickname").val(); MOET OPGESLAGEN NICKNAME ZIJN
});

$("#btn_opslaan").on("tap", function() {
	toonToast("Nickname opgeslagen");
});

$("#link_wachtwoord_wijzigen").on("tap", function() {
	window.location = "wachtwoordWijzigen.html";
});
