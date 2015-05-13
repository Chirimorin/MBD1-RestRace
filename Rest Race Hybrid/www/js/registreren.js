$("#btn_registreren").on("tap", function() {
	
	if ($("#emailadres").val() != "" || $("#wachtwoord").val() != "") {
		$.ajax({
			type: "POST",
			url: restrace + "signup",
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
					alert("Registreren mislukt.");
					$("#wachtwoord").val("");
				}
			}
		});
	}

})