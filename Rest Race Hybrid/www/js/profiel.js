$(document).on("pagebeforeshow", "#page_profiel", function( event ) { 
	
	load("nickname") != "" ? $("#huidigeNickname").text(load("nickname")) : $("#huidigeNickname").text("(Geen nickname)");
	$("#nickname").val(load("nickname"));
	
	$("#nickname").focus();
	
	$("#btn_opslaan").off("tap").on("tap", function() {
		
		if (checkConnection()) {
	
			// Toont loading spinner
			$.mobile.loading("show", {
				text: msgText,
				textVisible: textVisible,
				theme: theme,
				textonly: textonly,
				html: html
			});
			
			$.ajax({
				type: "PUT",
				url: restrace + "users/nickname?apikey=" + load("authKey"),
				headers: {
					Accept: "application/json"
				},
				data: {
					"nickname": $("#nickname").val()
				},
				dataType: "json",
				success: function(data) {
					$.mobile.loading("hide"); // Verbergt loading spinner
					
					$("#nickname").val() != "" ? $("#huidigeNickname").text($("#nickname").val()) : $("#huidigeNickname").text("(Geen nickname)");
					save("nickname", $("#nickname").val());
					alert("Nickname opgeslagen.");
				},
				error: function() {
					$.mobile.loading("hide"); // Verbergt loading spinner
					
					alert("Nickname wijzigen mislukt.");
				}
			});
		}
		else {
			alert("Geen verbinding met het internet.");
		}
		
	});

});



