$(document).on("pagebeforecreate", function( event ){ 
	if (typeof load("authKey") !== 'undefined' && load("authKey") !== null && load("authKey") != "") {
		window.location = "races.html";
	}
});

$("#btn_inloggen").on("tap", function() {
	
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
				$.mobile.loading("hide");
				
				if (data.authKey) {
					save("authKey", data.authKey);
					data.nickname != null ? save("nickname", data.nickname) : save("nickname", "");
					save("visitedWaypoints", data.visitedLocations);
					window.location = "races.html";
				}
				else {
					alert("E-mailadres en wachtwoord combinatie onjuist.");
					$("#wachtwoord").val("");
				}
			}
		});
	}

});

$("#btn_registreren").on("tap", function() {
	window.location = "registreren.html";
});