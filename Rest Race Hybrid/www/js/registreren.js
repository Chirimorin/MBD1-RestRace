$(document).ready(function() {
	
	$("#registreren").on("tap", function() {
	
		if (checkConnection()) {
			
			// Toont loading spinner
			$.mobile.loading("show", {
				text: msgText,
				textVisible: textVisible,
				theme: theme,
				textonly: textonly,
				html: html
			});
			
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
						$.mobile.loading("hide"); // Verbergt loading spinner
						
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
		}
		else {
			alert("Geen verbinding met het internet.");
		}

	});

	// Swipe naar vorige pagina
	$("#page_registreren").off("swiperight").on("swiperight", function(event){
		history.back();
	});

});