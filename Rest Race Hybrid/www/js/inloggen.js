$(document).on("pagebeforeshow", "#page_inloggen", function() {
	
	if (load("authKey") !== null && load("authKey") != "") {
		$.mobile.changePage("#page_races", {transition: "none"});
	}
    
	$("#inloggen").on("tap", function() {
		
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
						$.mobile.loading("hide"); // Verbergt loading spinner
						
						if (data.authKey) {
							$("#emailadres").val("");
							$("#wachtwoord").val("");
							
							save("authKey", data.authKey);
							data.nickname != null ? save("nickname", data.nickname) : save("nickname", "");
							save("visitedWaypoints", data.visitedLocations);
							$.mobile.changePage("#page_races");
						}
						else {
							alert("E-mailadres en wachtwoord combinatie onjuist.");
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

	// Toont registreren pagina
	$("#btn_registreren").on("tap", function() {
		$.mobile.changePage("#page_registreren");
	});
	
});
