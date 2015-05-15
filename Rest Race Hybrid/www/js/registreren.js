$("#registreren").on("tap", function() {
	
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
				$.mobile.loading("hide");
				
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

});

$("#page_registreren").on("swiperight", function(event){
	history.back();
});