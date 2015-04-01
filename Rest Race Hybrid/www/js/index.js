$("#btn_inloggen").on("tap", function() {

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
				window.location = "races.html";
			}
			else {
				toonToast("E-mailadres of wachtwoord is onjuist.");
				$("#wachtwoord").val("");
			}
		}
	});

});

$("#btn_registreren").on("tap", function() {
	window.location = "registreren.html";
});