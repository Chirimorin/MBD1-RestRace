$("#btn_wijzigen").on("tap", function() {
	$("#oud_wachtwoord").val("");
	$("#nieuw_wachtwoord1").val("");
	$("#nieuw_wachtwoord2").val("");
	toonToast("Wachtwoord is gewijzigd");
});