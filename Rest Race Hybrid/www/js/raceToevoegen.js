$(document).ready(function() {
    
	$("#code").val(load("code"));
	
	$(window).unload(function() {
		save("code", $("#code").val());
	});

	$("#btn_toevoegen").on("tap", function() {
		
		// Toont loading spinner
		$.mobile.loading("show", {
			text: msgText,
			textVisible: textVisible,
			theme: theme,
			textonly: textonly,
			html: html
		});
		
		if ($("#code").val() != "") {
			$.ajax({
				type: "PUT",
				url: restrace + "races/" + $("#code").val() + "/participant?apikey=" + load("authKey"),
				headers: {
					Accept: "application/json"
				},
				dataType: "json",
				success: function(data) {
					$.mobile.loading("hide"); // Verbergt loading spinner
					
					$("#code").val("");
					history.back(); // Gaat terug naar races overzicht pagina
				},
				error: function() {
					$.mobile.loading("hide"); // Verbergt loading spinner
					
					alert("Code is ongeldig.");
				}
			});
		}

	});

	// Swipe naar de vorige pagina
	$("#page_race_toevoegen").off("swiperight").on("swiperight", function(event){
		history.back();
	});

});
