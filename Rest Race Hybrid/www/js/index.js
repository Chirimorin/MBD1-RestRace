$("#btn_inloggen").on("tap", function() {

	if ($("#emailadres").val() != "" || $("#wachtwoord").val() != "") {
		$.ajax({
			type: "POST",
			url: restrace + "login",
			headers: {
				Accept: "application/json"
			},
			dataType: "json",
			data: {
				"email": $("#emailadres").val(),
				"password": $("#wachtwoord").val()
			},
			success: function(data) {
				if (data.authKey) {
					save("authKey", data.authKey);
					data.nickname != null ? save("nickname", data.nickname) : save("nickname", "");
					save("visitedWaypoints", data.visitedLocations);
					window.location = "races.html";
				}
				else {
					toonToast("E-mailadres of wachtwoord is onjuist.");
					$("#wachtwoord").val("");
				}
			}
		});
	}

});

$("#btn_registreren").on("tap", function() {
	window.location = "registreren.html";
});