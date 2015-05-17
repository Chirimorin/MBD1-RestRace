$(document).ready(function() {
	
	$("#emailadres").focus();
	
	$("#registreren").on("tap", function() {
	
		if (checkConnection()) {
            if ($("#registreeremailadres").val() != "" && $("#registreerwachtwoord").val() != "") {
                // Toont loading spinner
                $.mobile.loading("show", {
                    text: msgText,
                    textVisible: textVisible,
                    theme: theme,
                    textonly: textonly,
                    html: html
                });

                console.log( {
                    "email": $("#registreeremailadres").val(),
                    "password": $("#registreerwachtwoord").val()
                });


				$.ajax({
					type: "POST",
					url: restrace + "signup",
					headers: {
						Accept: "application/json"
					},
					dataType: "json",
					data: {
						"email": $("#registreeremailadres").val(),
						"password": $("#registreerwachtwoord").val()
					},
					success: function(data) {
						$.mobile.loading("hide"); // Verbergt loading spinner
						
						if (data.authKey) {
                            $("#races_list").addClass("active");
                            $("#races_detail").removeClass("active");

                            $("#registreeremailadres").val("");
                            $("#registreerwachtwoord").val("");

                            save("authKey", data.authKey);
                            data.nickname != null ? save("nickname", data.nickname) : save("nickname", "");
                            save("visitedWaypoints", data.visitedLocations);
                            $.mobile.changePage("#page_races");
						}
						else {
							alert("Registreren mislukt.");
							$("#wachtwoord").val("");
						}
					}
				});
			} else {
                alert("Voer een e-mail adres en een wachtwoord in");
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