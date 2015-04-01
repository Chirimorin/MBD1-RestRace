$("#btn_registreren").on("tap", function() {
	
	$.ajax({
		type: "POST",
		url: restrace + "signup",
		headers: {
			Accept: "application/json"
		},
		dataType: "json",
		data: {
			"email": $("#emailadres").val(),
			"password": $("#wachtwoord1").val()
		},
		success: function(data) {
			if (data.authKey) {
				save("authKey", data.authKey);
				window.location = "races.html";
			}
			else {
				toonToast("Registreren mislukt.");
				$("#wachtwoord").val("");
			}
		}
	});

})